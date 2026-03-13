# Axis MVP Design System

**作成:** 2026-03-13  
**対象:** axis-agent frontend

---

## 🎨 Design Philosophy

**Core Principles:**
1. **Minimalist** - シンプルで直感的
2. **Modern** - 最新のWeb3デザイントレンド
3. **Accessible** - すべてのユーザーに使いやすい
4. **Responsive** - あらゆるデバイスで美しく

**Inspiration:**
- Uniswap - クリーンなインターフェース
- Phantom Wallet - スムーズなアニメーション
- Raydium - 洗練されたDeFi UI

---

## 🎨 Color Palette

### Primary Colors

```css
/* Brand Colors */
--axis-purple: #7B3FF2;    /* メインブランドカラー */
--axis-pink: #FF69B4;      /* アクセントカラー */
--axis-gradient: linear-gradient(135deg, #7B3FF2 0%, #FF69B4 100%);

/* Neutrals */
--axis-dark: #1A1A2E;      /* 背景（ダーク） */
--axis-gray: #2E2E3E;      /* カード背景 */
--axis-light-gray: #4A4A5E; /* ボーダー */
--axis-white: #FFFFFF;     /* テキスト */
--axis-light: #F5F5F5;     /* 背景（ライト） */
```

### State Colors

```css
/* Success */
--success: #10B981;
--success-light: #D1FAE5;

/* Warning */
--warning: #F59E0B;
--warning-light: #FEF3C7;

/* Error */
--error: #EF4444;
--error-light: #FEE2E2;

/* Info */
--info: #3B82F6;
--info-light: #DBEAFE;
```

### Tailwind Classes

```tsx
// Primary
className="bg-axis-purple text-white"
className="bg-gradient-to-r from-axis-purple to-axis-pink"

// States
className="bg-green-500"  // Success
className="bg-yellow-500" // Warning
className="bg-red-500"    // Error
className="bg-blue-500"   // Info
```

---

## 📐 Typography

### Font Family

```css
/* Primary Font */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace (for addresses, numbers) */
font-family: 'Fira Code', 'Monaco', monospace;
```

### Scale

```css
/* Headings */
.heading-1 { font-size: 3rem; font-weight: 700; }      /* 48px */
.heading-2 { font-size: 2.25rem; font-weight: 600; }   /* 36px */
.heading-3 { font-size: 1.875rem; font-weight: 600; }  /* 30px */
.heading-4 { font-size: 1.5rem; font-weight: 600; }    /* 24px */

/* Body */
.body-large { font-size: 1.125rem; }  /* 18px */
.body { font-size: 1rem; }            /* 16px */
.body-small { font-size: 0.875rem; }  /* 14px */
.caption { font-size: 0.75rem; }      /* 12px */
```

### Tailwind Classes

```tsx
// Headings
className="text-4xl lg:text-5xl font-bold"
className="text-3xl lg:text-4xl font-semibold"
className="text-2xl lg:text-3xl font-semibold"

// Body
className="text-lg"
className="text-base"
className="text-sm"
className="text-xs"
```

---

## 📏 Spacing

### Scale

```css
/* Tailwind spacing scale */
1 = 4px
2 = 8px
3 = 12px
4 = 16px
6 = 24px
8 = 32px
12 = 48px
16 = 64px
20 = 80px
```

### Usage

```tsx
// Padding
className="p-4"       // 16px all sides
className="px-6 py-4" // 24px horizontal, 16px vertical

// Margin
className="mb-6"      // 24px bottom
className="mt-8"      // 32px top

// Gap (Flexbox/Grid)
className="gap-4"     // 16px gap
className="gap-6"     // 24px gap
```

---

## 🔲 Layout Components

### Container

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  {/* Content */}
</div>
```

### Card

```tsx
<div className="
  bg-axis-gray 
  rounded-xl 
  p-6 
  border border-axis-light-gray
  hover:border-axis-purple
  transition-all duration-200
">
  {/* Card content */}
