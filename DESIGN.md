# Design Direction: Specialty Cafe & Dining Landing Page

## 1. Identity & Mood
- **Brand Aesthetic:** Warm Minimalist Luxury (Japanese slow-living coffee culture meets Scandinavian calm).
- **Tone:** Welcoming, quiet craftsmanship, authentic, premium yet unpretentious.
- **Dials:** `ENERGY 1 / RHYTHM 2 / MOTION 1`
  - **ENERGY 1 (Calm):** Generous whitespace, grounded typography, warm natural lighting, no loud aggressive marketing.
  - **RHYTHM 2 (Balanced):** Purposeful layout changes between narrative (About), catalog (Menu), utility (Location & Hours), and proof (Reviews).
  - **MOTION 1 (Subtle):** Hover micro-interactions and smooth mobile drawer transition only; no endless loops or bouncing animations.

## 2. Palette (Strict 3 Core + 1 Accent)
- **Background Core:** `#FAF8F5` (Warm Linen / Off-White)
- **Container / Card Core:** `#F3EFEA` (Warm Sand)
- **Text & Contrast Core:** `#1C1917` (Deep Roasted Espresso / Charcoal)
- **Muted Subtext:** `#57534E` (Warm Stone, contrast ratio > 5.5:1 against #FAF8F5)
- **Single Deliberate Accent:** `#845D3E` (Amber Roast / Walnut, used sparingly for active category tabs and key CTA highlight)
- **Border:** `#E7E2DA` (1px subtle dividing hairline)

## 3. Typography
- **Headings (Display):** Playfair Display (Serif, warm, artisanal)
- **Body & Controls:** Plus Jakarta Sans (Sans-serif, clean, modern, highly legible on mobile)

## 4. Anti-Slop Enforcement
- **Copywriting:** Zero em dashes (`—`). Conversational, human, authentic Indonesian prose.
- **Buttons & Navigation:** Every interactive element has a real target. No dead controls.
- **Mobile First:** Minimum 44px tap targets, zero horizontal scroll, fully accessible navigation drawer with keyboard Escape support.
- **Content Honesty:** Realistic, un-fabricated cafe data cleanly organized in `src/data/cafe.ts`.
