# Security Checklist

## Pre-Deployment Security Review

Use this checklist for every feature that touches:
- User funds
- Protocol state
- Administrative functions
- Cross-program calls

## Critical Checks

### 1. Authority Validation

**✅ Must verify:**
- Signer requirements
- Account ownership
- PDA derivation
- Authority delegation

**Example checks:**
```rust
// ✅ Good: Explicit signer check
#[derive(Accounts)]
pub struct AdminAction<'info> {
    #[account(mut, has_one = admin)]
    pub protocol: Account<'info, Protocol>,
    pub admin: Signer<'info>,
}

// ❌ Bad: No signer requirement
#[derive(Accounts)]
pub struct AdminAction<'info> {
    #[account(mut)]
    pub protocol: Account<'info, Protocol>,
    pub admin: AccountInfo<'info>, // Anyone can pass any account!
}
```

**Questions to ask:**
- Who can call this function?
- What authority checks are in place?
- Can an attacker bypass authority checks?
- Are PDAs properly validated?

### 2. Account Validation

**✅ Must verify:**
- Account discriminator
- Account owner (program ID)
- Account data integrity
- Expected account type

**Example checks:**
```rust
// ✅ Good: Account validation
#[derive(Accounts)]
pub struct Transfer<'info> {
    #[account(
        mut,
        constraint = user_account.owner == program_id @ ErrorCode::InvalidOwner
    )]
    pub user_account: Account<'info, UserAccount>,
}

// ❌ Bad: No validation
pub user_account: AccountInfo<'info>, // Could be any account!
```

**Questions to ask:**
- Are all accounts validated?
- Can an attacker substitute accounts?
- Is the account type checked?
- Are PDA seeds verified?

### 3. Arithmetic Safety

**✅ Must use:**
- Checked operations (checked_add, checked_mul, etc.)
- Saturating operations when appropriate
- Range validation

**Example checks:**
```rust
// ✅ Good: Checked arithmetic
let total = balance
    .checked_add(amount)
    .ok_or(ErrorCode::Overflow)?;

// ❌ Bad: Can overflow
let total = balance + amount; // Silent overflow!
```

**Questions to ask:**
- Are all arithmetic operations checked?
- Can overflow/underflow occur?
- Are negative values handled?
- Are divisions by zero checked?

### 4. Reentrancy Protection

**✅ Must verify:**
- State updates before external calls
- No recursive CPI calls
- Proper account locking

**Example checks:**
```rust
// ✅ Good: Update state first
pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    // 1. Update state first
    ctx.accounts.user.balance = ctx.accounts.user.balance
        .checked_sub(amount)
        .ok_or(ErrorCode::InsufficientBalance)?;
    
    // 2. Then make external call
    transfer_tokens(ctx, amount)?;
    
    Ok(())
}

// ❌ Bad: External call before state update
pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    // 1. External call first (vulnerable!)
    transfer_tokens(ctx, amount)?;
    
    // 2. Update state later (can be re-entered)
    ctx.accounts.user.balance -= amount;
    
    Ok(())
}
```

**Questions to ask:**
- Are state updates done before external calls?
- Can a function be re-entered?
- Are account locks properly used?

### 5. Input Validation

**✅ Must validate:**
- User input ranges
- Account addresses
- Enum variants
- Array lengths

**Example checks:**
```rust
// ✅ Good: Input validation
pub fn set_fee(ctx: Context<SetFee>, fee_bps: u16) -> Result<()> {
    require!(fee_bps <= 1000, ErrorCode::FeeTooHigh); // Max 10%
    ctx.accounts.protocol.fee_bps = fee_bps;
    Ok(())
}

// ❌ Bad: No validation
pub fn set_fee(ctx: Context<SetFee>, fee_bps: u16) -> Result<()> {
    ctx.accounts.protocol.fee_bps = fee_bps; // Could be 100%!
    Ok(())
}
```

**Questions to ask:**
- Are all inputs validated?
- What are acceptable ranges?
- Can invalid input cause issues?
- Are edge cases handled?

### 6. State Consistency

**✅ Must ensure:**
- Atomic state updates
- Proper error handling
- No partial updates on failure
- Invariant maintenance

**Example checks:**
```rust
// ✅ Good: Atomic updates
pub fn swap(ctx: Context<Swap>, amount: u64) -> Result<()> {
    // All updates in one transaction
    ctx.accounts.user_a.balance = ctx.accounts.user_a.balance
        .checked_sub(amount)?;
    ctx.accounts.user_b.balance = ctx.accounts.user_b.balance
        .checked_add(amount)?;
    
    // Verify invariant
    require!(
        ctx.accounts.user_a.balance + ctx.accounts.user_b.balance == TOTAL,
        ErrorCode::InvariantViolation
    );
    
    Ok(())
}
```

**Questions to ask:**
- What invariants must hold?
- Can state become inconsistent?
- What happens on partial failure?
- Are rollbacks needed?

## Attack Vectors

### 1. Signer Authorization Attack

**Attack:** Attacker calls privileged function without proper authority.

