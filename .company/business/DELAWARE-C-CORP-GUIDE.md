# Delaware C Corporation 設立ガイド（マイアミ移住前提）

**作成日:** 2026-03-13  
**対象:** Muse / Axis Pizza  
**前提:** マイアミ移住 + デラウェアC Corp設立

---

## 📋 目次

1. [法人形態比較：C Corp vs LLC vs S Corp](#1-法人形態比較c-corp-vs-llc-vs-s-corp)
2. [なぜデラウェアなのか](#2-なぜデラウェアなのか)
3. [設立手順（ステップバイステップ）](#3-設立手順ステップバイステップ)
4. [デラウェア法人 + マイアミオフィス構造](#4-デラウェア法人--マイアミオフィス構造)
5. [Web3スタートアップの実例](#5-web3スタートアップの実例)
6. [年間維持コスト](#6-年間維持コスト)
7. [実務チェックリスト](#7-実務チェックリスト)

---

## 1. 法人形態比較：C Corp vs LLC vs S Corp

### 🏆 **結論：Web3スタートアップならC Corp一択**

| 項目 | **C Corporation** | LLC | S Corporation |
|------|-------------------|-----|---------------|
| **VC投資の受け入れ** | ✅ 最適 | ⚠️ 複雑 | ❌ 制限あり |
| **株式発行** | ✅ 優先株・普通株可能 | ❌ Membership Interest | ⚠️ 1種類のみ |
| **投資家の制限** | ✅ 無制限 | - | ❌ 100人まで（外国人NG） |
| **二重課税** | ❌ あり（法人+個人） | ✅ なし（パススルー） | ✅ なし（パススルー） |
| **将来のIPO** | ✅ 可能 | ❌ 不可 | ❌ 不可 |
| **トークン発行** | ✅ 構造化しやすい | ⚠️ 税務複雑 | ❌ 不向き |

### 💡 **VCから見た評価**

**C Corporation が好まれる理由：**
- **標準化されたDD（デューデリジェンス）:** VCは C Corp の評価に慣れている
- **優先株の発行:** Series A/B での清算優先権・参加権の設定が容易
- **ストックオプション（ISO/NSO）:** 従業員インセンティブの標準形式
- **M&A・IPOの柔軟性:** Exit戦略が明確

**LLCの問題点：**
- K-1（税務書類）の配布が面倒（投資家ごとに税務処理が必要）
- VCファンドの構造上、LLCへの投資は UBTI（Unrelated Business Taxable Income）を発生させる可能性
- 後から C Corp に転換すると課税イベントが発生

**S Corp の問題点：**
- 外国人株主NG（多くのVCファンドは外国投資家を含む）
- 株主数100人制限
- 優先株発行不可

### 🎯 **Web3スタートアップ特有の考慮点**

- **トークン発行の会計処理:** C Corp なら財務報告が明確
- **SEC規制対応:** C Corp の方が証券法の枠組みに適合
- **グローバル展開:** 外国人投資家・従業員を受け入れやすい

**Axis Pizza のケース:**
- VC調達予定（$750K Pre-seed） → **C Corp 必須**
- 将来的なトークンローンチ → **C Corp が有利**
- Solanaエコシステム（海外投資家多い） → **S Corpは不適格**

---

## 2. なぜデラウェアなのか

### 📊 **数字で見るデラウェア**

- **Fortune 500の66%** がデラウェア法人
- **全米の上場企業の90%以上** がデラウェア設立
- **VCバックドスタートアップの80%以上** がデラウェア選択

### ✅ **デラウェアのメリット**

#### **1. 法的予測可能性（Court of Chancery）**
- **専門裁判所:** 衡平法裁判所（Court of Chancery）が企業法専門
- **陪審員なし:** ビジネス判例に精通した裁判官が判断
- **200年以上の判例:** どんな紛争も先例がある
- **M&A・株主紛争に強い:** Appraisal Rights（株式買取請求権）等の整備

#### **2. 柔軟な会社法（Delaware General Corporation Law, DGCL）**
- **取締役の保護:** Business Judgment Rule（経営判断原則）が強い
- **株主の権利調整:** 定款・付属定款で柔軟にカスタマイズ可能
- **迅速な法改正:** ビジネス環境の変化に即応

#### **3. VCの標準**
- **YC（Y Combinator）推奨:** デフォルトでデラウェアを指定
- **投資契約の標準化:** Series Seed / SAFE の書式がデラウェア前提
- **DD（デューデリジェンス）の効率化:** VCの弁護士がデラウェア法に精通

#### **4. プライバシー**
- **株主・役員の非公開:** Certificate of Incorporation に株主名を記載不要
- **年次報告書が簡潔:** 事業内容の詳細開示が不要

### ⚖️ **デラウェア vs 他州**

| 州 | メリット | デメリット |
|------|---------|-----------|
| **Delaware** | VC標準、法的安定性、柔軟性 | Franchise Tax高め、州内に物理拠点ない場合も登録必要 |
| **Wyoming** | 低コスト、プライバシー強 | VC受けが悪い、判例少ない |
| **Nevada** | 法人税なし、プライバシー | VCに不人気、判例不足 |
| **Florida** | 拠点州と一致 | VCから見て標準外、法改正遅い |

### 💰 **税金について（重要）**

**よくある誤解：「デラウェアは法人税が安い」**
→ **実際は違う**

- **デラウェア州法人税（Corporate Income Tax）:**
  - デラウェア内での事業所得にのみ課税
  - **マイアミで事業を行う場合、デラウェア州法人税はほぼゼロ**
  
- **Franchise Tax（特許権税）:**
  - 事業地に関係なく、デラウェア法人全てに課税
  - 最低 $175/年（資本金ベース）、上限 $200,000
  - **Axis Pizza レベルなら年間 $400-800 程度**

- **実際の法人税は連邦税（21%）+ 事業地の州税**
  - マイアミ（フロリダ州）: **州法人税なし**
  - 連邦税のみ（21%）

**つまり：**
デラウェア設立 + マイアミ運営 = **連邦税21%のみ（州税ゼロ）+ Franchise Tax少額**

---

## 3. 設立手順（ステップバイステップ）

### 📝 **Phase 1: 事前準備（1-2日）**

#### **Step 1: 会社名の決定**
- **確認事項:**
  - デラウェア州で利用可能か確認: [DE Division of Corporations Name Search](https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx)
  - `.com` ドメインが取得可能か
  - 商標検索（USPTO TESS）で既存商標と競合しないか

- **命名ルール:**
  - "Corporation", "Incorporated", "Company", "Limited" またはその略語（Corp., Inc., Co., Ltd.）を含む必要
  - 例: "Axis Pizza, Inc." or "Axis Pizza Corporation"

#### **Step 2: Registered Agent の選定**

**Registered Agent とは:**
- デラウェア州内に物理的住所を持つ代理人
- 訴状・政府通知を受け取る窓口
- **必須要件**

**おすすめサービス:**
1. **Harvard Business Services** - $50/年（最安）
2. **Incfile** - $0初年度、その後 $119/年
3. **Northwest Registered Agent** - $125/年（評判良）
4. **CT Corporation** - $300-500/年（大手、VCが好む）

**選定基準:**
- **初期 → HBS or Incfile** でコスト削減
- **Series A以降 → CT Corporation** に変更（機関投資家が安心する）

#### **Step 3: 設立メンバーの確定**

- **Incorporator（設立者）:** 書類にサインする人（誰でもOK、後で変更可）
- **Initial Director（初期取締役）:** 1名以上（Muse本人でOK）
- **Officers（役員）:**
  - CEO: Muse
  - Secretary: 必要（同一人物可）
  - CFO: オプション（後で追加可）

### 📄 **Phase 2: 設立書類の作成（1日）**

#### **必要書類リスト:**

1. **Certificate of Incorporation（基本定款）**
   - デラウェア州に提出する公式文書
   - 記載事項:
     - 会社名
     - Registered Agent の名前・住所
     - 授権株式数（Authorized Shares）
     - 株式の種類（Common / Preferred）
     - Incorporator の署名

2. **Bylaws（付属定款）**
   - 内部規則（州には提出しない）
   - 記載事項:
     - 取締役会の運営方法
     - 株主総会の手続き
     - 役員の権限

3. **株主間契約（Stockholders Agreement）**
   - 共同創業者がいる場合
   - Vesting条項・Buy-Sell条項

4. **Action by Incorporator（設立者決議）**
   - Bylaws承認
   - 初期取締役の選任

5. **Organizational Resolutions（組織決議）**
   - 株式発行
   - 役員選任
   - 会計年度の決定

#### **授権株式数の決め方**

**標準設定（Pre-seed段階）:**
```
Authorized Shares: 10,000,000株
├─ Common Stock: 10,000,000株
└─ Preferred Stock: 5,000,000株（将来用に確保）
```

**初期発行（Founder Stock）:**
```
Issued Shares: 8,000,000株（Common）
├─ Muse: 6,400,000株（80%、4年Vesting）
└─ 共同創業者/将来の従業員プール: 1,600,000株（20%）
```

**Par Value（額面）:** $0.0001/株（最低額）

**なぜ1,000万株？**
- VC投資時の希薄化計算が簡単
- オプションプールが十分確保できる
- 後で増やすと株主総会が必要

### 💼 **Phase 3: 設立申請（即日-3日）**

#### **提出方法と費用:**

| 方法 | 処理時間 | 費用 |
|------|----------|------|
| **通常郵送** | 7-10営業日 | $89（州費用のみ） |
| **オンライン提出** | 24時間以内 | $89 + $50 = $139 |
| **Same Day（当日）** | 当日 | $89 + $100 = $189 |
| **2時間処理** | 2時間 | $89 + $500 = $589 |
| **1時間処理** | 1時間 | $89 + $1,000 = $1,089 |

**おすすめ:** オンライン提出（$139）で翌日設立

#### **提出先:**
Delaware Division of Corporations  
オンライン: https://corp.delaware.gov/  
または Registered Agent 経由

#### **設立完了後に受け取るもの:**
- **Stamped Certificate of Incorporation** - デラウェア州の認証印付き原本
- **File Number** - 法人番号（例: 1234567）

### 🏦 **Phase 4: 設立後の手続き（1-2週間）**

#### **Step 1: EIN（Employer Identification Number）の取得**

**EIN とは:**
- 米国IRSが発行する納税者番号（日本の法人番号に相当）
- 銀行口座開設・従業員雇用・税務申告に必須

**取得方法:**
1. **オンライン申請（最速）:**
   - IRS Website: https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
   - 即日発行（営業時間内なら15分）
   - **注意:** 米国内SSNまたはITINを持つResponsible Partyが必要
   
2. **郵送/FAX申請（非居住者向け）:**
   - Form SS-4を記入
   - FAX: +1-855-641-6935
   - 処理時間: 4-6週間

**非居住者の問題:**
- Museがまだマイアミに移住していない場合、オンライン申請不可
- **解決策:**
  1. 弁護士・会計士に代理申請を依頼（$200-500）
  2. Incfile等のサービス利用（$70）
  3. 移住後にSSN取得してから申請

#### **Step 2: フロリダ州での Foreign Qualification（外国法人登録）**

**なぜ必要？**
- デラウェア法人がフロリダで事業を行う場合、フロリダ州にも登録必須
- "Foreign"は「他州」という意味（国外ではない）

**登録手続き:**
1. **Florida Division of Corporations に申請**
   - オンライン: https://dos.myflorida.com/sunbiz/
   - Form: Application for Registration（外国法人登録申請書）
   
2. **必要書類:**
   - Certificate of Good Standing（デラウェア州発行、有効期限30日）
   - Certificate of Incorporation の認証コピー
   - フロリダ州内のRegistered Agent指定

3. **費用:**
   - 申請料: $70
   - Registered Agent（フロリダ）: $100-300/年

4. **処理時間:** 3-5営業日

#### **Step 3: 銀行口座の開設**

**おすすめ銀行（スタートアップ向け）:**

1. **Mercury**（オンライン銀行）
   - **メリット:** 完全オンライン、FDIC保護、ACH/Wire無料、API連携
   - **デメリット:** 物理支店なし、入金チェック手続きあり
   - **開設:** 2-3日、EIN + Certificate of Incorporation 必要
   - **URL:** https://mercury.com/

2. **Brex Cash**
   - **メリット:** スタートアップ特化、高額FDIC保護（$6M）、コーポレートカード付帯
   - **デメリット:** 審査厳しめ（VC推薦状があると通りやすい）
   - **URL:** https://brex.com/

3. **Chase Business Banking**（従来型銀行）
   - **メリット:** マイアミに支店多数、物理チェック預金可能、信用実績
   - **デメリット:** 最低残高要件（$1,500）、月額手数料（条件次第で免除）
   - **開設:** 支店で面談必要

**必要書類（共通）:**
- EIN
- Certificate of Incorporation
- Bylaws
- Organizational Resolutions（銀行口座開設決議）
- 各Officer/Beneficiary（25%以上株主）の身分証明
- SSNまたはITIN（非居住者はパスポート + ビザ）

**非居住者の場合:**
- Mercuryは米国住所がなくても開設可能（実績多数）
- 従来型銀行は米国滞在中に支店訪問が必要

#### **Step 4: Equity（株式）の発行**

**手続き:**
1. **Board Resolution（取締役会決議）で承認**
   - 発行株式数
   - 株価（Fair Market Value、初期は $0.0001 でOK）
   - 割当先

2. **83(b) Election の提出（重要！）**
   - Vestingつき株式を受け取った場合、30日以内にIRSに提出
   - これをしないと将来の税負担が激増
   - Form: IRS Form 83(b) Election

3. **Stock Certificates（株券）の発行**
   - 物理的な紙は不要（電子管理でOK）
   - Carta / Pulley 等のCap Tableツールを使用

4. **株主名簿（Stock Ledger）の整備**

### 📊 **Phase 5: 会計・コンプライアンス基盤（継続）**

#### **1. 会計ソフトの導入**
- **QuickBooks Online** - 中小企業標準（$30-200/月）
- **Xero** - 海外取引多い場合（$13-70/月）
- **会計士との連携** を前提に選択

#### **2. Cap Table管理**
- **Carta** - 業界標準、VCが好む（$2,000-10,000/年）
- **Pulley** - スタートアップ向け安価版（$0-500/年）
- **Excel** - 初期はこれでOK（テンプレート: Y Combinator SAFE）

#### **3. 法務書類の管理**
- **Notion / Google Drive** でフォルダ構成:
```
/Legal
  /Corporate Documents
    - Certificate of Incorporation
    - Bylaws
    - Stock Ledger
  /Board Minutes
    - 2026-03-13_Organizational_Meeting.pdf
  /Contracts
  /IP (Trademark, Patents)
```

---

## 4. デラウェア法人 + マイアミオフィス構造

### 🏢 **標準構造**

```
Axis Pizza, Inc.
├─ 設立州: Delaware（Certificate of Incorporation）
├─ 本店住所: Delaware州内（Registered Agentの住所）
├─ Principal Office: Miami, FL（実際のオフィス）
└─ 外国法人登録: Florida（Foreign Qualification）
```

### 📍 **住所の使い分け**

| 用途 | 住所 |
|------|------|
| **Registered Office** | デラウェア州内（Registered Agentの住所） |
| **Principal Place of Business** | マイアミのオフィス住所 |
| **郵送先（Mailing Address）** | マイアミのオフィス（投資家向け） |
| **銀行書類** | マイアミのオフィス |
| **契約書の住所** | Principal Office（マイアミ） |

### 🏠 **マイアミオフィスの選択肢**

#### **1. バーチャルオフィス（初期推奨）**
- **Regus / WeWork** - $100-300/月
- **メリット:** 
  - 低コストで正式住所取得
  - 郵便転送サービス
  - 会議室利用（時間課金）
- **デメリット:** 
  - 銀行が嫌がる場合あり（実態確認で）
  - VC訪問時に印象悪い

#### **2. コワーキングスペース**
- **Miami Dade College Idea Center** - スタートアップ支援
- **The LAB Miami** - $350-600/月（デスク占有）
- **メリット:** 
  - ネットワーキング
  - 実体のある住所
- **デメリット:** 
  - 長期契約必要な場合あり

#### **3. 自宅住所**
- **メリット:** 無料
- **デメリット:** 
  - プライバシー問題（公開記録に残る）
  - VC/顧客に見せる住所として不適切
  - 賃貸契約で商業利用NGの場合あり

**推奨:** バーチャルオフィス + コワーキングスペース併用

### ⚖️ **税務上の取り扱い**

#### **Nexus（課税結びつき）の考え方**

| 項目 | デラウェア州 | フロリダ州 | 連邦（IRS） |
|------|--------------|-----------|-------------|
| **法人所得税** | なし（DE内売上ゼロのため） | なし（FL州法人税なし） | 21%（連邦税） |
| **Franchise Tax** | あり（$400-800/年） | なし | - |
| **Sales Tax** | なし | 顧客がFL在住なら課税 | - |
| **雇用税** | なし | あり（従業員いる場合） | あり |

#### **実務上の注意点**

1. **会計処理:**
   - デラウェアとフロリダで別々に記帳不要
   - 全て連邦税ベースで会計（GAAP準拠）

2. **消費税（Sales Tax）:**
   - フロリダでSaaSを販売する場合、FL Sales Tax（6%）課税対象
   - Stripeが自動徴収してくれる設定可能

3. **従業員の雇用:**
   - マイアミで雇用 → フロリダ州の雇用税・失業保険適用
   - State Unemployment Tax (SUTA) 登録必要

---

## 5. Web3スタートアップの実例

### 🔍 **主要Solanaプロジェクトの法人形態調査**

| プロジェクト | 設立州 | 法人形態 | 備考 |
|------------|--------|---------|------|
| **Solana Foundation** | スイス（Zug） | Foundation | 非営利、開発支援 |
| **Jump Crypto** | Delaware | C Corp | Solana Validator、大手 |
| **Jito Labs** | Delaware | C Corp | MEV・ステーキング |
| **Jupiter** | 不明 | 推定 C Corp | 情報非公開 |
| **Magic Eden** | Delaware | C Corp | Series B調達（$130M） |
| **Phantom** | Delaware | C Corp | Series A調達（$109M） |
| **Helium** | Delaware | C Corp → DAO移行 | 2022年にSolanaへ移行 |
| **Render Network** | Delaware | C Corp | エンタープライズ向け |
| **Marinade Finance** | 不明 | DAO構造 | 法人なし？ |

### 📊 **傾向分析**

#### **VC資金調達したプロジェクト → 100% Delaware C Corp**
- Magic Eden, Phantom, Jito Labs は全てデラウェア
- 理由: VCがデラウェア以外への投資を拒否する場合が多い

#### **純粋なDAOプロジェクト → 法人なし or 財団**
- Marinade, Lido（Ethereum）等はDAO運営
- ただし、運営チームは個別に会社設立している例多数

#### **ハイブリッド構造が増加中**

**例: Helium の構造**
```
Helium, Inc. (Delaware C Corp)
├─ プロトコル開発・IP保有
└─ トークン保有: Helium Foundation（ケイマン諸島）
    └─ トークンガバナンス: DAO（オンチェーン）
```

**例: Uniswap の構造**
```
Uniswap Labs (Delaware C Corp)
├─ フロントエンド開発・VC資金
└─ プロトコル: Uniswap Protocol（スマートコントラクト、無主体）
    └─ ガバナンス: UNI Token holders（DAO）
```

### 🎯 **Axis Pizza に推奨する構造**

#### **Phase 1: Pre-seed~Seed（現在）**
```
Axis Pizza, Inc. (Delaware C Corp)
└─ プロトコル開発・VC資金調達
```
- シンプルに C Corp のみ
- トークンはまだ発行しない

#### **Phase 2: トークンローンチ前**
```
Axis Pizza, Inc. (Delaware C Corp)
├─ プロトコル開発・事業運営
└─ Axis Pizza Foundation（ケイマン or スイス）
    ├─ トークン発行・保有
    └─ エコシステム助成金
```
- Foundation設立でSEC規制リスク分離
- 弁護士相談必須（$50K-100K）

#### **Phase 3: 完全分散化後**
```
Axis Pizza, Inc. (Delaware C Corp) - フロントエンド開発
Axis Pizza Foundation - トークン管理
Axis Pizza DAO - プロトコルガバナンス
```
- Uniswap型の三層構造
- 米国外にFoundation設置が一般的

### 💡 **他のWeb3起業家の事例**

#### **Jesse Pollak (Coinbase, Base)**
- Coinbase本体: Delaware C Corp
- Base（L2）: Coinbase子会社として運営
- トークンなし（Coinbase株でエクイティ）

#### **Stani Kulechov (Aave)**
- Aave Companies（英国）: 開発会社
- Aave DAO: トークンガバナンス
- スイスに財団なし（純粋DAO化）

**学び:**
- 最初から複雑にしない
- VCラウンドは必ずC Corpで
- トークンは後で考える

---

## 6. 年間維持コスト

### 💰 **コスト試算（初年度）**

| 項目 | 費用 | 頻度 | 備考 |
|------|------|------|------|
| **設立費用** |  |  |  |
| Certificate of Incorporation | $139 | 1回 | オンライン申請 |
| Registered Agent（DE） | $50-125 | 年間 | HBS or Northwest |
| 弁護士費用（書類作成） | $0-2,000 | 1回 | DIYなら$0、外注なら$1,500-5,000 |
| EIN取得 | $0-70 | 1回 | 自分で無料、代行なら$70 |
| **フロリダ州登録** |  |  |  |
| Foreign Qualification | $70 | 1回 | FL州申請料 |
| Registered Agent（FL） | $100-300 | 年間 |  |
| **銀行・金融** |  |  |  |
| 銀行口座開設 | $0 | 1回 | Mercuryなら無料 |
| 銀行月額手数料 | $0-25 | 月額 | Mercuryなら$0 |
| **税務・会計** |  |  |  |
| Delaware Franchise Tax | $175-450 | 年間 | 資本金ベース |
| 会計ソフト（QuickBooks） | $30-50 | 月額 |  |
| 会計士（税務申告） | $1,500-3,000 | 年間 | Form 1120（法人税） |
| 州税申告（FL） | $0 | 年間 | FL州法人税なし |
| **法務** |  |  |  |
| Cap Table管理（Pulley） | $0-500 | 年間 | 初期は無料プラン |
| 年次報告書（Annual Report） | $50 | 年間 | DE州必須 |
| **オフィス** |  |  |  |
| バーチャルオフィス（Miami） | $100-300 | 月額 |  |
| **保険** |  |  |  |
| D&O保険 | $1,500-3,000 | 年間 | VCが要求する場合 |
| 一般賠償責任保険 | $500-1,000 | 年間 | オプション |

### 📊 **年間コスト総計**

#### **ミニマム構成（DIY型）**
```
初年度: $2,500-4,000
├─ 設立: $260（DE申請 + FL登録）
├─ Registered Agent: $150（DE + FL）
├─ 会計士: $1,500（税務申告のみ）
├─ Franchise Tax: $225
├─ 会計ソフト: $360（QuickBooks）
├─ バーチャルオフィス: $1,200
└─ その他: $500
```

#### **標準構成（外注型）**
```
初年度: $8,000-12,000
├─ 設立: $2,500（弁護士費用含む）
├─ Registered Agent: $450（DE + FL、上位サービス）
├─ 会計士: $3,000（月次記帳 + 税務）
├─ Franchise Tax: $400
├─ 会計ソフト: $600（QuickBooks Advanced）
├─ バーチャルオフィス: $3,600（Regus等）
├─ D&O保険: $2,000
└─ その他: $500
```

#### **2年目以降（ランニングコスト）**
```
年間: $4,000-8,000
├─ Registered Agent: $150-450
├─ 会計士: $1,500-3,000
├─ Franchise Tax: $225-450
├─ 会計ソフト: $360-600
├─ バーチャルオフィス: $1,200-3,600
├─ 年次報告書: $50
├─ 保険: $2,000-3,000（必要に応じて）
└─ その他: $500
```

### 💡 **コスト最適化のヒント**

1. **初期は DIY + 最安サービス**
   - 自分で設立手続き（弁護士不要）
   - Harvard Business Services（$50/年）
   - Mercury銀行（手数料無料）
   - Pulley無料プラン

2. **Series A前に専門家へ切替**
   - VCのDDに耐えられる体制
   - 会計士は Big 4 近くの中規模事務所（$3K-5K/年）
   - Registered Agent を CT Corporation に変更

3. **不要な支出を避ける**
   - 初期にD&O保険不要（VCが要求するまで待つ）
   - 高額な法務SaaS不要（Cartaは Series A から）
   - 物理オフィス不要（コワーキング併用でOK）

---

## 7. 実務チェックリスト

### ✅ **設立前（日本在住中に完了可能）**

- [ ] 会社名の決定・ドメイン取得
- [ ] Delaware Registered Agent契約（HBS推奨）
- [ ] Certificate of Incorporation作成
  - [ ] YC標準フォーム使用: https://www.ycombinator.com/documents
  - [ ] 授権株式数: 10,000,000株（Common + Preferred）
  - [ ] Par Value: $0.0001/株
- [ ] Bylaws作成（YCテンプレート）
- [ ] オンライン申請（$139）→ 翌日設立完了
- [ ] Certificate of Good Standing取得（DE州から、$50）

### ✅ **設立直後（マイアミ移住前でも可）**

- [ ] EIN取得
  - [ ] SSNなし → Incfile代行（$70）利用
  - [ ] SSNあり → IRS Website で即日取得
- [ ] Florida Foreign Qualification申請（$70）
- [ ] フロリダ Registered Agent契約
- [ ] Organizational Meeting開催（バーチャルでOK）
  - [ ] Bylaws承認
  - [ ] 役員選任（CEO: Muse）
  - [ ] Founder Stock発行決議
  - [ ] 会計年度決定（12/31推奨）
  - [ ] 銀行口座開設決議

### ✅ **マイアミ到着後（SSN取得後）**

- [ ] SSN取得（移民ステータス確認）
- [ ] マイアミの住所確定（バーチャルオフィス契約）
- [ ] 銀行口座開設
  - [ ] Mercury オンライン申請
  - [ ] または Chase支店訪問
  - [ ] 必要書類: EIN, Certificate of Incorporation, Bylaws, ID
- [ ] Founder Stock 正式発行
  - [ ] Stock Certificates作成
  - [ ] 83(b) Election提出（30日以内！）
  - [ ] Stock Ledger更新

### ✅ **運営開始（1ヶ月以内）**

- [ ] 会計ソフト導入（QuickBooks Online）
- [ ] 会計士選定（Miami近郊のスタートアップ対応可能な事務所）
- [ ] Cap Table作成（Pulley or Excel）
- [ ] 法務書類整理（Google Drive / Notion）
- [ ] 株主名簿・議事録の雛形準備
- [ ] VC向けData Room準備（将来用）

### ✅ **継続タスク（年次）**

#### **毎年3月1日まで:**
- [ ] Delaware Franchise Tax 支払い（$225-450）
- [ ] Delaware Annual Report 提出（$50）

#### **毎年4月15日まで:**
- [ ] 前年度の連邦法人税申告（Form 1120）
- [ ] 会計士と税務打ち合わせ

#### **四半期ごと:**
- [ ] Board Meeting開催（議事録作成）
- [ ] 財務レビュー

#### **随時:**
- [ ] 新規株式発行時: Board Resolution + 83(b) Election
- [ ] 住所変更時: DEとFL両方に届出
- [ ] 役員変更時: DEに届出（Annual Report時でOK）

### ✅ **VC調達前の準備（Series Seed / SAFE発行前）**

- [ ] Cap Table精査（Cartaに移行推奨）
- [ ] 全株主のStock Certificates確認
- [ ] 過去の Board Minutes整備
- [ ] Bylaws・定款の弁護士レビュー
- [ ] Data Room準備:
  - [ ] Certificate of Incorporation + Amendments
  - [ ] Bylaws
  - [ ] Stock Ledger + Cap Table
  - [ ] Board Minutes（全て）
  - [ ] Material Contracts
  - [ ] IP Assignment Agreements
  - [ ] Employee Agreements（PIIAを含む）
- [ ] D&O保険加入（$1,500-3,000/年）
- [ ] 会計士を Big 4系に変更（optional、Series Aから必須）

---

## 📚 参考リソース

### **公式サイト**
- Delaware Division of Corporations: https://corp.delaware.gov/
- Florida Division of Corporations: https://dos.myflorida.com/sunbiz/
- IRS (EIN申請): https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online

### **書類テンプレート**
- Y Combinator標準文書: https://www.ycombinator.com/documents
  - Certificate of Incorporation
  - Bylaws
  - Board Consent（決議書）
  - SAFE / Series Seed
- Clerky（自動化サービス、$799～）: https://www.clerky.com/

### **書籍・ガイド**
- "Venture Deals" by Brad Feld - VC交渉の基礎
- "The Startup Owner's Manual" by Steve Blank - 起業全般
- IRS Publication 542（法人税ガイド）

### **専門家**
- **スタートアップ弁護士（Miami）:**
  - Latham & Watkins（大手、高額）
  - Greenberg Traurig（Miami拠点）
  - Gunderson Dettmer（シリコンバレー系、リモートOK）

- **会計士（Miami）:**
  - 地場の中規模事務所（$2K-5K/年が相場）
  - Big 4（Series A以降）: PwC, Deloitte, EY, KPMG

### **コミュニティ**
- Superteam JP（Solana起業家コミュニティ）
- Miami Tech Community
- Y Combinator Startup School

---

## ⚠️ 免責事項

このガイドは一般的な情報提供を目的としており、法的・税務的助言ではありません。
実際の設立・運営にあたっては、必ず以下を実施してください:

1. **弁護士に相談** - 特に株式構成・投資契約
2. **会計士に相談** - 税務最適化・国際税務（日本との関係）
3. **移民弁護士に相談** - ビザ・永住権の取得戦略

**重要:** 米国法人設立後も、Muse個人の日本での納税義務は継続します（全世界所得課税）。米国移住後の税務申告は日米両方で必要になる可能性があります。

---

## 🚀 次のステップ

1. **今すぐやること:**
   - [ ] 会社名の最終決定
   - [ ] Harvard Business Services でRegistered Agent契約（$50）
   - [ ] YCテンプレートで Certificate of Incorporation作成
   - [ ] Delaware州にオンライン申請（$139）

2. **1週間以内:**
   - [ ] EIN取得（Incfile代行 $70）
   - [ ] Florida Foreign Qualification申請
   - [ ] Mercuryで銀行口座申請

3. **マイアミ到着後:**
   - [ ] SSN取得
   - [ ] 銀行口座有効化
   - [ ] 会計士と初回MTG

4. **1ヶ月後:**
   - [ ] Founder Stock正式発行
   - [ ] 83(b) Election提出
   - [ ] 最初のBoard Meeting開催

**所要時間:** 準備1日 + 設立1日 + 事後手続き1週間 = **合計2週間で完了可能**

---

**作成:** Alex  
**最終更新:** 2026-03-13  
**バージョン:** 1.0

質問・不明点があれば遠慮なくMuseに確認してください。Let's build! 🚀
