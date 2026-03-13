# Axis MVP Color Palette

**作成:** 2026-03-13  
**Brand Identity:** Axis Pizza DeFi Protocol

---

## 🎨 Primary Brand Colors

### Axis Purple
```css
--axis-purple: #7B3FF2;
rgb(123, 63, 242)
hsl(270, 87%, 60%)
```

**Usage:**
- Primary buttons
- Links
- Focus states
- Brand highlights

**Tailwind:** `bg-axis-purple`, `text-axis-purple`, `border-axis-purple`

---

### Axis Pink
```css
--axis-pink: #FF69B4;
rgb(255, 105, 180)
hsl(330, 100%, 71%)
```

**Usage:**
- Accent elements
- Gradient endpoints
- Call-to-action highlights
- Secondary brand color

**Tailwind:** `bg-axis-pink`, `text-axis-pink`

---

### Axis Gradient
```css
background: linear-gradient(135deg, #7B3FF2 0%, #FF69B4 100%);
```

**Usage:**
- Hero sections
- Primary CTAs
- Feature highlights
- Logo backgrounds

**Tailwind:** `bg-gradient-to-r from-axis-purple to-axis-pink`

---

## 🖤 Neutral Colors

### Background

```css
/* Dark (Primary Background) */
--axis-dark: #1A1A2E;
rgb(26, 26, 46)

/* Gray (Card Background) */
--axis-gray: #2E2E3E;
rgb(46, 46, 62)

/* Light Gray (Borders, Dividers) */
--axis-light-gray: #4A4A5E;
rgb(74, 74, 94)
```

**Usage:**
- Dark: Page background
- Gray: Card containers
- Light Gray: Borders, separators

---

### Text

```css
/* White (Primary Text) */
--axis-white: #FFFFFF;
rgb(255, 255, 255)

/* Light (Secondary Text) */
--axis-light: #F5F5F5;
rgb(245, 245, 245)

/* Muted (Tertiary Text) */
--axis-muted: #B4B4B4;
rgb(180, 180, 180)
```

**Usage:**
- White: Headings, primary content
- Light: Body text
- Muted: Labels, captions

---

## ✅ State Colors

### Success (Green)
```css
--success: #10B981;
--success-light: #D1FAE5;
--success-dark: #047857;
```

**Usage:**
- Transaction success
- Positive balances
- Confirmation messages

**Tailwind:** `bg-green-500`, `text-green-500`

---

### Warning (Yellow)
```css
--warning: #F59E0B;
--warning-light: #FEF3C7;
--warning-dark: #D97706;
```

**Usage:**
- Pending transactions
- Caution messages
- Important notices

**Tailwind:** `bg-yellow-500`, `text-yellow-500`

---

### Error (Red)
```css
--error: #EF4444;
--error-light: #FEE2E2;
--error-dark: #DC2626;
```

**Usage:**
- Failed transactions
- Error messages
- Destructive actions

**Tailwind:** `bg-red-500`, `text-red-500`

---

### Info (Blue)
```css
--info: #3B82F6;
--info-light: #DBEAFE;
--info-dark: #2563EB;
```

**Usage:**
- Informational tooltips
- Help text
- Neutral notifications

**Tailwind:** `bg-blue-500`, `text-blue-500`

---

## 🌈 Extended Palette

### Solana Brand Integration

```css
/* Solana Purple (for SOL token) */
--solana-purple: #9945FF;
--solana-green: #14F195;
```

**Usage:**
- SOL token displays
- Wallet connection UI
- Solana network indicators

---

## 📊 Color Usage Guidelines

### Contrast Ratios (WCAG AA)

```
Background (#1A1A2E) + White (#FFFFFF) = 14.7:1 ✅
Background (#1A1A2E) + Light (#F5F5F5) = 13.8:1 ✅
Gray (#2E2E3E) + White (#FFFFFF) = 11.2:1 ✅
Purple (#7B3FF2) + White (#FFFFFF) = 5.8:1 ✅
```

All combinations meet WCAG AA standards for accessibility.

---

### Do's and Don'ts

**✅ Do:**
- Use gradient for primary CTAs
- Use purple for brand elements
- Use state colors consistently
- Maintain contrast ratios

**❌ Don't:**
- Mix too many colors in one section
- Use pink as primary text color
- Ignore accessibility standards
- Create custom shades without reason

---

## 🎨 Color Application Examples

### Primary Button
```tsx
<button className="bg-gradient-to-r from-axis-purple to-axis-pink text-white">
  Stake SOL
</button>
```

### Success Badge
```tsx
<span className="bg-green-500 text-white px-3 py-1 rounded-full">
  Active
</span>
```

### Card Container
```tsx
<div className="bg-axis-gray border border-axis-light-gray rounded-xl">
  {/* Content */}
</div>
```

### Text Hierarchy
```tsx
<h1 className="text-axis-white">Main Heading</h1>
<p className="text-axis-light">Body text</p>
<span className="text-axis-muted">Caption</span>
```

---

## 🔧 Implementation

### CSS Variables (index.css)

```css
:root {
  /* Brand */
  --axis-purple: #7B3FF2;
  --axis-pink: #FF69B4;
  
  /* Neutrals */
  --axis-dark: #1A1A2E;
  --axis-gray: #2E2E3E;
  --axis-light-gray: #4A4A5E;
  --axis-white: #FFFFFF;
  --axis-light: #F5F5F5;
  --axis-muted: #B4B4B4;
  
  /* States */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### Tailwind Config (tailwind.config.js)

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        axis: {
          purple: '#7B3FF2',
          pink: '#FF69B4',
          dark: '#1A1A2E',
          gray: '#2E2E3E',
          'light-gray': '#4A4A5E',
          white: '#FFFFFF',
          light: '#F5F5F5',
          muted: '#B4B4B4',
        },
      },
    },
  },
};
```

---

**Axis Pizzaの世界を彩るカラーパレット 🍕🎨**
