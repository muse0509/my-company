# Solana Web3.js Integration Guide

**Engineer A用 - Solana統合実装ガイド**

---

## 🎯 Overview

Axis MVPでのSolana Web3.js統合のベストプラクティスとパターン集。

**対象:**
- Wallet接続（Phantom, Solflare）
- Transaction送信・確認
- Program interaction（Drift Perps, Kagemusha）
- エラーハンドリング

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@solana/web3.js": "^1.73.0",
    "@solana/wallet-adapter-base": "^0.9.22",
    "@solana/wallet-adapter-react": "^0.15.32",
    "@solana/wallet-adapter-wallets": "^0.19.16",
    "@drift-labs/sdk": "^2.45.0"
  }
}
```

---

## 🔌 Wallet Connection

### Phantom Wallet

```typescript
// src/services/wallet/phantom.ts
import { PublicKey } from '@solana/web3.js';

interface PhantomWallet {
  isPhantom: boolean;
  publicKey: PublicKey;
  connect: () => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
}

declare global {
  interface Window {
    solana?: PhantomWallet;
  }
}

export const isPhantomInstalled = (): boolean => {
  return typeof window !== 'undefined' && window.solana?.isPhantom === true;
};

export const connectPhantom = async (): Promise<PublicKey> => {
  if (!isPhantomInstalled()) {
    throw new Error('Phantom wallet not installed. Please install from phantom.app');
  }

  try {
    const response = await window.solana!.connect();
    console.log('Phantom connected:', response.publicKey.toString());
    return response.publicKey;
  } catch (error: any) {
    if (error.code === 4001) {
      throw new Error('User rejected the connection request');
    }
    throw new Error(`Failed to connect: ${error.message}`);
  }
};

export const disconnectPhantom = async (): Promise<void> => {
  if (!window.solana) return;
  
  try {
    await window.solana.disconnect();
    console.log('Phantom disconnected');
  } catch (error) {
    console.error('Disconnect error:', error);
  }
};
```

### Connection Management

```typescript
// src/services/solana/connection.ts
import { Connection, clusterApiUrl, Commitment } from '@solana/web3.js';

// Cluster types
export type Cluster = 'mainnet-beta' | 'devnet' | 'testnet';

// Default commitment level
const DEFAULT_COMMITMENT: Commitment = 'confirmed';

// Create connection instance
export const createConnection = (cluster: Cluster = 'devnet'): Connection => {
  const endpoint = clusterApiUrl(cluster);
  return new Connection(endpoint, DEFAULT_COMMITMENT);
};

// Singleton connection instance
let connectionInstance: Connection | null = null;

export const getConnection = (cluster: Cluster = 'devnet'): Connection => {
  if (!connectionInstance) {
    connectionInstance = createConnection(cluster);
  }
  return connectionInstance;
};

// Get balance in SOL
export const getBalance = async (
  publicKey: PublicKey,
  connection: Connection = getConnection()
): Promise<number> => {
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; // Convert lamports to SOL
};
```

---

## 💸 Transactions

### Basic Transfer

```typescript
// src/services/solana/transfer.ts
import {
  Transaction,
  SystemProgram,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
  TransactionSignature,
} from '@solana/web3.js';

export const transferSOL = async (
  from: PublicKey,
  to: PublicKey,
  amount: number, // SOL amount
  connection: Connection
): Promise<TransactionSignature> => {
  // Create transfer instruction
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: amount * LAMPORTS_PER_SOL,
    })
  );

  // Get recent blockhash
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = from;

  // Sign transaction (with Phantom)
  if (!window.solana) {
    throw new Error('Wallet not connected');
  }
  const signedTransaction = await window.solana.signTransaction(transaction);

  // Send transaction
  const signature = await connection.sendRawTransaction(signedTransaction.serialize());

  // Confirm transaction
  await connection.confirmTransaction({
    signature,
    blockhash,
    lastValidBlockHeight,
  });

  console.log('Transfer successful:', signature);
  return signature;
};
```

### Transaction with Retry Logic

```typescript
// src/services/solana/transactionRetry.ts
import { Connection, TransactionSignature } from '@solana/web3.js';

