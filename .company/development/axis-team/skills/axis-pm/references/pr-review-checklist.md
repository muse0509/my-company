# PR Review Checklist

**PM用PRレビューガイド**

---

## 🎯 目的

PMとして全PRの品質を保証。Museのレビュー前にフィルター。

---

## ✅ 基本チェック

### 1. タイトル・説明

**チェック項目:**
- [ ] タイトルがConventional Commits形式
  - `feat:`, `fix:`, `style:`, `refactor:`, `docs:`
- [ ] 説明文が詳細（変更内容・理由・影響）
- [ ] Issue番号リンク（例: `Closes #123`）

**良い例:**
```
✅ feat(components): Add UserProfile component

Implements user profile display with:
- Wallet address
- SOL balance
- Transaction history

Closes #123
```

**悪い例:**
```
❌ Update code

Changed some stuff.
```

---

### 2. 変更範囲

**チェック項目:**
- [ ] 変更ファイルが `axis-agent/` ディレクトリのみ
- [ ] `axis-api/`, `kagemusha-program/` など他ディレクトリ変更なし
- [ ] 不要なファイル（ログ、設定ファイル）含まない

**確認コマンド:**
```bash
gh pr view {pr_number} --json files --jq '.files[].path'
```

**NGパターン:**
```
❌ axis-api/src/...
❌ kagemusha-program/...
❌ .env
❌ node_modules/
```

---

### 3. ブランチ戦略

**チェック項目:**
- [ ] mainブランチへの直接commitでない
- [ ] ブランチ名が規則に従っている
  - `feat/`, `fix/`, `style/`, `refactor/`
- [ ] base branchが `main`

**確認:**
```bash
gh pr view {pr_number} --json headRefName,baseRefName
```

---

## 🎨 デザインPRチェック

**Designer作成のPR**

### 追加チェック項目

- [ ] スクリーンショット添付（Before/After）
- [ ] レスポンシブ対応確認（Desktop/Tablet/Mobile）
- [ ] デザインシステム遵守
  - `references/design-system.md` 準拠
  - `references/color-palette.md` カラー使用
- [ ] アクセシビリティ考慮
  - 色コントラスト
  - フォーカス状態

**レビューコメント例:**
```markdown
Great design improvements! 🎨

**Desktop:** ✅ Looks good
**Mobile:** ⚠️ Button text wraps awkwardly on 320px width
**Accessibility:** ✅ Color contrast ratio passed

Could you adjust the button padding for small screens?
```

---

## 💻 コードPRチェック

**Engineer A/B作成のPR**

### コード品質

- [ ] TypeScript型定義適切
- [ ] エラーハンドリング実装
- [ ] console.log削除済み
- [ ] コメント適切（複雑なロジックのみ）
- [ ] 命名規則遵守
  - コンポーネント: PascalCase
  - 関数: camelCase
  - 定数: UPPER_SNAKE_CASE

### テスト

- [ ] テストコード追加（該当する場合）
- [ ] 既存テスト通過
- [ ] 手動テスト実施済み

**確認:**
```bash
# テスト実行状態確認
gh pr checks {pr_number}
```

### パフォーマンス

- [ ] 不要なre-render回避
- [ ] useCallback/useMemo適切使用
- [ ] 大きなデータ処理最適化

---

## 🔗 State管理PRチェック

**Engineer A作成の複雑なPR**

### 特別チェック

- [ ] Context設計適切
- [ ] Providerネスト過多でない
- [ ] State更新ロジック明確
- [ ] 副作用（useEffect）適切
- [ ] メモリリーク対策

**レビューポイント:**
```typescript
// ✅ Good
const [state, setState] = useState<State>({
  loading: false,
  data: null,
  error: null,
});

// ❌ Bad - 複数のuseStateが乱立
const [loading, setLoading] = useState(false);
const [data, setData] = useState(null);
const [error, setError] = useState(null);
```

---

## 🚨 セキュリティチェック

### 全PR共通

- [ ] 秘密鍵・APIキーのハードコーディングなし
- [ ] `.env` ファイル変更なし（含まれていない）
- [ ] ユーザー入力のサニタイゼーション
- [ ] XSS脆弱性なし

**NGコード例:**
```typescript
❌ const API_KEY = "sk_live_abc123...";
❌ dangerouslySetInnerHTML={{__html: userInput}}
```

---

## 📝 ドキュメントチェック

### 該当する場合

