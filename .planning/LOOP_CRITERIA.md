# Loop Exit Criteria — BrainKit

## Iteration tracking
Iteration 0/3 | Red: ? | Yellow: ? | Status: Not started

## Conversion threshold
- Minimum 3/4 personas = "Yes" or "Strong Maybe" to purchase/book
- At least 1 persona in the non-technical segment (Marcus or Ana) converts

## Delivery tool quality
- [ ] fill-template.sh exits 0 on all 15 adversarial test inputs
- [ ] No `{{` tokens surviving in output
- [ ] No crashes on: unicode/accents, emoji, null, empty projects array, missing optional fields, special chars in project name
- [ ] Shell metacharacter injection does NOT execute (`;`, `|`, backtick, `$()`)
- [ ] Template syntax in payload values (`{{user}}`) does NOT cause double-render
- [ ] State pollution test passes: two back-to-back runs with different inputs produce different correct outputs
- [ ] CLAUDE.md output is persona-specific (not generic/template-feeling)

## Cross-persona friction
- [ ] All issues named by 2+ personas resolved or explicitly deferred with justification
- [ ] No new cross-persona issue introduced by fixes

## Copy / positioning
- [ ] FAQ "onboarding call" copy updated to reflect self-serve Kickstart (currently contradicts no-call flow)
- [ ] Testimonials section not showing empty dashed placeholder box on page load
- [ ] Voice pipeline clearly gated to Concierge/Full Stack — not marketed as part of Kickstart
- [ ] Price is anchored to a concrete outcome (not just features)
- [ ] Privacy/data statement covers the Whisper/OpenAI API concern explicitly (Priya blocker)
- [ ] At least one trust signal exists before the pricing section

## Hard stops
- [ ] STRIPE_KICKSTART_LINK is not `PLACEHOLDER` (product cannot be purchased)
- [ ] Cal.com discovery link in Testimonials section resolves or is removed
- [ ] No copy claims "Johannes sets up on the call" for Kickstart tier (contradicts self-serve)
