# Solana Best Practices

## Account Design

### Principle: Design for Parallelization

Solana's performance comes from parallel transaction execution. Avoid account conflicts.

**❌ Bad: Shared state**
```rust
// All users write to same account = bottleneck
pub struct GlobalState {
    total_users: u64,
    total_volume: u64,
}
```

**✅ Good: User-isolated state**
```rust
// Each user has their own account = parallel execution
pub struct UserAccount {
    user: Pubkey,
    volume: u64,
}
```

### Account Size

- Keep accounts <10KB when possible
- Use account extensions for large data
- Consider splitting into multiple accounts
- Plan for future growth (add reserved space)

**Example:**
```rust
pub struct UserAccount {
    // Current fields
    user: Pubkey,        // 32 bytes
    balance: u64,        // 8 bytes
    // Reserved for future
    reserved: [u8; 128], // Future expansion
}
```

### Account Validation

**Always validate:**
- Account ownership
- Account discriminator
- PDA derivation
- Signer requirements

**Example:**
```rust
#[derive(Accounts)]
pub struct Transfer<'info> {
    #[account(mut, has_one = authority)]
    pub user_account: Account<'info, UserAccount>,
    pub authority: Signer<'info>,
}
```

## Program Composability

### Cross-Program Invocation (CPI)

**Best practices:**
- Minimize CPI calls (each costs compute units)
- Validate returned data
- Handle CPI errors gracefully
- Document CPI dependencies

**Example:**
```rust
// Safe CPI with error handling
pub fn safe_transfer(ctx: Context<SafeTransfer>, amount: u64) -> Result<()> {
    let cpi_ctx = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        Transfer {
            from: ctx.accounts.from.to_account_info(),
            to: ctx.accounts.to.to_account_info(),
            authority: ctx.accounts.authority.to_account_info(),
        },
    );
    
    transfer(cpi_ctx, amount)
        .map_err(|e| {
            msg!("CPI transfer failed: {}", e);
            error!(ErrorCode::TransferFailed)
        })
}
```

### Program Derived Addresses (PDAs)

**Use PDAs for:**
- Deterministic account addresses
- Program-owned accounts
- Authority delegation

**Example:**
```rust
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + UserAccount::SIZE,
        seeds = [b"user", user.key().as_ref()],
        bump
    )]
    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
```

## State Management

### State Updates

**Atomic operations:**
```rust
// Good: Single atomic update
pub fn update_balance(ctx: Context<Update>, amount: u64) -> Result<()> {
    let account = &mut ctx.accounts.user_account;
    account.balance = account.balance
        .checked_add(amount)
        .ok_or(ErrorCode::Overflow)?;
    Ok(())
}
```

**Multi-step updates:**
```rust
// Handle partial failures
pub fn complex_update(ctx: Context<Update>) -> Result<()> {
    // Update A
    update_account_a(&mut ctx.accounts.account_a)?;
    
    // Update B (if this fails, A already changed)
    // Consider: Can we recover? Do we need rollback?
    update_account_b(&mut ctx.accounts.account_b)?;
    
    Ok(())
}
```

### Event Logging

**Emit events for:**
- State changes
- Administrative actions
- Errors

**Example:**
```rust
#[event]
pub struct TransferEvent {
    from: Pubkey,
    to: Pubkey,
    amount: u64,
    timestamp: i64,
}

pub fn transfer(ctx: Context<Transfer>, amount: u64) -> Result<()> {
    // ... transfer logic ...
    
    emit!(TransferEvent {
        from: ctx.accounts.from.key(),
        to: ctx.accounts.to.key(),
        amount,
        timestamp: Clock::get()?.unix_timestamp,
    });
    
    Ok(())
}
```

## Error Handling

### Custom Errors

**Define clear error types:**
```rust
#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient balance")]
    InsufficientBalance,
    #[msg("Unauthorized access")]
    Unauthorized,
    #[msg("Arithmetic overflow")]
    Overflow,
    #[msg("Invalid account state")]
    InvalidState,
}
```

### Safe Math

**Always use checked operations:**
```rust
// ❌ Bad: Can overflow
let result = a + b;

// ✅ Good: Safe arithmetic
let result = a.checked_add(b)
    .ok_or(ErrorCode::Overflow)?;
```

## Compute Unit Optimization