- [ ] README更新（新機能追加時）
- [ ] コメント追加（複雑なロジック）
- [ ] 型定義（新しいtype/interface）

---

## 🔄 Git履歴チェック

### コミット品質

- [ ] コミットメッセージ明確
- [ ] 論理的な単位でコミット分割
- [ ] 不要なマージコミットなし
- [ ] force pushなし（履歴改変なし）

**良いコミット例:**
```
✅ feat: Add UserProfile component
✅ style: Improve button hover effects
✅ fix: Resolve wallet connection bug
```

**悪いコミット例:**
```
❌ WIP
❌ fix stuff
❌ asdfsadf
```

---

## 📊 サイズチェック

### PR規模

**理想的:**
- +100 ~ +300 lines
- 1-3 ファイル変更

**大きすぎる場合:**
- +500 lines以上
- 10+ ファイル変更

**対応:**
```markdown
This PR looks large. Consider splitting into:
1. PR for Component A
2. PR for Component B
3. PR for styling

Smaller PRs = faster review 🚀
```

---

## 💬 コミュニケーション

### フィードバック方法

**建設的なコメント:**
```markdown
✅ "Great implementation! One suggestion: consider using useMemo here to optimize performance."

❌ "This is wrong."
```

**質問形式:**
```markdown
✅ "Could you explain why you chose this approach? I'm curious about the tradeoff."

❌ "Why did you do this?"
```

**承認:**
```markdown
✅ "LGTM! Great work on the responsive design. Merging after Muse's approval."
```

---

## 🎯 レビュー判定

### ✅ Approve（承認）

**条件:**
- すべてのチェックリスト項目パス
- コード品質高い
- テスト実施済み
- ドキュメント更新済み

**アクション:**
```bash
gh pr review {pr_number} --approve --body "LGTM! 🚀

All checks passed:
- ✅ Code quality
- ✅ Tests
- ✅ Documentation
- ✅ Follows design system

Ready for Muse's final approval."
```

---

### 🔄 Request Changes（要修正）

**条件:**
- 重要な問題発見
- セキュリティリスク
- パフォーマンス懸念
- テスト不足

**アクション:**
```bash
gh pr review {pr_number} --request-changes --body "Good start! A few changes needed:

1. ⚠️ Remove console.log on line 42
2. ⚠️ Add error handling for API call
3. ⚠️ Update mobile responsive styles

Please address these and I'll re-review. Thanks! 🙏"
```

---

### 💬 Comment（コメントのみ）

**条件:**
- 軽微な提案
- 質問
- Nice to have改善

**アクション:**
```bash
gh pr review {pr_number} --comment --body "Looks good overall! 👍

Small suggestion:
- Consider extracting this logic into a custom hook for reusability

Not blocking, just a thought."
```

---

## 🚀 最終承認プロセス

### PM承認後

1. **Museに通知**
```
Muse、PR #123レビュー完了しました！

✅ コード品質確認済み
✅ テスト実施済み
✅ デザインシステム遵守

最終承認お願いします 🙏

Link: https://github.com/Axis-pizza/Axis_MVP/pull/123
```

2. **Muse承認待ち**
- ラベル: `awaiting-final-approval`

3. **マージ**
- Museが承認 → マージ
- 不要なブランチ削除

---

## 📈 レビュー品質指標

### 目標

- **レビュー時間:** <1時間
- **往復回数:** ≤2回
- **承認率:** >80%（初回で承認）

### トラッキング

```bash
# 今週レビューしたPR
gh pr list --state closed --label "axis-agent" --search "reviewed-by:@me closed:>=$(date -v-7d +%Y-%m-%d)"
```

---

## 🛠️ ツール

### GitHub CLI

```bash
# PR詳細確認
gh pr view {pr_number}

# ファイル差分確認
gh pr diff {pr_number}

# レビュー
gh pr review {pr_number} --approve
gh pr review {pr_number} --request-changes
gh pr review {pr_number} --comment

# ステータス確認
gh pr checks {pr_number}
```

---

## ✅ まとめチェックリスト

### 最低限の確認項目

- [ ] タイトル・説明適切
- [ ] `axis-agent/` のみ変更
- [ ] ブランチ戦略遵守
- [ ] コード品質良好
- [ ] テスト実施済み
- [ ] セキュリティ問題なし

### 承認前

- [ ] すべてのチェック項目パス
- [ ] フィードバック提供済み
- [ ] Muse通知準備完了

---

**品質を守り、スピードを上げる 🚀**