interface RetryOptions {
  maxRetries: number;
  retryDelay: number; // milliseconds
}

export const sendTransactionWithRetry = async (
  transaction: Transaction,
  connection: Connection,
  options: RetryOptions = { maxRetries: 3, retryDelay: 1000 }
): Promise<TransactionSignature> => {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < options.maxRetries; attempt++) {
    try {
      // Get fresh blockhash
      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;

      // Sign
      if (!window.solana) {
        throw new Error('Wallet not connected');
      }
      const signed = await window.solana.signTransaction(transaction);

      // Send
      const signature = await connection.sendRawTransaction(signed.serialize(), {
        skipPreflight: false,
        preflightCommitment: 'confirmed',
      });

      // Confirm
      await connection.confirmTransaction({
        signature,
        blockhash,
        lastValidBlockHeight,
      });

      return signature;
    } catch (error: any) {
      lastError = error;
      console.warn(`Transaction attempt ${attempt + 1} failed:`, error.message);

      if (attempt < options.maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, options.retryDelay));
      }
    }
  }

  throw new Error(`Transaction failed after ${options.maxRetries} attempts: ${lastError?.message}`);
};
```

---

## 🎯 Drift Perps Integration

### Setup Drift Client

```typescript
// src/services/drift/client.ts
import { DriftClient, initialize } from '@drift-labs/sdk';
import { Connection, PublicKey } from '@solana/web3.js';
import { AnchorProvider, Wallet } from '@project-serum/anchor';

export const createDriftClient = async (
  connection: Connection,
  wallet: PublicKey
): Promise<DriftClient> => {
  // Create wallet adapter
  const walletAdapter: Wallet = {
    publicKey: wallet,
    signTransaction: async (tx) => {
      if (!window.solana) throw new Error('Wallet not connected');
      return await window.solana.signTransaction(tx);
    },
    signAllTransactions: async (txs) => {
      if (!window.solana) throw new Error('Wallet not connected');
      return await window.solana.signAllTransactions(txs);
    },
  };

  // Create provider
  const provider = new AnchorProvider(
    connection,
    walletAdapter,
    { commitment: 'confirmed' }
  );

  // Initialize Drift client
  const driftClient = new DriftClient({
    connection,
    wallet: walletAdapter,
    programID: new PublicKey('dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH'),
    env: 'devnet',
  });

  await driftClient.subscribe();

  return driftClient;
};
```

### Open Position

```typescript
// src/services/drift/position.ts
import { DriftClient } from '@drift-labs/sdk';
import { BN } from '@project-serum/anchor';

export type PositionDirection = 'long' | 'short';

