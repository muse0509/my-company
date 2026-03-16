# State Management Patterns

**Engineer A用 - State管理パターン集**

---

## 🎯 Overview

Axis MVP Frontendで使用するState管理のベストプラクティスとパターン。

**対象:**
- React Context API
- Custom Hooks
- State設計原則
- パフォーマンス最適化

---

## 🏗️ Architecture

### State Layer構造

```
src/
├── context/           # Global State (React Context)
│   ├── WalletContext.tsx
│   ├── StakingContext.tsx
│   └── UserContext.tsx
├── hooks/             # Custom Hooks
│   ├── useWallet.ts
│   ├── useStaking.ts
│   └── useBalance.ts
├── services/          # Business Logic Layer
│   ├── wallet.ts
│   ├── staking.ts
│   └── api.ts
└── components/        # UI Components (Local State)
    └── StakeButton/
        └── index.tsx  # useState for UI state
```

---

## 📋 Pattern 1: Context + Custom Hook

**いつ使う:**
- グローバルに共有したいState
- 複数コンポーネントでアクセス
- Wallet, User, Theme など

### 基本構造

```typescript
// context/WalletContext.tsx
import { createContext, useContext, useState, useCallback } from 'react';

// 1. State型定義
interface WalletState {
  publicKey: PublicKey | null;
  connected: boolean;
  balance: number | null;
}

// 2. Context型定義
interface WalletContextType {
  wallet: WalletState;
  connect: () => Promise<void>;
  disconnect: () => void;
}

// 3. Context作成
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// 4. Provider実装
export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>({
    publicKey: null,
    connected: false,
    balance: null,
  });

  const connect = useCallback(async () => {
    // 接続ロジック
  }, []);

  const disconnect = useCallback(() => {
    // 切断ロジック
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};

// 5. Custom Hook
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};
```

### 使用例

```typescript
// App.tsx
<WalletProvider>
  <App />
</WalletProvider>

// Component.tsx
const MyComponent = () => {
  const { wallet, connect, disconnect } = useWallet();
  
  return (
    <div>
      {wallet.connected ? (
        <p>Balance: {wallet.balance} SOL</p>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </div>
  );
};
```

---

## 📋 Pattern 2: Reducer Pattern

**いつ使う:**
- 複雑なState更新ロジック
- 複数の関連するStateフィールド
- 履歴管理・undo/redo

### 実装

```typescript
// context/StakingContext.tsx
import { useReducer } from 'react';

// State型
interface StakingState {
  stakedAmount: number;
  rewards: number;
  loading: boolean;
  error: Error | null;
}

// Action型
type StakingAction =
  | { type: 'STAKE_START' }
  | { type: 'STAKE_SUCCESS'; payload: { amount: number } }
  | { type: 'STAKE_ERROR'; payload: { error: Error } }
  | { type: 'UPDATE_REWARDS'; payload: { rewards: number } };

// Reducer
const stakingReducer = (state: StakingState, action: StakingAction): StakingState => {
  switch (action.type) {
    case 'STAKE_START':
      return { ...state, loading: true, error: null };
    
    case 'STAKE_SUCCESS':
      return {
        ...state,
        stakedAmount: state.stakedAmount + action.payload.amount,
        loading: false,
      };
    
    case 'STAKE_ERROR':
      return { ...state, loading: false, error: action.payload.error };
    
    case 'UPDATE_REWARDS':
      return { ...state, rewards: action.payload.rewards };
    
    default:
      return state;
  }
};

// Provider
export const StakingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stakingReducer, {
    stakedAmount: 0,
    rewards: 0,
    loading: false,
    error: null,
  });

  const stake = useCallback(async (amount: number) => {
    dispatch({ type: 'STAKE_START' });
    try {
      await stakeSOL(amount);
      dispatch({ type: 'STAKE_SUCCESS', payload: { amount } });
    } catch (error) {
      dispatch({ type: 'STAKE_ERROR', payload: { error: error as Error } });
    }
  }, []);

  return (
    <StakingContext.Provider value={{ state, stake }}>
      {children}
    </StakingContext.Provider>
  );
};
```

---

## 📋 Pattern 3: Computed Values

**いつ使う:**
- Stateから派生する値
- 計算コストが高い処理
- 再計算を避けたい

### useMemo使用

```typescript
const MyComponent = () => {
  const { wallet } = useWallet();
  const { stakedAmount, rewards } = useStaking();

  // 計算コストが高い処理
  const totalValue = useMemo(() => {
    return calculateTotalValue(wallet.balance, stakedAmount, rewards);
  }, [wallet.balance, stakedAmount, rewards]);

  const formattedBalance = useMemo(() => {
    return formatCurrency(wallet.balance);
  }, [wallet.balance]);

  return (
    <div>
      <p>Total Value: {totalValue}</p>
      <p>Balance: {formattedBalance}</p>
    </div>
  );
};
```

---

## 📋 Pattern 4: Async State

**いつ使う:**
- API呼び出し
- Transaction送信
- データフェッチ

### カスタムHook

```typescript
// hooks/useAsync.ts
import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const useAsync = <T,>(asyncFunction: (...args: any[]) => Promise<T>) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (...args: any[]) => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const data = await asyncFunction(...args);
      setState({ data, loading: false, error: null });
      return data;
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error });
      throw error;
    }
  }, [asyncFunction]);

  return { ...state, execute };
};
```

