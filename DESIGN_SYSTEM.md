<!-- Design system  -->

1. Site URL : https://minibricks.co/
2. Project Name: Minibricks
3. Objective: Reverse engineer the website , primarily it's design and typography
4. Author: Vinay Nain
5. Date: Jan 28 - 2026

# TYPOGRAPHY SYSTEM

## Font Families

**Display/Impact:** grok Flex

- Weight: 550
- Usage: Hero headings, large numbers, section titles, impactful moments

**Body/UI:** Graphik

- Weight: 400
- Usage: Navigation, body text, descriptions, labels, buttons

---

## Font Size Scale

### Base Configuration

- Root font size: 16px (browser default)
- Type scale ratio: 1.333 (Perfect Fourth)
- Reasoning: Creates clear visual hierarchy without excessive jumps

### Size Definitions

| Name     | Size (px) | Size (rem) | Usage                                   |
| -------- | --------- | ---------- | --------------------------------------- |
| **xs**   | 14px      | 0.875rem   | Small labels, footnotes                 |
| **sm**   | 16px      | 1rem       | UI labels, captions                     |
| **base** | 18px      | 1.125rem   | **Primary body text**                   |
| **lg**   | 20px      | 1.25rem    | Navigation, large UI text               |
| **xl**   | 24px      | 1.5rem     | Small headings (H6)                     |
| **2xl**  | 32px      | 2rem       | Medium headings (H5)                    |
| **3xl**  | 43px      | 2.688rem   | Section headings (H4), intro paragraphs |
| **4xl**  | 57px      | 3.563rem   | Large headings (H3)                     |
| **5xl**  | 76px      | 4.75rem    | Major headings (H2)                     |
| **6xl**  | 101px     | 6.313rem   | Section numbers, emphasis (H1)          |
| **7xl**  | 180px     | 11.25rem   | Hero text only                          |

---

## Line Height Scale

| Context         | Multiplier | Example (18px base) | Usage                              |
| --------------- | ---------- | ------------------- | ---------------------------------- |
| **Hero**        | 1.0 - 1.1  | 18px - 20px         | Single-line hero text (180px font) |
| **Display**     | 1.1 - 1.2  | 20px - 22px         | Large headings (76px+ font)        |
| **Headings**    | 1.2 - 1.3  | 22px - 23px         | H2-H4 (32-57px fonts)              |
| **Subheadings** | 1.3 - 1.4  | 23px - 25px         | H5-H6 (20-32px fonts)              |
| **Body**        | 1.6        | 29px                | **Primary reading text**           |
| **Intro/Large** | 1.25 - 1.3 | 23px - 23px         | Large intro paragraphs (43px)      |
| **Compact**     | 1.5        | 27px                | Small text, labels (14-16px)       |
| **UI/Buttons**  | 1.0        | 18px                | Single-line interface elements     |

---

## Letter Spacing

| Element               | Value       | Example        | Usage                  |
| --------------------- | ----------- | -------------- | ---------------------- |
| Body text             | 0           | default        | Never adjust body text |
| Navigation            | 0           | default        | Keep readable          |
| Headings (mixed case) | 0 to 0.02em | subtle         | Only if needed         |
| **ALL CAPS headings** | **0.08em**  | tracking-wide  | Always for caps        |
| Display numbers       | 0.05em      | tracking-wider | Large grok numbers     |
| Buttons (caps)        | 0.08em      | tracking-wide  | UI consistency         |

---

## Practical Applications

### Navigation

```
Font: Graphik 400
Size: 20px (lg)
Line height: 1.0
Letter spacing: 0
```

### Hero Heading

```
Font: grok Flex 550
Size: 180px (7xl)
Line height: 1.1
Letter spacing: 0 (or 0.02em if all caps)
```

### Section Heading

```
Font: grok Flex 550
Size: 101px (6xl) or 76px (5xl)
Line height: 1.2
Letter spacing: 0
```

### Intro Paragraph (About Us style)

```
Font: Graphik 400
Size: 43px (3xl)
Line height: 1.3
Max-width: 25em (~1075px)
Color: Slightly muted for readability
```