</div>
```

### Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## 🎯 Interactive Elements

### Buttons

```tsx
// Primary Button
<button className="
  bg-gradient-to-r from-axis-purple to-axis-pink
  text-white font-semibold
  px-6 py-3 rounded-xl
  hover:shadow-lg hover:scale-105
  transition-all duration-200
  focus:outline-none focus:ring-2 focus:ring-axis-purple focus:ring-offset-2
">
  Stake SOL
</button>

// Secondary Button
<button className="
  bg-axis-gray text-white
  border border-axis-light-gray
  px-6 py-3 rounded-xl
  hover:border-axis-purple
  transition-all duration-200
">
  Cancel
</button>

// Danger Button
<button className="
  bg-red-500 text-white
  px-6 py-3 rounded-xl
  hover:bg-red-600
  transition-all duration-200
">
  Withdraw
</button>
```

### Inputs

```tsx
<input
  type="text"
  className="
    w-full
    bg-axis-gray text-white
    border border-axis-light-gray
    rounded-lg px-4 py-3
    focus:border-axis-purple focus:ring-2 focus:ring-axis-purple
    transition-all duration-200
  "
  placeholder="Enter amount"
/>
```

### Select

```tsx
<select className="
  w-full
  bg-axis-gray text-white
  border border-axis-light-gray
  rounded-lg px-4 py-3
  focus:border-axis-purple
  transition-all duration-200
">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

---

## 🎬 Animations

### Transitions

```css
/* Standard */
.transition-smooth {
  transition: all 200ms ease-in-out;
}

/* Slow */
.transition-slow {
  transition: all 300ms ease-in-out;
}

/* Fast */
.transition-fast {
  transition: all 100ms ease-in-out;
}
```

### Effects

```tsx
// Hover lift
className="hover:scale-105 hover:shadow-lg transition-smooth"

// Fade in
className="animate-fade-in"

// Slide up
className="animate-slide-up"
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
sm: 640px   /* Small devices */

/* Tablet */
md: 768px   /* Medium devices */

/* Desktop */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large */
```

### Usage

```tsx
<div className="
  w-full
  px-4 sm:px-6 lg:px-8
  text-sm md:text-base lg:text-lg
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  {/* Responsive content */}
</div>
```

---

## 🌙 Dark Mode (Default)

Axis MVPはデフォルトでダークモードを採用。

```css
/* Background colors */
body: #1A1A2E
card: #2E2E3E
border: #4A4A5E

/* Text colors */
primary: #FFFFFF
secondary: #B4B4B4
muted: #6B6B7B
```

---

## ♿ Accessibility

### Color Contrast

```css
/* WCAG AA Compliant */
Background: #1A1A2E
Text: #FFFFFF
Contrast ratio: 14.7:1 ✅

/* Focus states */
focus:outline-none 
focus:ring-2 
focus:ring-axis-purple 
focus:ring-offset-2
```

### Keyboard Navigation

```tsx
// All interactive elements must be keyboard accessible
<button 
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Clickable
</button>
```

---

## 📦 Common Patterns

### Loading Spinner

```tsx
<div className="animate-spin rounded-full h-8 w-8 border-4 border-axis-purple border-t-transparent" />
```

### Toast Notification

```tsx
<div className="
  fixed top-4 right-4
  bg-axis-gray border border-axis-purple
  rounded-lg p-4 shadow-lg
  animate-slide-down
">
  Transaction successful!
</div>
```

### Modal

```tsx
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-axis-gray rounded-xl p-6 max-w-md w-full">
    {/* Modal content */}
  </div>
</div>
```

---

## ✅ Design Checklist

### Before Implementation
- [ ] デザインシステムのカラーパレット使用
- [ ] レスポンシブ対応計画
- [ ] アクセシビリティ考慮

### During Implementation
- [ ] Tailwindユーティリティクラス使用
- [ ] 一貫したスペーシング
- [ ] 適切なアニメーション

### After Implementation
- [ ] 全ブレークポイントでテスト
- [ ] キーボードナビゲーション確認
- [ ] カラーコントラスト確認

---

**デザインで Axis MVP を美しく 🎨**