### 使用例

```typescript
const MyComponent = () => {
  const { data, loading, error, execute } = useAsync(fetchUserData);

  useEffect(() => {
    execute(userId);
  }, [userId, execute]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  if (!data) return null;

  return <UserProfile data={data} />;
};
```

---

## 🚀 Performance Optimization

### 1. useCallback for Functions

```typescript
// ❌ Bad - 毎回新しい関数
const Parent = () => {
  return <Child onClick={() => console.log('clicked')} />;
};

// ✅ Good - メモ化された関数
const Parent = () => {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  
  return <Child onClick={handleClick} />;
};
```

### 2. React.memo for Components

```typescript
// ❌ Bad - 毎回再レンダー
const ExpensiveChild = ({ data }) => {
  return <div>{expensiveCalculation(data)}</div>;
};

// ✅ Good - propsが変わらなければ再レンダーしない
const ExpensiveChild = React.memo(({ data }) => {
  return <div>{expensiveCalculation(data)}</div>;
});
```

### 3. Context分割

```typescript
// ❌ Bad - 一つの大きなContext
const AppContext = createContext({
  user: {},
  wallet: {},
  staking: {},
  theme: {},
});

// ✅ Good - 責任ごとに分割
const UserContext = createContext(userState);
const WalletContext = createContext(walletState);
const StakingContext = createContext(stakingState);
const ThemeContext = createContext(themeState);
```

### 4. State Selector Pattern

```typescript
// context/AppContext.tsx
const AppContext = createContext<AppState | undefined>(undefined);

// Custom hook with selector
export const useAppState = <T,>(selector: (state: AppState) => T): T => {
  const context = useContext(AppContext);
  if (!context) throw new Error('...');
  
  return useMemo(() => selector(context), [context, selector]);
};

// 使用例 - 必要な部分だけ取得
const MyComponent = () => {
  const username = useAppState(state => state.user.name);
  const balance = useAppState(state => state.wallet.balance);
  
  // user.emailが変わってもこのコンポーネントは再レンダーされない
  return <div>{username}: {balance}</div>;
};
```

---

## 🎨 Design Patterns

### Compound Components Pattern

```typescript
// Staking.tsx - 複合コンポーネント
const Staking = ({ children }) => {
  const [amount, setAmount] = useState(0);
  
  return (
    <StakingContext.Provider value={{ amount, setAmount }}>
      {children}
    </StakingContext.Provider>
  );
};

Staking.Input = function StakingInput() {
  const { amount, setAmount } = useContext(StakingContext);
  return <input value={amount} onChange={(e) => setAmount(e.target.value)} />;
};

Staking.Button = function StakingButton() {
  const { amount } = useContext(StakingContext);
  return <button onClick={() => stake(amount)}>Stake {amount} SOL</button>;
};

// 使用例
<Staking>
  <Staking.Input />
  <Staking.Button />
</Staking>
```

### Container/Presenter Pattern

```typescript
// Container (Logic)
const StakingContainer = () => {
  const { stake, loading, error } = useStaking();
  const [amount, setAmount] = useState(0);

  const handleStake = async () => {
    try {
      await stake(amount);
      setAmount(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StakingPresenter
      amount={amount}
      onAmountChange={setAmount}
      onStake={handleStake}
      loading={loading}
      error={error}
    />
  );
};

// Presenter (UI)
const StakingPresenter = ({ amount, onAmountChange, onStake, loading, error }) => {
  return (
    <div>
      <input value={amount} onChange={(e) => onAmountChange(e.target.value)} />
      <button onClick={onStake} disabled={loading}>
        {loading ? 'Staking...' : 'Stake'}
      </button>
      {error && <Error message={error.message} />}
    </div>
  );
};
```

---

## ✅ Best Practices

### 1. State Locality

```typescript
// ❌ Bad - グローバルStateに不要な値
const AppContext = createContext({
  modalOpen: false,  // これはローカルで良い
  buttonHovered: false,  // これもローカル
});

// ✅ Good - 本当に共有が必要なもののみ
const AppContext = createContext({
  user: {},
  wallet: {},
});

// モーダルはコンポーネント内で管理
const MyComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
};
```

### 2. Immutable Updates

```typescript
// ❌ Bad - 直接変更
state.balance = 100;
state.transactions.push(newTx);

// ✅ Good - イミュータブルな更新
setState({ ...state, balance: 100 });
setState({ ...state, transactions: [...state.transactions, newTx] });
```

### 3. Error Boundaries

```typescript
// ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// 使用
<ErrorBoundary>
  <WalletProvider>
    <App />
  </WalletProvider>
</ErrorBoundary>
```

---

## 🧪 Testing

### Context Testing

```typescript
// __tests__/WalletContext.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { WalletProvider, useWallet } from '../WalletContext';

const wrapper = ({ children }) => <WalletProvider>{children}</WalletProvider>;

describe('WalletContext', () => {
  it('should connect wallet', async () => {
    const { result } = renderHook(() => useWallet(), { wrapper });
    
    expect(result.current.wallet.connected).toBe(false);
    
    await act(async () => {
      await result.current.connect();
    });
    
    expect(result.current.wallet.connected).toBe(true);
  });
});
```

---

**Stateを美しく管理する 🎯**
