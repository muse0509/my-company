# Solana Mobile開発ガイド - Axis展開用

**作成日**: 2026年3月13日  
**対象**: Axis Pizzaアプリのモバイル展開  
**目標**: React NativeでのSolana Mobile対応アプリ開発と、dApp Store公開まで

---

## 📑 目次

1. [Solana Mobile Stack (SMS) 概要](#1-solana-mobile-stack-sms-概要)
2. [開発環境のセットアップ](#2-開発環境のセットアップ)
3. [React Native vs PWA比較](#3-react-native-vs-pwa比較)
4. [Mobile Wallet Adapter統合](#4-mobile-wallet-adapter統合)
5. [Seed Vault統合](#5-seed-vault統合)
6. [Saga/Seeker デバイス対応](#6-sagaseeker-デバイス対応)
7. [dApp Store申請プロセス](#7-dapp-store申請プロセス)
8. [実装事例](#8-実装事例)
9. [トラブルシューティング](#9-トラブルシューティング)

---

## 1. Solana Mobile Stack (SMS) 概要

### 1.1 SMSとは

Solana Mobile Stack (SMS) は、モバイルでのWeb3体験を実現する統合フレームワークです。

**主要コンポーネント:**

- **Mobile Wallet Adapter (MWA)**: dAppとウォレット間の通信プロトコル
- **Seed Vault**: ハードウェアベースのセキュアキー管理システム
- **Solana dApp Store**: 分散型アプリ配信プラットフォーム

### 1.2 なぜモバイルが重要か

- **ユーザー獲得**: モバイルユーザーは世界人口の80%以上
- **UX向上**: ネイティブアプリの滑らかな操作感
- **セキュリティ**: Seed Vaultによるハードウェアレベルの保護
- **独自配信**: Google Playに依存しない配信チャネル

### 1.3 技術スタック

```
┌─────────────────────────────────┐
│      Your dApp (React Native)   │
├─────────────────────────────────┤
│   Mobile Wallet Adapter (MWA)   │
├─────────────────────────────────┤
│  @solana/web3.js / @solana/spl  │
├─────────────────────────────────┤
│      Solana Blockchain RPC      │
└─────────────────────────────────┘
```

---

## 2. 開発環境のセットアップ

### 2.1 前提条件

**必須ツール:**
```bash
# Node.js (v18以上)
node --version

# React Native CLI
npm install -g react-native-cli

# Android Studio (最新版)
# https://developer.android.com/studio

# Java Development Kit (JDK 17)
java -version

# Watchman (macOS)
brew install watchman
```

**Android Studio設定:**
1. SDK Manager → Android 13.0 (API Level 33) をインストール
2. Android SDK Build-Tools 33.0.0
3. Android Emulator
4. Android SDK Platform-Tools

**環境変数設定 (macOS/Linux):**
```bash
# ~/.zshrc または ~/.bash_profile に追加
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

### 2.2 プロジェクト初期化

**オプション1: Scaffoldテンプレート使用（推奨）**
```bash
npx react-native init AxisMobile \
  --template @solana-mobile/solana-mobile-dapp-scaffold

cd AxisMobile
npm install
```

**オプション2: ゼロから構築**
```bash
npx react-native init AxisMobile
cd AxisMobile

# Solana Mobile関連パッケージ
npm install @solana-mobile/mobile-wallet-adapter-protocol \
  @solana-mobile/mobile-wallet-adapter-protocol-web3js \
  @solana/web3.js \
  react-native-get-random-values \
  buffer

# その他UI/ユーティリティ
npm install @react-navigation/native \
  @react-navigation/bottom-tabs \
  react-native-safe-area-context
```

### 2.3 Android設定

**android/build.gradle を編集:**
```gradle
buildscript {
    ext {
        buildToolsVersion = "33.0.0"
        minSdkVersion = 23
        compileSdkVersion = 33
        targetSdkVersion = 33
        ndkVersion = "25.1.8937393"
    }
}
```

**android/app/src/main/AndroidManifest.xml に追加:**
```xml
<manifest>
    <uses-permission android:name="android.permission.INTERNET" />
    
    <application>
        <!-- Mobile Wallet Adapter intent filter -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="solana-wallet" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

### 2.4 テスト用ウォレットのインストール

**エミュレーターまたは実機にMWA対応ウォレットをインストール:**

- **Phantom Wallet** (推奨): [Google Play](https://play.google.com/store/apps/details?id=app.phantom)
- **Solflare**: [Google Play](https://play.google.com/store/apps/details?id=com.solflare.mobile)
- **fakewallet** (開発用): [GitHub Releases](https://github.com/solana-mobile/mobile-wallet-adapter/releases)

```bash
# fakewallet を直接インストール
adb install fakewallet-release.apk
```

---

## 3. React Native vs PWA比較

### 3.1 比較表

| 項目 | React Native | PWA |
|------|--------------|-----|
| **パフォーマンス** | ⭐⭐⭐⭐⭐ ネイティブ並み | ⭐⭐⭐ ブラウザ依存 |
| **Mobile Wallet Adapter** | ✅ 完全サポート | ⚠️ 限定サポート |
| **Seed Vault統合** | ✅ 対応 | ❌ 非対応 |
| **オフライン機能** | ✅ 可能 | ⚠️ 制限あり |
| **プッシュ通知** | ✅ ネイティブ通知 | ⚠️ 制限あり |
| **dApp Store公開** | ✅ 可能 | ❌ Web版のみ |
| **開発コスト** | 💰💰💰 高い | 💰💰 中程度 |
| **配信** | App Store必要 | URLで即配信 |
| **更新** | ストア審査必要 | 即座に反映 |

### 3.2 Axis Pizzaへの推奨

**React Nativeを推奨する理由:**

1. **取引の高速性**: DeFiトレーディングには低レイテンシが必須
2. **Seed Vault**: 大口トレーダーには最高レベルのセキュリティ必要
3. **MWA統合**: Drift Perps等のプロトコルとのシームレスな連携
4. **ブランド価値**: dApp Store公開でSolanaエコシステム内での認知度向上

**PWAが適するケース:**
- 簡単な情報閲覧アプリ
- MVP/プロトタイプ
- マーケティングキャンペーン用ツール

---

## 4. Mobile Wallet Adapter統合

### 4.1 MWAの仕組み

```
┌──────────────┐         ┌──────────────┐
│   Your dApp  │◄────────►│ MWA Protocol │
└──────────────┘         └──────────────┘
                                 │
                                 ▼
                          ┌──────────────┐
                          │ Wallet App   │
                          │ (Phantom等)  │
                          └──────────────┘
```

**通信フロー:**
1. dAppがMWAセッション開始リクエスト
2. OSがインストール済みウォレットを表示
3. ユーザーがウォレット選択
4. ウォレットが接続承認
5. dAppがトランザクション送信
6. ウォレットが署名してdAppに返却

### 4.2 実装手順

**Step 1: 基本セットアップ**

```typescript
// App.tsx
import React from 'react';
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol';
import {Connection, clusterApiUrl, PublicKey} from '@solana/web3.js';

// Polyfill for React Native
import 'react-native-get-random-values';
import {Buffer} from 'buffer';
global.Buffer = Buffer;

const DEVNET_ENDPOINT = clusterApiUrl('devnet');
const connection = new Connection(DEVNET_ENDPOINT, 'confirmed');
```

**Step 2: ウォレット接続**

```typescript
// hooks/useAuthorization.ts
import {useState, useCallback} from 'react';
import {
  transact,
  Web3MobileWallet,
} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';

export interface Authorization {
  publicKey: PublicKey;
  accountLabel?: string;
  walletUriBase?: string;
}

export function useAuthorization() {
  const [authorization, setAuthorization] = useState<Authorization | null>(null);

  const authorize = useCallback(async () => {
    try {
      const auth = await transact(async (wallet: Web3MobileWallet) => {
        // ウォレット認証をリクエスト
        const authResult = await wallet.authorize({
          cluster: 'devnet',
          identity: {
            name: 'Axis Pizza',
            uri: 'https://axis.pizza',
            icon: 'icon.png', // アプリアイコン
          },
        });

        return {
          publicKey: authResult.accounts[0].publicKey,
          accountLabel: authResult.accounts[0].label,
          walletUriBase: authResult.wallet_uri_base,
        };
      });

      setAuthorization(auth);
      return auth;
    } catch (error) {
      console.error('Authorization failed:', error);
      throw error;
    }
  }, []);

  const deauthorize = useCallback(async () => {
    if (!authorization) return;

    try {
      await transact(async (wallet: Web3MobileWallet) => {
        await wallet.deauthorize({auth_token: authorization.walletUriBase});
      });
      setAuthorization(null);
    } catch (error) {
      console.error('Deauthorization failed:', error);
    }
  }, [authorization]);

  return {
    authorization,
    authorize,
    deauthorize,
  };
}
```

**Step 3: トランザクション送信**

```typescript
// hooks/useTransact.ts
import {useCallback} from 'react';
import {
  transact,
  Web3MobileWallet,
} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import {
  Connection,
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';

export function useTransact(connection: Connection, authorization: Authorization | null) {
  const sendTransaction = useCallback(
    async (toPublicKey: PublicKey, amount: number) => {
      if (!authorization) {
        throw new Error('Not authorized');
      }

      return await transact(async (wallet: Web3MobileWallet) => {
        // 最新のブロックハッシュを取得
        const {blockhash, lastValidBlockHeight} =
          await connection.getLatestBlockhash();

        // トランザクション作成
        const transaction = new Transaction({
          feePayer: authorization.publicKey,
          blockhash,
          lastValidBlockHeight,
        }).add(
          SystemProgram.transfer({
            fromPubkey: authorization.publicKey,
            toPubkey: toPublicKey,
            lamports: amount * LAMPORTS_PER_SOL,
          })
        );

        // ウォレットで署名
        const signedTransactions = await wallet.signAndSendTransactions({
          transactions: [transaction],
        });

        // トランザクション確認
        const signature = signedTransactions[0];
        await connection.confirmTransaction({
          signature,
          blockhash,
          lastValidBlockHeight,
        });

        return signature;
      });
    },
    [connection, authorization]
  );

  return {sendTransaction};
}
```

**Step 4: UIコンポーネント**

```typescript
// components/WalletButton.tsx
import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useAuthorization} from '../hooks/useAuthorization';

export function WalletButton() {
  const {authorization, authorize, deauthorize} = useAuthorization();

  return (
    <View style={styles.container}>
      {authorization ? (
        <>
          <Text style={styles.address}>
            Connected: {authorization.publicKey.toBase58().slice(0, 8)}...
          </Text>
          <Button title="Disconnect" onPress={deauthorize} />
        </>
      ) : (
        <Button title="Connect Wallet" onPress={authorize} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  address: {
    fontSize: 14,
    marginBottom: 10,
  },
});
```

### 4.3 エラーハンドリング

```typescript
// utils/mwaErrors.ts
export enum MWAError {
  USER_DECLINED = 'USER_DECLINED',
  NO_WALLET_FOUND = 'NO_WALLET_FOUND',
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  TIMEOUT = 'TIMEOUT',
}

export function handleMWAError(error: any): string {
  if (error.message?.includes('User declined')) {
    return 'ユーザーが接続を拒否しました';
  }
  if (error.message?.includes('No wallet found')) {
    return 'ウォレットアプリがインストールされていません';
  }
  if (error.message?.includes('timeout')) {
    return 'タイムアウトしました。もう一度お試しください';
  }
  return `エラーが発生しました: ${error.message}`;
}
```

---

## 5. Seed Vault統合

### 5.1 Seed Vaultとは

Seed Vaultは、Solana Saga/Seekerデバイスに搭載されたハードウェアベースのセキュアキー管理システムです。

**特徴:**
- **ハードウェア分離**: キーは隔離されたSecure Elementに保存
- **生体認証**: 指紋/顔認証でのアクセス制御
- **バックアップ**: クラウド/ローカルでの暗号化バックアップ
- **階層的鍵導出**: HD Walletサポート (BIP32/39/44)

### 5.2 実装

```typescript
// hooks/useSeedVault.ts
import {useCallback, useState} from 'react';
import {NativeModules} from 'react-native';

const {SeedVault} = NativeModules;

export interface SeedVaultAccount {
  publicKey: string;
  derivationPath: string;
}

export function useSeedVault() {
  const [isAvailable, setIsAvailable] = useState(false);

  // Seed Vault利用可否チェック
  const checkAvailability = useCallback(async () => {
    try {
      const available = await SeedVault.isAvailable();
      setIsAvailable(available);
      return available;
    } catch (error) {
      console.log('Seed Vault not available:', error);
      return false;
    }
  }, []);

  // キー生成
  const createKey = useCallback(async (purpose: string) => {
    try {
      const account = await SeedVault.createKey({
        purpose,
        derivationPath: "m/44'/501'/0'/0'", // Solana標準パス
      });
      return account as SeedVaultAccount;
    } catch (error) {
      console.error('Key creation failed:', error);
      throw error;
    }
  }, []);

  // 署名
  const signTransaction = useCallback(
    async (publicKey: string, transaction: Buffer) => {
      try {
        const signature = await SeedVault.signTransaction({
          publicKey,
          transaction: transaction.toString('base64'),
        });
        return Buffer.from(signature, 'base64');
      } catch (error) {
        console.error('Signing failed:', error);
        throw error;
      }
    },
    []
  );

  return {
    isAvailable,
    checkAvailability,
    createKey,
    signTransaction,
  };
}
```

### 5.3 Seed Vault vs 通常ウォレット判定

```typescript
// App.tsx での使用例
import {useSeedVault} from './hooks/useSeedVault';

function App() {
  const {isAvailable, checkAvailability} = useSeedVault();

  useEffect(() => {
    checkAvailability().then(available => {
      if (available) {
        console.log('Seed Vault available - Premium security enabled');
        // プレミアム機能を有効化
      } else {
        console.log('Using standard wallet flow');
      }
    });
  }, []);

  // ...
}
```

---

## 6. Saga/Seeker デバイス対応

### 6.1 デバイス仕様

**Saga (第1世代 - 2023年発売)**
- OS: Android 13ベース Solana Mobile Stack
- プロセッサ: Qualcomm Snapdragon 8+ Gen 1
- Seed Vault: Secure Element搭載
- 価格: $599 → $299 (値下げ)

**Seeker (第2世代 - 2025年予定)**
- OS: Android 14ベース
- 強化されたSeed Vault v2
- 価格: $450予定
- 予約: 10万台以上

### 6.2 デバイス判定

```typescript
// utils/deviceDetection.ts
import {Platform, NativeModules} from 'react-native';

export enum SolanaDevice {
  SAGA = 'saga',
  SEEKER = 'seeker',
  OTHER = 'other',
}

export function detectSolanaDevice(): SolanaDevice {
  if (Platform.OS !== 'android') {
    return SolanaDevice.OTHER;
  }

  const {Build} = NativeModules;
  const model = Build?.MODEL?.toLowerCase() || '';

  if (model.includes('saga')) {
    return SolanaDevice.SAGA;
  }
  if (model.includes('seeker')) {
    return SolanaDevice.SEEKER;
  }

  return SolanaDevice.OTHER;
}

// 使用例
const device = detectSolanaDevice();
if (device === SolanaDevice.SAGA) {
  console.log('Running on Saga - Enable all features');
} else if (device === SolanaDevice.SEEKER) {
  console.log('Running on Seeker - Enable v2 features');
} else {
  console.log('Standard Android device');
}
```

### 6.3 デバイス別最適化

```typescript
// config/deviceConfig.ts
export const getDeviceConfig = (device: SolanaDevice) => {
  switch (device) {
    case SolanaDevice.SAGA:
      return {
        seedVaultVersion: 1,
        maxConcurrentTransactions: 5,
        biometricAuth: true,
        hardwareAcceleration: true,
      };
    case SolanaDevice.SEEKER:
      return {
        seedVaultVersion: 2,
        maxConcurrentTransactions: 10,
        biometricAuth: true,
        hardwareAcceleration: true,
        enhancedSecurity: true, // v2の新機能
      };
    default:
      return {
        seedVaultVersion: 0,
        maxConcurrentTransactions: 3,
        biometricAuth: false,
        hardwareAcceleration: false,
      };
  }
};
```

---

## 7. dApp Store申請プロセス

### 7.1 申請前チェックリスト

**必須要件:**
- ✅ Android APK/AAB ビルド完成
- ✅ アプリアイコン (512x512px, PNG)
- ✅ スクリーンショット 3-5枚
- ✅ プライバシーポリシーURL
- ✅ 利用規約URL
- ✅ Solana Payでの支払い準備 (約0.1 SOL)

**推奨事項:**
- デモビデオ (30秒程度)
- 詳細な説明文 (英語 + 日本語)
- サポートメールアドレス
- Discordコミュニティリンク

### 7.2 ビルド手順

**Step 1: リリースビルド設定**

```bash
# android/app/build.gradle を編集
android {
    ...
    defaultConfig {
        applicationId "com.axispizza.mobile"  # 変更
        versionCode 1
        versionName "1.0.0"
    }

    signingConfigs {
        release {
            storeFile file('axis-release-key.keystore')
            storePassword 'YOUR_STORE_PASSWORD'
            keyAlias 'axis-key-alias'
            keyPassword 'YOUR_KEY_PASSWORD'
        }
    }

    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

**Step 2: キーストア生成**

```bash
cd android/app

keytool -genkeypair -v \
  -storetype PKCS12 \
  -keystore axis-release-key.keystore \
  -alias axis-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# パスワードを記録！
```

**Step 3: APK/AABビルド**

```bash
# APKビルド（テスト用）
cd android
./gradlew assembleRelease

# 出力: android/app/build/outputs/apk/release/app-release.apk

# AABビルド（本番用、推奨）
./gradlew bundleRelease

# 出力: android/app/build/outputs/bundle/release/app-release.aab
```

**Step 4: ビルド検証**

```bash
# APKをエミュレーターにインストールしてテスト
adb install android/app/build/outputs/apk/release/app-release.apk

# 起動確認
adb shell am start -n com.axispizza.mobile/.MainActivity
```

### 7.3 dApp Store申請

**Step 1: publish.solanamobile.com にアクセス**

1. https://publish.solanamobile.com にアクセス
2. ウォレット接続 (Phantom等)
3. "Submit New App" をクリック

**Step 2: アプリ情報入力**

```
App Name: Axis Pizza
Category: Finance / DeFi
Short Description (50文字):
  Trade perpetuals on Solana with zero gas fees

Long Description (500文字):
  Axis Pizza is the ultimate mobile trading experience for Solana DeFi.
  
  Features:
  - Trade Drift Perpetuals directly from mobile
  - Zero gas fee swaps
  - Real-time price feeds
  - Integrated with Seed Vault for maximum security
  - Support for Jupiter aggregation
  
  Built for Solana Mobile Stack with full MWA support.

Tags: DeFi, Trading, Perpetuals, DEX
Website: https://axis.pizza
Support Email: support@axis.pizza
Discord: https://discord.gg/axispizza
Twitter: @axis_pizza
```

**Step 3: ファイルアップロード**

- **APK/AAB**: app-release.aab (推奨)
- **Icon**: 512x512px PNG
- **Screenshots**: 
  - ホーム画面
  - トレーディング画面
  - ウォレット接続画面
  - ポートフォリオ画面
  - 設定画面

**Step 4: Solana Pay支払い**

```
支払い方法: Solana Pay
金額: ~0.1 SOL (約$15-20)
用途: dApp Store NFTミント費用

※ このNFTがアプリの公開証明となる
```

**Step 5: レビュー待ち**

- 通常1-2週間で審査完了
- 不備があればメールで連絡
- 承認後、即座にdApp Storeで公開

### 7.4 申請後の更新

```bash
# バージョンアップ時
# android/app/build.gradle
defaultConfig {
    versionCode 2  # インクリメント
    versionName "1.1.0"
}

# 再ビルドして publish.solanamobile.com で "Update App"
```

---

## 8. 実装事例

### 8.1 Jupiter Mobile

**概要:**
- Solana最大のDEXアグリゲーター
- dApp Store公開済み
- 100万+ダウンロード

**技術スタック:**
```
React Native + TypeScript
Mobile Wallet Adapter
Jupiter V6 API
WebSocket for price feeds
```

**学べるポイント:**
- 高速スワップUI実装
- リアルタイム価格表示
- スリッページ管理
- トランザクション履歴

**GitHub:** https://github.com/jup-ag/jupiter-mobile (非公開)  
**dApp Store:** https://dapp-store.solanamobile.com/app/jupiter

### 8.2 Tensor Mobile

**概要:**
- NFTマーケットプレイス
- Solana最大のNFT取引量

**技術スタック:**
```
React Native
MWA for transactions
Metaplex Standard
IPFS for metadata
```

**学べるポイント:**
- NFT画像の高速ロード
- バッチトランザクション
- オークション機能
- ウォッチリスト

**dApp Store:** https://dapp-store.solanamobile.com/app/tensor

### 8.3 Phantom Wallet

**概要:**
- Solana主要ウォレット
- MWAプロトコル完全実装

**技術スタック:**
```
React Native (ウォレット側)
Seed Vault統合
Biometric Auth
Push Notifications
```

**学べるポイント:**
- ウォレット側のMWA実装
- Seed Vaultの活用方法
- 複数アカウント管理
- セキュアなキー保存

**GitHub:** https://github.com/phantom (一部公開)

### 8.4 Solana Mobile Sample Apps

**公式サンプル集:**

```bash
# リポジトリクローン
git clone https://github.com/solana-mobile/solana-mobile-dapp-scaffold

# 各サンプル
examples/
├── example-react-native-app/      # 基本的なMWA統合
├── anchor-counter-example/        # Anchor統合
└── solana-pay-example/           # Solana Pay決済
```

**実装例の活用:**
1. 基本的なトランザクション送信
2. NFTミント
3. Solana Pay統合
4. カスタムプログラム呼び出し

---

## 9. トラブルシューティング

### 9.1 よくあるエラー

**エラー1: "No wallet found"**
```
原因: MWA対応ウォレットがインストールされていない

解決策:
1. Phantom Walletをインストール
   adb install phantom.apk
2. エミュレーターを再起動
```

**エラー2: "Failed to connect to development server"**
```
原因: Metro bundlerに接続できない

解決策:
# ポートフォワーディング
adb reverse tcp:8081 tcp:8081

# Metro再起動
npx react-native start --reset-cache
```

**エラー3: "Execution failed for task ':app:mergeDebugNativeLibs'"**
```
原因: Android Gradleのバージョン不整合

解決策:
# android/gradle.properties に追加
android.jetifier=true
android.useAndroidX=true

# クリーンビルド
cd android && ./gradlew clean
```

**エラー4: "User declined authorization"**
```
原因: ユーザーがウォレット接続を拒否

解決策:
try {
  await authorize();
} catch (error) {
  if (error.message.includes('declined')) {
    Alert.alert(
      '接続が拒否されました',
      'ウォレット接続が必要です。もう一度お試しください。'
    );
  }
}
```

### 9.2 デバッグ手法

**React Native Debugger使用:**
```bash
# React Native Debuggerインストール
brew install --cask react-native-debugger

# 起動
open "rndebugger://set-debugger-loc?host=localhost&port=8081"

# Dev Menu開く (エミュレーター内)
adb shell input keyevent 82
# -> "Debug" を選択
```

**MWAログ確認:**
```typescript
// デバッグログ有効化
import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol';

// transact呼び出し時にログ出力
const result = await transact(async (wallet) => {
  console.log('[MWA] Starting transaction');
  const auth = await wallet.authorize({...});
  console.log('[MWA] Authorization result:', auth);
  return auth;
});
```

**Android Logcat:**
```bash
# MWA関連ログのみフィルタ
adb logcat | grep "MobileWalletAdapter"

# アプリのクラッシュログ
adb logcat *:E
```

### 9.3 パフォーマンス最適化

**トランザクション高速化:**
```typescript
// Priority Fee設定（混雑時）
import {ComputeBudgetProgram} from '@solana/web3.js';

transaction.add(
  ComputeBudgetProgram.setComputeUnitPrice({
    microLamports: 50000, // 優先度を上げる
  })
);
```

**バッチ処理:**
```typescript
// 複数トランザクションを一度に署名
const signedTxs = await wallet.signTransactions({
  transactions: [tx1, tx2, tx3],
});
```

**キャッシング:**
```typescript
// アカウント情報をキャッシュ
const [balance, setBalance] = useState(0);

useEffect(() => {
  const fetchBalance = async () => {
    const bal = await connection.getBalance(publicKey);
    setBalance(bal);
  };

  fetchBalance();
  
  // 30秒ごとに更新
  const interval = setInterval(fetchBalance, 30000);
  return () => clearInterval(interval);
}, [publicKey]);
```

---

## 10. 次のステップ

### 10.1 実装ロードマップ (Axis Pizza向け)

**フェーズ1: MVP開発 (2-3週間)**
- [ ] React Nativeプロジェクト初期化
- [ ] MWA統合とウォレット接続
- [ ] 基本的なスワップ機能
- [ ] 価格フィード表示
- [ ] テスト環境での動作確認

**フェーズ2: 高度な機能 (3-4週間)**
- [ ] Drift Perps統合
- [ ] リアルタイムポジション管理
- [ ] プッシュ通知（価格アラート）
- [ ] トランザクション履歴
- [ ] ダークモード対応

**フェーズ3: Seed Vault対応 (1-2週間)**
- [ ] Saga/Seekerデバイス検出
- [ ] Seed Vault統合
- [ ] 生体認証フロー
- [ ] プレミアム機能の実装

**フェーズ4: dApp Store公開 (1週間)**
- [ ] リリースビルド作成
- [ ] スクリーンショット準備
- [ ] dApp Store申請
- [ ] マーケティング準備

**フェーズ5: 運用・改善 (継続)**
- [ ] ユーザーフィードバック収集
- [ ] パフォーマンス最適化
- [ ] 新機能追加
- [ ] 定期アップデート

### 10.2 参考リソース

**公式ドキュメント:**
- Solana Mobile Docs: https://docs.solanamobile.com
- Mobile Wallet Adapter: https://github.com/solana-mobile/mobile-wallet-adapter
- React Native: https://reactnative.dev

**コミュニティ:**
- Discord: https://discord.gg/solanamobile
- Telegram: https://t.me/solanamobile
- GitHub Discussions: https://github.com/orgs/solana-mobile/discussions

**ツール:**
- Solana Mobile dApp Scaffold: `npx react-native init --template @solana-mobile/solana-mobile-dapp-scaffold`
- Solana CLI: https://docs.solana.com/cli/install-solana-cli-tools
- Android Studio: https://developer.android.com/studio

---

## まとめ

このガイドでは、Axis PizzaをSolana Mobileアプリとして展開するために必要な全ての技術情報を網羅しました。

**重要なポイント:**

1. **React Native推奨**: Axis PizzaのようなDeFiアプリはネイティブパフォーマンスが必須
2. **MWAが核心**: Mobile Wallet Adapterの正しい実装が成功の鍵
3. **Seed Vault対応**: Saga/Seekerユーザーに最高のセキュリティを提供
4. **dApp Store公開**: Solanaエコシステム内での認知度向上

**次のアクション:**
1. 開発環境のセットアップ（セクション2）
2. Scaffoldからプロジェクト初期化
3. MWA統合（セクション4）
4. 基本機能の実装
5. テストと最適化
6. dApp Store申請（セクション7）

このガイドを参考に、2時間で概要を把握し、2-3ヶ月でフル機能のモバイルアプリを公開できます。

**質問やサポートが必要な場合:**
- Solana Mobile Discord: https://discord.gg/solanamobile
- 内部開発チャット: [社内リンク]

---

**作成者**: Alex (AI Assistant for Muse)  
**最終更新**: 2026年3月13日  
**バージョン**: 1.0