### Body Text (Primary Reading)

```
Font: Graphik 400
Size: 18px (base)
Line height: 1.6
Max-width: 35em (~630px)
Character count: 60-70 per line
```

### Description Text (Secondary)

```
Font: Graphik 400
Size: 20px (lg)
Line height: 1.3
Max-width: 32em
```

### Small Labels

```
Font: Graphik 400
Size: 16px (sm)
Line height: 1.5
Letter spacing: 0
```

### Buttons

```
Font: Graphik 400
Size: 20px (lg)
Line height: 1.0
Letter spacing: 0.08em (if all caps)
Text transform: uppercase
```

### Display Numbers (Large)

```
Font: grok Flex 550
Size: 195px (custom, between 6xl-7xl)
Line height: 1.0
Letter spacing: 0.05em
```

### FAQ Headings

```
Font: Graphik 400
Size: 32px (2xl)
Line height: 1.3
```

### Blog Post Headings

```
Font: Graphik 400
Size: 43px (3xl)
Line height: 1.3
```

---

## Line Length & Readability

| Text Size        | Max Width      | Character Count | Context            |
| ---------------- | -------------- | --------------- | ------------------ |
| 18px body        | 35em (~630px)  | 60-70 chars     | Primary reading    |
| 20px description | 32em (~640px)  | 55-65 chars     | Secondary content  |
| 43px intro       | 25em (~1075px) | 30-40 chars     | Large display text |
| 16px small       | 30em (~480px)  | 50-60 chars     | Labels, captions   |

---

## Font Weight Usage

| Weight        | Font      | Usage                                  |
| ------------- | --------- | -------------------------------------- |
| 400 (Regular) | Graphik   | All body, UI, navigation, descriptions |
| 550 (Medium)  | grok Flex | All display, headings, numbers         |

_Note: Stick to these two weights for consistency. Don't add bold/light variations unless absolutely necessary._

---

## Responsive Considerations

### Mobile Adjustments (< 768px)