export const openPosition = async (
  driftClient: DriftClient,
  marketIndex: number,
  direction: PositionDirection,
  baseAssetAmount: number, // UI amount (e.g., 1.5 SOL)
  leverage: number = 1
): Promise<string> => {
  try {
    // Convert to base units
    const baseAmount = new BN(baseAssetAmount * 1e9);

    // Open position
    const txSig = await driftClient.openPosition(
      direction === 'long' ? 'long' : 'short',
      baseAmount,
      marketIndex,
      leverage
    );

    console.log('Position opened:', txSig);
    return txSig;
  } catch (error: any) {
    console.error('Failed to open position:', error);
    throw new Error(`Position opening failed: ${error.message}`);
  }
};
```

### Close Position

```typescript
export const closePosition = async (
  driftClient: DriftClient,
  marketIndex: number
): Promise<string> => {
  try {
    const txSig = await driftClient.closePosition(marketIndex);
    console.log('Position closed:', txSig);
    return txSig;
  } catch (error: any) {
    console.error('Failed to close position:', error);
    throw new Error(`Position closing failed: ${error.message}`);
  }
};
```

---

## 🛡️ Error Handling

### Custom Error Types

```typescript
// src/utils/solana/errors.ts
export enum SolanaErrorCode {
  WALLET_NOT_INSTALLED = 'WALLET_NOT_INSTALLED',
  USER_REJECTED = 'USER_REJECTED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  BLOCKHASH_EXPIRED = 'BLOCKHASH_EXPIRED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export class SolanaError extends Error {
  code: SolanaErrorCode;
  originalError?: Error;

  constructor(message: string, code: SolanaErrorCode, originalError?: Error) {
    super(message);
    this.name = 'SolanaError';
    this.code = code;
    this.originalError = originalError;
  }
}

export const parseSolanaError = (error: any): SolanaError => {
  // User rejected
  if (error.code === 4001 || error.message?.includes('User rejected')) {
    return new SolanaError(
      'Transaction was rejected by user',
      SolanaErrorCode.USER_REJECTED,
      error
    );
  }

  // Insufficient funds
  if (error.message?.includes('insufficient funds')) {
    return new SolanaError(
      'Insufficient SOL balance for this transaction',
      SolanaErrorCode.INSUFFICIENT_FUNDS,
      error
    );
  }

  // Blockhash expired
  if (error.message?.includes('blockhash not found')) {
    return new SolanaError(
      'Transaction expired. Please try again',
      SolanaErrorCode.BLOCKHASH_EXPIRED,
      error
    );
  }

  // Network error
  if (error.message?.includes('fetch') || error.message?.includes('network')) {
    return new SolanaError(
      'Network error. Please check your connection',
      SolanaErrorCode.NETWORK_ERROR,
      error
    );
  }

  // Unknown
  return new SolanaError(
    `Transaction failed: ${error.message || 'Unknown error'}`,
    SolanaErrorCode.UNKNOWN_ERROR,
    error
  );
};
```

### Error Handler Hook

```typescript
// src/hooks/useSolanaError.ts
import { useState, useCallback } from 'react';
import { SolanaError, parseSolanaError } from '../utils/solana/errors';

export const useSolanaError = () => {
  const [error, setError] = useState<SolanaError | null>(null);

  const handleError = useCallback((err: any) => {
    const solanaError = parseSolanaError(err);
    setError(solanaError);
    console.error('[Solana Error]', solanaError);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
};
```

---

## 🔍 Best Practices

### 1. Always Check Wallet Connection

```typescript
const ensureWalletConnected = () => {
  if (!window.solana || !window.solana.publicKey) {
    throw new Error('Please connect your wallet first');
  }
};
```

### 2. Use Proper Commitment Levels

```typescript
// For reads - 'confirmed' is usually sufficient
const balance = await connection.getBalance(publicKey, 'confirmed');

// For writes - wait for 'finalized' for critical operations
await connection.confirmTransaction(signature, 'finalized');
```

### 3. Handle Blockhash Expiration

```typescript
// Always get fresh blockhash before signing
const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
transaction.recentBlockhash = blockhash;
```

### 4. Implement Retry Logic

```typescript
// Retry failed transactions with fresh blockhash
await sendTransactionWithRetry(transaction, connection, { maxRetries: 3 });
```

### 5. Clear Error Messages

```typescript
// User-friendly error messages
const getErrorMessage = (error: SolanaError): string => {
  switch (error.code) {
    case SolanaErrorCode.WALLET_NOT_INSTALLED:
      return 'Please install Phantom wallet to continue';
    case SolanaErrorCode.USER_REJECTED:
      return 'You cancelled the transaction';
    case SolanaErrorCode.INSUFFICIENT_FUNDS:
      return 'Insufficient SOL balance. Please add funds';
    default:
      return 'Transaction failed. Please try again';
  }
};
```

---

## 🧪 Testing

### Mock Wallet

```typescript
// src/test/mocks/wallet.ts
export const mockPhantomWallet = {
  isPhantom: true,
  publicKey: new PublicKey('11111111111111111111111111111111'),
  connect: jest.fn().mockResolvedValue({ publicKey: new PublicKey('...') }),
  disconnect: jest.fn().mockResolvedValue(undefined),
  signTransaction: jest.fn().mockResolvedValue({}),
  signAllTransactions: jest.fn().mockResolvedValue([]),
};
```

---

**Solana統合をマスターする 🚀**
