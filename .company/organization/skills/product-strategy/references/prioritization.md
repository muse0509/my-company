# Feature Prioritization（RICE Framework）

RICE Frameworkを使った機能優先順位決定。

## RICE Framework

**Formula:**
```
RICE Score = (Reach × Impact × Confidence) / Effort
```

### Reach（リーチ）

**定義:**
- この機能は何人のユーザーに影響するか？

**測定:**
- 現在のユーザー数
- 将来の見込みユーザー数
- Per time period（例: per quarter）

**Example:**
- Mobile App: 127 users → 400 users (Q1)
- Dark Mode: 127 users（全員だが影響小）

### Impact（インパクト）

**定義:**
- ユーザー体験をどれくらい改善するか？

**スコア:**
- **3 = Massive:** ゲームチェンジャー
- **2 = High:** 大幅改善
- **1 = Medium:** 中程度改善
- **0.5 = Low:** 小幅改善
- **0.25 = Minimal:** わずかな改善

**Example:**
- Mobile App: 3（Massive - accessibility革命）
- Dark Mode: 0.5（Low - nice-to-have）

### Confidence（確信度）

**定義:**
- Reach/Impact推定の確実性は？

**スコア:**
- **100% = High:** データ裏付けあり
- **80% = Medium:** 強い仮説
- **50% = Low:** 推測ベース

**Example:**
- Mobile App: 80%（50 user requests = 確実）
- Dark Mode: 50%（5 requests = 不確実）

### Effort（工数）

**定義:**
- 実装に何person-months必要？

**測定:**
- Engineering effort（主）
- Design effort
- Testing effort
- Deployment effort

**Example:**
- Mobile App: 1 month（4 person-weeks）
- Dark Mode: 0.25 months（1 person-week）

---

## RICE Calculation Examples

### Example 1: Mobile App

**Reach:** 400 users（Q1見込み）
**Impact:** 3（Massive）
**Confidence:** 80%
**Effort:** 1 month

**RICE Score:**
```
(400 × 3 × 0.8) / 1 = 960
```

**Priority:** 🔥 Top Priority

---

### Example 2: Jupiter Perps Integration

**Reach:** 200 users（Q1見込み）
**Impact:** 2（High - 2x trading options）
**Confidence:** 90%
**Effort:** 0.5 months

**RICE Score:**
```
(200 × 2 × 0.9) / 0.5 = 720
```

**Priority:** 🔥 High Priority

---

### Example 3: Social Trading

**Reach:** 100 users（Q2見込み）
**Impact:** 2（High - new feature category）
**Confidence:** 60%
**Effort:** 1.5 months

**RICE Score:**
```
(100 × 2 × 0.6) / 1.5 = 80
```

**Priority:** 📅 Next Quarter

---

### Example 4: Dark Mode

**Reach:** 127 users（全員）
**Impact:** 0.5（Low - aesthetics）
**Confidence:** 50%
**Effort:** 0.25 months

**RICE Score:**
```
(127 × 0.5 × 0.5) / 0.25 = 127
```

**Priority:** 📝 Backlog

---

### Example 5: Auto Risk Management強化

**Reach:** 300 users（Q1-Q2）
**Impact:** 2（High - safety改善）
**Confidence:** 70%
**Effort:** 0.5 months

**RICE Score:**
```
(300 × 2 × 0.7) / 0.5 = 840
```

**Priority:** 🔥 High Priority

---

## Priority Tiers

**Tier 1: RICE > 500**
- Top priority
- Start ASAP
- Allocate best resources

**Tier 2: RICE 200-500**
- High priority
- Queue for next sprint
- Good resource allocation

**Tier 3: RICE 100-200**
- Medium priority
- Future consideration
- Standard resources

**Tier 4: RICE < 100**
- Low priority
- Backlog
- Nice-to-have

---

## Current Axis Pizza Priorities

### Tier 1（RICE > 500）

1. **Mobile App** - 960
2. **Auto Risk Management** - 840
3. **Jupiter Perps** - 720

### Tier 2（RICE 200-500）

4. **Portfolio Analytics** - 350
5. **Social Trading** - 320（adjusted for Q2）

### Tier 3（RICE 100-200）

6. **Dark Mode** - 127
7. **Advanced Charts** - 150

### Tier 4（RICE < 100）

8. **Multiple Languages** - 80
9. **Customizable Dashboard** - 60

---

## When to Re-evaluate

**Triggers:**

1. **New User Feedback:**
   - 10+ requests for same feature
   - Re-calculate Reach/Confidence

2. **Market Changes:**
   - Competitor launches similar
   - Re-calculate Impact

3. **Technical Breakthrough:**
   - Easier implementation found
   - Re-calculate Effort

4. **Quarterly Review:**
   - All features re-scored
   - Roadmap adjusted

---

## RICE vs Other Frameworks

### RICE vs MoSCoW

**MoSCoW:**
- Must, Should, Could, Won't
- Qualitative
- Fast but subjective

**RICE:**
- Quantitative
- Data-driven
- Slower but objective

**Use RICE when:**
- Multiple similar priorities
- Need data justification
- Resource constraints

### RICE vs ICE

**ICE:**
- Impact, Confidence, Ease
- Simpler than RICE（no Reach）
- Good for early-stage

**RICE:**
- Adds Reach（user impact scale）
- Better for growth stage

**Axis Pizza: Use RICE**（127 users = growth stage）

---

## Tools

- **Notion/Linear:** RICE scoring table
- **Spreadsheet:** Automatic RICE calculation
- **User feedback:** Reach/Confidence data
- **Engineering estimates:** Effort data

---

## RICE Template

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority |
|---------|-------|--------|------------|--------|------------|----------|
| Mobile App | 400 | 3 | 80% | 1 | 960 | 🔥 |
| Jupiter Perps | 200 | 2 | 90% | 0.5 | 720 | 🔥 |
| Auto Risk Mgmt | 300 | 2 | 70% | 0.5 | 840 | 🔥 |
| Social Trading | 100 | 2 | 60% | 1.5 | 80 | 📅 |
| Dark Mode | 127 | 0.5 | 50% | 0.25 | 127 | 📝 |

**Legend:**
- 🔥 = Start ASAP
- 📅 = Next Quarter
- 📝 = Backlog