- Hero (7xl): Scale down to 5xl or 6xl
- Section headings (6xl): Scale to 4xl or 5xl
- Intro paragraphs (3xl): Scale to 2xl
- Body text (base): Keep at 18px (don't go smaller)
- Navigation (lg): Keep at 20px or scale to base (18px)

### Tablet (768px - 1024px)

- Use mid-range sizes
- Hero: 6xl
- Sections: 5xl
- Intro: 3xl

### Desktop (1024px+)

- Use full scale as defined above

---

## Special Cases

### All Caps Sections

```css
text-transform: uppercase;
letter-spacing: 0.08em;
font-size: 20px; /* Don't make caps too large */
```

### Number Displays (Stats, Counters)

```
Font: grok Flex 550
Size: 101px - 195px (6xl or custom)
Line height: 1.0
Letter spacing: 0.05em
```

### Pull Quotes / Highlights

```
Font: Graphik 400
Size: 32px - 43px (2xl-3xl)
Line height: 1.4
Style: Italic (if available)
```

---

## Quick Reference - Most Common Sizes

**You'll use these 80% of the time:**

1. **18px (base)** - Body text
2. **20px (lg)** - Navigation, descriptions, buttons
3. **43px (3xl)** - Intro paragraphs, medium headings
4. **101px (6xl)** - Section headings
5. **180px (7xl)** - Hero only

---

## Design Principles

✅ **DO:**

- Use grok Flex for impact, Graphik for readability
- Keep body text at 18px minimum
- Use 1.6 line height for body content
- Apply letter spacing to ALL CAPS
- Maintain 60-70 character line lengths

❌ **DON'T:**

- Use 44px text as body text (it's display/intro only)
- Go below 16px for any readable content
- Mix font weights randomly
- Ignore line length limits
- Use tight line heights on multi-line text

## SPACING SYSTEM

### Base Configuration

Base unit: 4px
Philosophy: Use multiples of 4 for finer control and consistency

### Core Scale (4px based)

- 0: 0px
- 1: 4px (0.25rem)
- 2: 8px (0.5rem)
- 3: 12px (0.75rem)
- 4: 16px (1rem)
- 5: 20px (1.25rem)
- 6: 24px (1.5rem)
- 7: 28px (1.75rem)
- 8: 32px (2rem)
- 9: 36px (2.25rem)
- 10: 40px (2.5rem)
- 11: 44px (2.75rem)
- 12: 48px (3rem)
- 14: 56px (3.5rem)
- 16: 64px (4rem)
- 20: 80px (5rem)
- 24: 96px (6rem)
- 28: 112px (7rem)
- 32: 128px (8rem)
- 36: 144px (9rem)
- 40: 160px (10rem)
- 44: 176px (11rem)
- 48: 192px (12rem)

### Awwwards Site Measurements

**Note:** Original site uses inconsistent spacing. Values below are reference only.

**Horizontal (X-axis) Spacing:**

- Container padding: 53px (inconsistent - not following a system)

**Vertical (Section) Spacing:**

- Between sections: 178px (inconsistent - not following a system)

**Other observations:**

- No clear base unit detected
- Spacing varies throughout the site
- Values don't follow 4px or 8px grid

### Our System Approach

Since the reference site lacks spacing consistency, we'll build a cleaner system:

**Map their values to our scale:**

- 53px container padding → **Use 13 (52px) or 14 (56px)**
- 178px section gap → **Use 44 (176px) or 48 (192px)**

### Initial Guidelines (Refine as you build)

**Micro Spacing (within components)**

- Button padding: 4-6 (16-24px)
- Card padding: 6-8 (24-32px)
- Input padding: 3-4 (12-16px)
- Icon spacing: 2-3 (8-12px)

**Macro Spacing (between components)**

- Paragraph spacing: 4-6 (16-24px)
- Component spacing: 8-12 (32-48px)
- Section spacing: 32-44 (128-176px)
- Hero spacing: 36-48 (144-192px)

**Container Spacing**

- Mobile padding: 4-6 (16-24px)
- Tablet padding: 8-12 (32-48px)
- Desktop padding: 12-16 (48-64px)

### Decision Framework

When choosing spacing:

1. Start with closest value from our 4px scale
2. If between two values, go larger (more whitespace = better)
3. Must be divisible by 4 (4, 8, 12, 16, 20, 24, etc.)
4. Document what you chose and why
5. After 3+ uses, it becomes a pattern → add to system

### Patterns to Document While Building

(Fill these in as you build components)

```
Component: Hero Section
- Top/bottom padding: ___
- Container x-padding: ___
- Heading to text gap: ___
- Text to CTA gap: ___

Component: Section
- Top/bottom padding: ___
- Between sections: ___
- Heading to content: ___

Component: Card
- Internal padding: ___
- Gap between cards: ___

Component: Navigation
- Logo to nav gap: ___
- Nav item spacing: ___
- Nav padding: ___
```

### Notes & Observations

- ⚠️ Reference site has inconsistent spacing (53px, 178px, varying values)
- ✅ We're building a cleaner system using **4px multiples**
- ✅ 4px base gives us finer control than 8px (more options: 4, 12, 20, 28, 36, 44, 52, etc.)
- ✅ Prioritize visual rhythm over matching their exact inconsistent values
- 📝 Document spacing decisions as you build to identify patterns
- 🔄 Review and standardize after building 3-4 major components

## COLOR SYSTEM

### Design Principles

- Minimal color palette for clean, modern aesthetic
- High contrast for readability (black text on light backgrounds)
- Strategic use of accent colors for CTAs and visual interest

---

### Color Palette

#### Neutrals (Grayscale)

```
black: {
  DEFAULT: '#000000',     // Primary text, headings
}

gray: {
  50: '#f9f9f9',          // Primary background
  100: '#f5f5f5',         // Subtle background variation (generated)
  200: '#e5e5e5',         // Light borders (generated)
  300: '#d4d4d4',         // (generated)
  400: '#c9c9c9',         // Borders, dividers
  500: '#a3a3a3',         // (generated)
  600: '#737373',         // (generated)
  700: '#4d4d4d',         // Footer subheadings, muted text
  800: '#262626',         // (generated)
  900: '#171717',         // (generated)
}

white: '#ffffff'          // Pure white for contrast elements
```

#### Brand/Accent Colors

```
red: {
  DEFAULT: '#e93c05',     // Primary accent (circle elements, CTAs)
  50: '#fef2f2',          // Very light (hover backgrounds)
  100: '#fee2e2',         // Light tint
  500: '#e93c05',         // Main brand red
  600: '#d13504',         // Darker (hover states)
  700: '#b92f04',         // Darkest (active states)
}

lime: {
  DEFAULT: '#caec00',     // Secondary accent (footer arrows, highlights)
  50: '#f7fee7',          // Very light tint
  100: '#ecfccb',         // Light tint
  500: '#caec00',         // Main lime accent
  600: '#b6d400',         // Darker (hover)
  700: '#a2bc00',         // Darkest (active)
}
```

---

### Usage Guidelines

#### Text Colors

```
Primary text:     black (#000000)
Secondary text:   gray-700 (#4d4d4d)
Muted text:       gray-400 (#c9c9c9)
On dark bg:       white (#ffffff)
```

#### Background Colors

```
Primary:          gray-50 (#f9f9f9)
Cards/sections:   white (#ffffff)
Subtle variation: gray-100 (#f5f5f5)
Footer:           black or gray-900
```

#### Borders & Dividers

```
Standard:         gray-400 (#c9c9c9)
Subtle:           gray-200 (#e5e5e5)
Strong:           gray-700 (#4d4d4d)
```

#### Interactive Elements

```
Primary CTA:      red-500 (#e93c05)
  Hover:          red-600 (#d13504)
  Active:         red-700 (#b92f04)

Secondary accent: lime-500 (#caec00)
  Hover:          lime-600 (#b6d400)

Links:            red-500 or black (underline on hover)
```

#### Functional States

```
Focus ring:       red-500 with opacity
Disabled:         gray-400
Error:            red-500
Success:          lime-500 (or add green if needed)
```

---

### Color Combinations

#### High Contrast (Readability)

```
✅ Black text on gray-50 background
✅ White text on black background
✅ Gray-700 text on white background
❌ Gray-400 text on gray-50 (too low contrast)
```

#### Accent Usage

```
Red (#e93c05):
  - Primary buttons
  - Important CTAs
  - Circle decorative elements
  - Active states
  - Links (sparingly)

Lime (#caec00):
  - Footer accents (arrows)
  - Secondary highlights
  - Success states
  - Playful elements
```

---

### Accessibility Notes

**WCAG Contrast Ratios:**

- Black (#000) on gray-50 (#f9f9f9): ~19:1 ✅ AAA
- Gray-700 (#4d4d4d) on white: ~8.6:1 ✅ AAA
- Red (#e93c05) on white: ~4.8:1 ✅ AA (large text)
- Gray-400 (#c9c9c9) on gray-50: ~2.5:1 ⚠️ Borders only, not text

**Recommendations:**

- Never use gray-400 for text (too low contrast)
- Red accent is readable on white for large text (headings, buttons)
- For small red text, ensure sufficient size or use black instead

---

### Quick Reference

**Most Used (80% of the time):**

1. `bg-gray-50` - Main background
2. `text-black` - Primary text
3. `text-gray-700` - Secondary text
4. `border-gray-400` - Borders
5. `bg-red-500` - Primary CTA
6. `bg-lime-500` - Accent elements

**Special Cases:**

- Footer subheadings: `text-gray-700`
- Circle elements: `bg-red-500` or `border-red-500`
- Footer arrows: `text-lime-500` or `bg-lime-500`

---

### Notes

- Site uses minimal color palette (mostly grayscale + 2 accents)
- High contrast approach for modern, clean aesthetic
- Red is primary brand color for CTAs and emphasis
- Lime is secondary accent for visual interest (footer, highlights)
- Stick to these colors for consistency - don't add random colors