**Prevention:**
```rust
#[derive(Accounts)]
pub struct AdminAction<'info> {
    #[account(has_one = admin)]
    pub protocol: Account<'info, Protocol>,
    pub admin: Signer<'info>, // Must be signer
}
```

### 2. Account Substitution Attack

**Attack:** Attacker passes different account than expected.

**Prevention:**
```rust
#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(
        mut,
        seeds = [b"user", authority.key().as_ref()],
        bump,
        has_one = authority
    )]
    pub user_account: Account<'info, UserAccount>,
    pub authority: Signer<'info>,
}
```

### 3. Integer Overflow Attack

**Attack:** Overflow causes balance to wrap around.

**Prevention:**
```rust
// Always use checked operations
let new_balance = balance
    .checked_add(amount)
    .ok_or(ErrorCode::Overflow)?;
```

### 4. Reentrancy Attack

**Attack:** Recursive calls drain account before state update.

**Prevention:**
```rust
// Update state BEFORE external calls
user.balance = user.balance.checked_sub(amount)?;
transfer_tokens(amount)?; // External call after
```

### 5. Precision Loss Attack

**Attack:** Rounding errors allow stealing dust amounts.

**Prevention:**
```rust
// Round in protocol's favor
let fee = amount
    .checked_mul(FEE_BPS)?
    .checked_add(9999)?  // Round up
    .checked_div(10000)?;
```

### 6. Frontrunning Attack

**Attack:** Attacker sees transaction in mempool and frontruns it.

**Prevention:**
- Use Jito bundles for MEV protection
- Implement slippage protection
- Add time-based restrictions

```rust
pub fn swap(ctx: Context<Swap>, min_output: u64) -> Result<()> {
    let output = calculate_output()?;
    require!(output >= min_output, ErrorCode::SlippageTooHigh);
    Ok(())
}
```

### 7. Flash Loan Attack

**Attack:** Manipulate protocol state with borrowed funds in single transaction.

**Prevention:**
- Use time-weighted average prices (TWAP)
- Implement cooldown periods
- Check oracle freshness

```rust
pub fn check_price(ctx: Context<CheckPrice>) -> Result<u64> {
    let clock = Clock::get()?;
    let price_feed = &ctx.accounts.price_feed;
    
    // Require fresh price
    require!(
        clock.unix_timestamp - price_feed.timestamp < 60,
        ErrorCode::StalePrice
    );
    
    Ok(price_feed.price)
}
```

## Audit Checklist

### Before Code Review

- [ ] All code is documented
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] No compiler warnings
- [ ] Code follows style guide

### During Code Review

- [ ] All authority checks present
- [ ] All accounts validated
- [ ] All math uses checked operations
- [ ] No reentrancy vulnerabilities
- [ ] Input validation complete
- [ ] Error handling comprehensive
- [ ] State consistency maintained

### Before External Audit

- [ ] Internal security review complete
- [ ] All findings addressed
- [ ] Test coverage >80%
- [ ] Documentation complete
- [ ] Threat model documented

### Before Mainnet Deploy

- [ ] External audit complete
- [ ] All audit findings resolved
- [ ] Bug bounty program active
- [ ] Monitoring in place
- [ ] Emergency pause mechanism tested

## Audit Requirements

### Always require external audit for:

- Financial operations (deposits, withdrawals, swaps)
- Administrative functions (upgrades, parameter changes)
- Cross-program invocations
- Oracle integrations
- Token minting/burning

### Can skip external audit for:

- Read-only functions
- View functions
- Non-critical logging
- UI helper functions

## Security Testing

### Test Cases to Cover

1. **Authority tests:**
   - Valid authority can execute
   - Invalid authority rejected
   - Authority transfer works

2. **Overflow tests:**
   - Max values handled
   - Overflow rejected
   - Underflow rejected

3. **Reentrancy tests:**
   - Recursive calls rejected
   - State updates persistent

4. **Account validation tests:**
   - Invalid accounts rejected
   - Account substitution rejected
   - PDA validation works

5. **Edge cases:**
   - Zero amounts
   - Maximum amounts
   - Empty accounts
   - Duplicate accounts

## Incident Response

### If vulnerability found:

1. **Assess severity:**
   - Critical: Funds at risk
   - High: Protocol integrity at risk
   - Medium: Edge case issues
   - Low: Minor issues

2. **Immediate actions:**
   - Pause affected functions
   - Notify users
   - Prepare fix
   - Deploy to devnet

3. **Post-incident:**
   - Root cause analysis
   - Update security checklist
   - Improve testing
   - Document lessons learned

## Resources

- **Sealevel Attacks:** https://github.com/coral-xyz/sealevel-attacks
- **Anchor Security:** https://www.anchor-lang.com/docs/the-accounts-struct
- **Solana Security:** https://solana.com/developers/guides/advanced/security
- **Audit Reports:** Study past audits in the Solana ecosystem

## Contact External Auditors

For mainnet deployment, contact:

- **Neodyme:** Top Solana auditor
- **OtterSec:** Specialized in DeFi
- **Kudelski Security:** Enterprise-grade
- **Trail of Bits:** Comprehensive reviews

Budget: $15K-$50K per audit depending on complexity.
