# BrainKit Pre-Launch Validation — HANDOFF

## Iteration 1/3 | Red: 6 | Yellow: 5 | Status: In progress

---

## Conversion Summary

| Persona | Verdict | Single blocker |
|---------|---------|----------------|
| Marcus (Skeptic, consultant) | **No** | Privacy bait-and-switch: hero says vault stays on Mac, FAQ reveals Whisper sends audio to OpenAI |
| Ana (Cost optimizer, coach) | **Strong Maybe** | setup.sh is a terminal script but FAQ promises "no terminal needed" |
| Tyler (Competitor-aware, founder) | **Strong Maybe** | CLAUDE.md not differentiated from what a technical buyer writes himself in 45 min; PRIMARY_PROJECT routing bug |
| Priya (Compliance, regulated industry) | **No** | No DPA, no ToS, Johannes has read access to vault repo with NDA client names |
| **Score** | **0/4 clean** | Threshold: 3/4. Not met. |

---

## Priority Table

### Red — Block launch (fix before any public traffic)

| # | Issue | Found by | Confidence | Fix |
|---|-------|----------|-----------|-----|
| R1 | Stripe link is `PLACEHOLDER` — product cannot be purchased | Criteria hard stop | Hard fact | User action: create Stripe product |
| R2 | FAQ: "Johannes handles everything on the onboarding call" — directly contradicts self-serve automated Kickstart | Marcus, Ana, Tyler (3/4) | High | Rewrite FAQ entry |
| R3 | Empty testimonials dashed box visible on page — explicit text says "no testimonials yet" | All 4 personas + Chaos | High | Remove section entirely until first real testimonial exists |
| R4 | setup.sh IS a terminal script. FAQ says "no terminal, no setup experience needed." | Ana, Tyler (2/4) | High | Either fix FAQ claim or build a no-terminal installer; fix delivery email with exact steps |
| R5 | PRIMARY_PROJECT routing hardcodes all meeting notes to one folder — functional bug for multi-project users | Tyler | High | Fix template: generate one routing row per project in `projects` array |
| R6 | Privacy contradiction: Hero "vault stays on your Mac" vs FAQ "voice notes go through OpenAI Whisper API" | Marcus, Priya (2/4) | High | Tier the privacy claim; add explicit Whisper disclosure; separate vault-privacy from voice-privacy |

### Yellow — Tool bugs (fill-template.sh)

| # | Issue | Test | Fix |
|---|-------|------|-----|
| T12 | `{{user}}` in a project name/description survives in output — trips the no-`{{` check. Inert (no real slot matches) but visually wrong. | Test 12 | Pre-sanitize user-supplied `{{...}}` brace pairs: escape them before injecting into content buffer |
| T13 | `\n` embedded in `primary_project` breaks the routing table Markdown row into 3 lines. | Test 13 | Strip/replace `\n` in `get_field` output or in the `safe_name` transform before substitution |

### Yellow — Copy/positioning

| # | Issue | Found by | Fix |
|---|-------|----------|-----|
| Y1 | `language: "Spanish"` only changes Claude response language, not vault folder/template structure (English) | Ana | Document explicitly in FAQ or add note on sales page |
| Y2 | No public setup.sh — technical buyers won't run an inspectable script from an unknown operator | Tyler | Post setup.sh as public gist, link in FAQ |
| Y3 | No project confidentiality tier in intake schema — NDA projects have no AI handling rules | Marcus, Priya | Add `confidentiality` field or auto-detect from "NDA"/"Confidential" in project description |
| Y4 | "3 spots remaining" scarcity has no date anchor — unverifiable, looks manufactured | Marcus | Add "as of [date]" qualifier or remove |
| Y5 | No founder-specific routing branches (HAS_INVESTORS, HAS_SQUADS) — founder output is shorter than consultant demo | Tyler | Add role-based conditional blocks to CLAUDE.md template |

### Adversarial findings (from Chaos agent)

**Chaos score: 8/10** — product idea defensible but launches with 3 screenshottable trust killers.

| Finding | Addressed? | Action |
|---------|-----------|--------|
| Core hypothesis: users pay $197 for a config file they could write themselves | Partially | Lead with the system (vault structure, heartbeat, voice pipeline), not the file |
| Kill-the-company: "CustomGPT gives coaches a trained AI in 20 min, starts free" | No | Add competitive one-liners to FAQ or positioning section |
| Trust cliff: FAQ onboarding call + no real Stripe link = "vaporware" accusation | No | R2 + R3 fixes address this directly |
| Day-1 failure: user pastes CLAUDE.md into Claude, vault files not attached, "doesn't work" | No | Fix delivery email with 3-step "before you open Claude" checklist |
| Riskiest assumption: target users actively use Claude Code daily | Unvalidated | Accepted risk for launch; validate post-launch with intake data |
| Pricing: "feels like a text file" on first open | No | Show CLAUDE.md sample on landing page before purchase |

---

## Loop Criteria Check — Iteration 1

- [ ] Conversion: 0/4 (need 3/4) — FAIL
- [ ] R1: Stripe placeholder — user action needed
- [ ] R2: FAQ onboarding call copy — needs fix
- [ ] R3: Empty testimonials — needs fix
- [ ] R4: setup.sh / terminal claim — needs fix
- [ ] R5: PRIMARY_PROJECT routing bug — needs fix
- [ ] R6: Privacy tier contradiction — needs fix
- [ ] LOOP_CRITERIA hard stops: R1 (Stripe) and R3 (testimonials Cal.com link) unresolved

---

## Fix plan — Iteration 1

Two parallel fix agents dispatched:
1. **Copy fixes** — R2, R3, R4, R6 (landing page + delivery email)
2. **Template fixes** — R5 + Y3 + Y5 (fill-template.sh + CLAUDE.md template)
