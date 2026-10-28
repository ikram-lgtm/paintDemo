# FAQ_DESIGN.md — Matching FAQ section

## Editorial intent
A dedicated, elegant FAQ placed immediately AFTER the newsletter, using the same cream/olive/gold aesthetic. No reference screenshot was provided for FAQ, so this is a **new complementary design**, not claimed to be part of the original approved mockup.

## Desktop design
- Soft oatmeal background `#F3F1EB` to differentiate from gallery `#F8F7F2`.
- Outer padding 100–126px desktop, width min(1210px,100%).
- Two columns: left approx 39%, right approx 61%, flexible gap 35–108px.
- Left: small `YOUR QUESTIONS` eyebrow, large editorial serif heading `Helpful Answers, Beautiful Results.`, gold italic second line, short supporting statement.
- Right: seven single-column FAQ rows, not multiple cards across. Each has thin light border, gently rounded 14px radius, number in muted gold, question in 17–21px serif, circular plus/minus control. Answer expands below without a fake modal.
- Vectors: faint architectural wireframe behind left heading and a giant `FAQ` ghost word as barely visible texture.
- Colors: dark green text, gold accent, ivory surface, #60665F paragraph gray.

## Mobile
- Stack FAQ heading over list; title roughly 40px; gutters 16px.
- Each question's number, text, and 36px button area fit in three columns.
- Native `<details>` + `<summary>` ensures keyboard and screen-reader accessibility without unnecessary client JS.
- Questions wrap to two lines naturally; no truncation or decorative text collisions.

## Content scope
FAQ covers only the stated service range: interior painting, exterior painting, plasterboard/Placo, joint taping, plastering & skimming, apartment and house renovation, and small repairs. No invented prices, guarantees, turnaround promises, certifications, customer reviews, warranty policies, named clients or team claims. Confirm every answer with the business owner.

## Interaction
- Press Enter or Space on a summary to toggle.
- Plus SVG switches to minus SVG when open.
- Answers remain in document flow, not absolute-positioned overlays.
- Avoid fake links. For direct enquiries refer to existing route/contact form.
- Native multiple open items are acceptable and support comparing answers; do not add a JS accordion dependency purely to force one open item.
