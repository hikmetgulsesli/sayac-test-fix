# Design System Strategy: The Luminous Obsidian

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Kinetic Monolith."** We are moving away from the "flat box" aesthetic typical of utility apps and moving toward an editorial, high-end experience that feels like a precision instrument carved from dark glass. 

The system rejects traditional structural dividers in favor of **Tonal Depth** and **Intentional Asymmetry**. By utilizing extreme typographic scales and layered dark surfaces, we create a sense of focused power. The counter isn't just a number; it is a monumental presence on the screen.

## 2. Colors: The Depth Palette
Our color strategy relies on the interaction between deep voids and vibrant luminescence. We use a Material Design-inspired token system to ensure semantic clarity while maintaining a premium feel.

### The "No-Line" Rule
**Borders are forbidden.** You must never use a 1px solid line to separate sections. Boundaries are defined strictly through background shifts:
- A `surface-container-low` card sitting on a `surface` background creates an organic edge.
- A `surface-variant` area provides focus without the "boxed-in" feeling of a stroke.

### Surface Hierarchy & Nesting
Use the following tokens to create physical layers:
- **Level 0 (Base):** `surface` (#0b1326) – The infinite foundation.
- **Level 1 (Sectioning):** `surface-container-low` (#131b2e) – Subtle grouping.
- **Level 2 (Interactive):** `surface-container` (#171f33) – Main counter housing.
- **Level 3 (Focus):** `surface-container-highest` (#2d3449) – Active state or modal elements.

### The "Glass & Gradient" Rule
To elevate the 'Modern' requirement, main action buttons (Artır/Azalt) should utilize a subtle **Luminous Gradient**. 
- Transition from `primary` (#b4c5ff) to `primary_container` (#2563eb) at a 135-degree angle.
- Apply a `backdrop-blur` of 12px to floating elements to achieve a "frosted obsidian" effect.

## 3. Typography: Editorial Authority
We utilize **Inter** for its mathematical precision. The hierarchy is designed to make the counter value the undisputed protagonist of the layout.

*   **Display Large (Counter Value):** `display-lg` (3.5rem/56px). Use this for the primary integer. Letter spacing should be set to -0.02em for a "tight," custom-font look.
*   **Headline Medium (Section Labels):** `headline-md` (1.75rem/28px). Used for secondary metrics or history titles.
*   **Label Medium (Action Text):** `label-md` (0.75rem/12px). All-caps with +0.05em tracking for buttons like "SIFIRLA" (Reset).

**Turkish Language Implementation:** Ensure proper rendering of "İ" and "ı". All UI labels must be in Turkish (e.g., *Artır*, *Azalt*, *Geçmiş*, *Ayarlar*).

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "dirty" for this system. We use light, not shadow, to define space.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` (#060e20) element inside a `surface-container` (#171f33) to create a "sunken" well effect for input fields.
*   **Ambient Shadows:** For floating action buttons, use a shadow color tinted with the primary blue (`#2563eb` at 8% opacity) with a 40px blur. This mimics the glow of the screen rather than a physical shadow.
*   **Ghost Borders:** If accessibility requires a border, use `outline_variant` at **15% opacity**. It should be felt, not seen.

## 5. Components: Precision Primitives

### Buttons (Butonlar)
*   **Primary (Artır - Increase):** Rounded `xl` (1.5rem). Background: `secondary_container` (#00b954). Text: `on_secondary_container`. 
*   **Danger (Azalt - Decrease):** Rounded `xl`. Background: `tertiary_container` (#cf2c30). Text: `on_tertiary_container`.
*   **Ghost (Sıfırla - Reset):** No background. Text: `outline`. Hover state: `surface_variant` background with 20% opacity.

### The Counter Card (Sayaç Kartı)
A master container using `surface_container_low`. It should feature intentional asymmetry—perhaps a larger padding-top (48px) than padding-bottom (32px)—to give the counter value "room to breathe" and an editorial feel.

### Lists (Geçmiş Listesi)
**Forbid dividers.** To separate history items, use a vertical spacing scale of 1rem (`md`) and a subtle alternate background (`surface-container-lowest`) for every second item.

### Input Fields (Giriş Alanları)
Use "The Layering Principle." The input background should be darker than the card it sits on, creating a recessed, tactile feel.

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme contrast for the counter value. Use `primary_fixed` (#dbe1ff) for the number against the dark background.
*   **Do** use Turkish terminology naturally: "Sayacı Sıfırla" instead of just "Sıfırla" where space permits.
*   **Do** lean into `rounded-xl` for all containers to soften the aggressive dark theme.

### Don't:
*   **Don't** use pure black (#000000). It kills the depth. Use our `surface` (#0b1326).
*   **Don't** use standard 1px borders. If you feel the need for a line, use a background color shift instead.
*   **Don't** crowd the counter. Give the `display-lg` text at least 32px of clear space on all sides.