### Minimize Account Loads

**Load only what you need:**
```rust
// ❌ Bad: Loading full account
#[account(mut)]
pub user_account: Account<'info, UserAccount>,

// ✅ Good: Load only if needed
#[account(mut)]
pub user_account: AccountLoader<'info, UserAccount>,
```

### Reduce CPI Calls

**Batch operations when possible:**
```rust
// Instead of 10 separate transfers, batch them
pub fn batch_transfer(ctx: Context<Batch>, amounts: Vec<u64>) -> Result<()> {
    for (i, amount) in amounts.iter().enumerate() {
        // Single CPI context reused
        process_transfer(ctx.accounts.get(i), *amount)?;
    }
    Ok(())
}
```

### Compute Budget

**Request appropriate compute units:**
```rust
use solana_program::compute_budget::ComputeBudgetInstruction;

// Request 300K CU for complex operations
let compute_ix = ComputeBudgetInstruction::set_compute_unit_limit(300_000);
```

## Upgrade Patterns

### Program Upgrades

**Strategy:**
1. Deploy to devnet first
2. Gradual rollout (feature flags)
3. Monitor for 24h
4. Deploy to mainnet
5. Keep old program active for 1 week

### State Migration

**Plan for data migration:**
```rust
pub struct UserAccountV2 {
    // V1 fields
    user: Pubkey,
    balance: u64,
    // V2 new fields
    version: u8,
    new_feature: Option<u64>,
}

pub fn migrate(ctx: Context<Migrate>) -> Result<()> {
    let v1_data = &ctx.accounts.v1_account;
    let v2_account = &mut ctx.accounts.v2_account;
    
    // Copy existing data
    v2_account.user = v1_data.user;
    v2_account.balance = v1_data.balance;
    // Initialize new fields
    v2_account.version = 2;
    v2_account.new_feature = None;
    
    Ok(())
}
```

## Testing

### Unit Tests

**Test critical paths:**
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_transfer() {
        // Test normal case
        // Test edge cases (zero, max)
        // Test error cases (insufficient balance)
    }
}
```

### Integration Tests

**Test on devnet:**
- Real network conditions
- Compute unit usage
- Account interactions
- Error handling

## Performance Targets

| Metric | Target | Max |
|--------|--------|-----|
| Compute Units | <150K | 200K |
| Accounts | <32 | 64 |
| Transaction size | <800 bytes | 1232 bytes |
| Account size | <10KB | 10MB |

## Security Checklist

See [security-checklist.md](security-checklist.md) for detailed security review.

**Quick checks:**
- ✅ All accounts validated
- ✅ All math uses checked operations
- ✅ Authority checks in place
- ✅ PDAs use proper seeds
- ✅ No hardcoded addresses
- ✅ Events emitted for state changes

## Resources

- **Anchor Book:** https://book.anchor-lang.com/
- **Solana Cookbook:** https://solanacookbook.com/
- **Security Best Practices:** https://github.com/coral-xyz/sealevel-attacks
- **Performance Guide:** https://solana.com/docs/core/fees

## Common Patterns

### Oracle Integration
```rust
// Chainlink, Pyth, Switchboard
pub fn get_price(ctx: Context<GetPrice>) -> Result<u64> {
    let price_feed = &ctx.accounts.price_feed;
    // Validate freshness
    let clock = Clock::get()?;
    require!(
        clock.unix_timestamp - price_feed.timestamp < 60,
        ErrorCode::StalePrice
    );
    Ok(price_feed.price)
}
```

### Fee Collection
```rust
pub fn collect_fee(ctx: Context<CollectFee>, amount: u64) -> Result<()> {
    let fee = amount
        .checked_mul(FEE_BPS)
        .ok_or(ErrorCode::Overflow)?
        .checked_div(10000)
        .ok_or(ErrorCode::Overflow)?;
    
    // Transfer fee to protocol
    // Transfer remaining to user
    Ok(())
}
```

### Access Control
```rust
#[account]
pub struct Protocol {
    admin: Pubkey,
    operators: Vec<Pubkey>,
}

pub fn admin_only(ctx: Context<AdminAction>) -> Result<()> {
    require!(
        ctx.accounts.protocol.admin == ctx.accounts.signer.key(),
        ErrorCode::Unauthorized
    );
    Ok(())
}
```
