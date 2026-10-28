# CONTENT_REVIEW — items requiring Fabio's sign-off before publication

Status legend: ⏳ pending owner decision · ✅ implemented per spec · 🚫 deliberately withheld

## Deployment target (owner-approved)

- GitHub username: **valenteff** (verified by owner, 27 Oct 2026)
- Repository: **valenteff.github.io** (user site, root base)
- `astro.config.mjs`: `site: 'https://valenteff.github.io'`, `base: '/'` ✅
- **Not yet published.** Awaiting explicit owner authorization for repo creation + push.

## Résumé PDF — sanitized public copy ✅ (review recommended)

Source: `~/Downloads/Fabio_Valente_Pavago_Resume_2026.pdf` → `public/assets/resume/fabio-valente-resume.pdf`
Redactions applied and verified (text-layer + visual check):

| Item | Action |
|------|--------|
| Phone `+57 302 341 3678` (+ separator) | Removed — public PII |
| `Augusto Backes` | Replaced with `Confidential client` |
| SBS bullet: 53% budget reduction / COP 200m | Removed pending verification (incl. orphan bullet cleanup) |

Email and LinkedIn remain visible (intentional contact channels).
⚠️ If you want the original unredacted résumé on the site instead, say so — the redaction script is rerunnable.

## Links

| Link | Status |
|------|--------|
| LinkedIn `fabiofvalente` | ✅ from résumé/spec |
| GitHub `github.com/valenteff` | ✅ owner-verified |
| YouTube `@Fabio_valenteoficial` | ✅ verified live (HTTP 200, channel title "Fabio Valente", canonical handle matches channel ID UCHnKtyznhFTNAhP4Nsdi1-g) |
| og-card.png | ✅ generated 1200×630, truthful branded card (no invented logos/metrics) |
| TradingView / Substack | 🚫 not verified — omitted |

## Evidence assets

| Asset | Status |
|-------|--------|
| `Workflow_Architecture.png` (case study 01) | ✅ included — self-labeled sanitized portfolio abstraction; inspected: no secrets, URLs, credentials, client names, or account data |
| Other case studies (02–04) | Conceptual SVG diagrams + "evidence available upon request" — no publishable sanitized artifacts found locally |

## Still withheld (unchanged)

- 53% / COP 200m SBS savings claim — 🚫 pending verification (also removed from PDF)
- Backes client name on website — 🚫 anonymized ("Ongoing remote contract")
- Approved headshot — FV monogram used instead
- Exact start date of market-analysis contract — "Current contract" only

## Pre-publication gates

1. ~~Secrets scan~~ — ✅ run 27 Oct 2026 (no keys/tokens/private URLs in source or dist)
2. Owner review of final desktop + mobile screenshots (in `qa/final-*.png`)
3. Owner authorization to create `valenteff/valenteff.github.io` repo and push
