# Customiser Layer System — Asset Specification

Technical spec for watch photo layers used by the IFL Customizer preview tool.

## How It Works

The customiser composites transparent PNG layers to show a real-time preview of artwork on any watch. The stack (bottom to top):

```
4. hands.png        — hands + date window (topmost, sits above artwork)
3. [artwork]        — customer's chosen artwork (composited at runtime)
2. dial-mask.png    — mask defining the dial boundary (clips artwork)
1. case.png         — watch case, bezel, bracelet (base layer)
```

The dial mask ensures artwork only appears within the dial area. The hands layer includes the date window so it always renders on top of the artwork.

## Layer Specifications

### Export Settings (all layers)

| Property       | Value                  |
|----------------|------------------------|
| Dimensions     | 1500 x 1500 px        |
| Format         | PNG-24, transparent    |
| Color space    | sRGB                   |
| Bit depth      | 8-bit                  |
| Compression    | Maximum (smallest file)|

### 1. case.png — Watch Case

**Contains:** case body, bezel, crown, pushers, bracelet/strap, caseback (if visible)

**Does NOT contain:** dial, hands, date window

**Notes:**
- The dial area should be fully transparent (punched out)
- Include any bezel markings, tachymeter scales, etc.
- Anti-alias edges for clean compositing

### 2. dial.png — Dial Face

**Contains:** dial surface, hour markers/indices, minute track, sub-dials, brand logo, text

**Does NOT contain:** hands, date window, date frame

**Notes:**
- This is the "stock" dial — what the watch looks like without customisation
- Used as the default preview before artwork is applied
- Must align perfectly with the case.png dial opening

### 3. hands.png — Hands + Date Window

**Contains:** hour hand, minute hand, second hand, date window frame + date, chronograph hands (if applicable)

**Does NOT contain:** dial surface, case

**Notes:**
- **Date window goes in this layer** (on top of artwork, not behind it)
- Include the date frame/magnifier if the watch has one
- Hands should be in a natural position (e.g., 10:10 or match the original photo)
- Everything except the hands and date window should be transparent

### 4. dial-mask.png — Dial Boundary Mask

**Contains:** solid white (#FFFFFF) fill of the exact dial area

**Does NOT contain:** anything outside the dial boundary

**Notes:**
- Pure white where artwork should appear, fully transparent everywhere else
- Follow the exact inner edge of the bezel/chapter ring
- No anti-aliasing on the mask edge — use a hard 1px boundary
- This mask clips the artwork to fit the dial shape

## Export Instructions (Photoshop)

### From an existing PSD with separated layers:

1. Open the PSD, ensure canvas is **1500 x 1500 px** (Image > Image Size, resample if needed)
2. For each layer:
   - Hide all other layers
   - Select the target layer
   - File > Export As > PNG
   - Ensure "Transparency" is checked
   - Color space: sRGB
   - Export with the naming convention below
3. For the dial mask:
   - Create a new layer
   - Use the Magic Wand / Pen tool to select the dial area precisely
   - Fill with pure white (#FFFFFF)
   - Delete everything outside the selection
   - Export as PNG

### From a flat photo (no PSD layers):

1. Use the Pen Tool to trace each element (case, dial, hands)
2. Create layer masks for clean separation
3. Export each as above
4. Estimated time: 30-60 min per reference depending on complexity

## File Naming & Directory Structure

```
customiser/
  assets/
    {reference}/           # e.g., "citizen-tsuyosa-nj0150"
      case.png
      dial.png
      hands.png
      dial-mask.png
  test-artwork/
    test-artwork-01.png    # square test image for compositing
  README.md                # this file
```

Reference folder names: lowercase, hyphens, use the model name + reference number.

## Test Batch

**Status:** Pending — waiting for Ira & Bilel to confirm which references have clean PSD layers.

We need 3 test references to validate the compositing script before doing all 47:

| # | Type              | Target Reference | Status  |
|---|-------------------|-----------------|---------|
| 1 | Round dial        | TBD (Citizen or Seiko) | Pending |
| 2 | Diver with bezel  | TBD             | Pending |
| 3 | Non-round         | TBD (Bulova cushion if available) | Pending |

**Selection criteria:**
- PSD already exists with clean, separated layers (fastest turnaround)
- Good variety of case shapes and complications
- Representative of common watch types in the catalogue

Once Ira & Bilel confirm availability, update this table with the chosen references.

## Quality Checklist

Before submitting layers, verify:

- [ ] All 4 PNGs are exactly 1500x1500 px
- [ ] All PNGs have transparent backgrounds (no white/colored background)
- [ ] case.png has the dial area fully punched out (transparent)
- [ ] hands.png includes the date window (if the watch has one)
- [ ] dial-mask.png is pure white (#FFF) for the dial area, transparent elsewhere
- [ ] Layers align perfectly when stacked — no visible gaps or overlaps
- [ ] Color space is sRGB on all files
- [ ] No compression artifacts on edges

## Questions for Photographers

1. Which references already have PSD files with separated layers?
2. For PSDs without separated layers — how long to separate per reference?
3. Any references where the PSD doesn't exist at all (photo only)?
4. Can you suggest 3 good test candidates that match our criteria above?
