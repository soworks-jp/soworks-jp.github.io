# SO Works Agent Series site

Public product, release-roadmap, and pilot site for SO Works local-first OSS tools.

Published URLs:

- English: https://soworks.app/
- Japanese: https://soworks.app/ja/
- GitHub Pages fallback: https://soworks-jp.github.io/

## Site role

This site is not only a documentation index. It should help a developer understand the Agent Series, choose the smallest tool for a current bottleneck, see a concrete output, understand what is available versus still being prepared, try a bounded first-value workflow, and join a public pilot or release waitlist.

Core growth surfaces:

- `/oss/` / `/ja/oss/` — complete 13-project planned public OSS release roadmap
- `/agent-workbench/` — multi-agent task coordination and 7-day design-partner pilot
- `/agent-token-optimizer/` — local repository context audit and before/after pilot
- `/agent-persona/` — persona-guided review and 30-minute before/after challenge
- `/agent-human-memory/` — invite-only controlled memory research pilot
- `/compare/` — decision-oriented product comparison
- `/pilot/` — active pilot chooser and privacy boundaries
- public signup / release waitlist — `soworks-jp.github.io#3`

Agent Skill Shelf and Agent Fusion Skill have existing preview pages. AI Product Manager, Agent Task Router, Agent Handoff Kit, Agent Reporting, Agent Machine Doctor, Agent Security Doctor, and Agent Channel Bridge appear in the complete roadmap before their dedicated public landing pages are finished.

Agent Desk is intentionally separate because its current repository is proprietary. Do not count it as OSS unless its licensing status actually changes.

## Release-status rule

All 13 catalog projects are planned for a public OSS release, but the site must not imply they are already publicly available.

Use explicit readiness stages:

- **Pilot now / Research pilot** — bounded external experiments are actively useful now.
- **Preview** — implementation exists; public packaging, docs, or release gates are still being finalized.
- **Planned** — product contract exists and a public OSS release is intended, without a promised launch date.

Private repository URLs must not be presented as public CTAs. Until a repository is publicly accessible, direct visitors to the public site waitlist issue instead.

`_data/oss_catalog.yml` is the source of truth for the public catalog. Update it when a project changes phase or becomes publicly available rather than editing multiple duplicated lists.

## Language architecture

English and Japanese are explicit first-class surfaces rather than an automatic browser redirect. `_data/translations.yml` maps equivalent pages, the header exposes an EN / 日本語 switch, and the head emits `hreflang` alternates for search engines. This keeps URLs stable, lets users choose their language, and avoids surprising redirects from shared links.

Major Agent Series product, comparison, pilot, roadmap, and home pages should have an English/Japanese pair before they are added to the translation map.

## Motion / interaction boundary

The technical visual layer is progressive enhancement:

- `assets/motion.scss` provides ambient grid motion, agent-pipeline pulses, card/button feedback, and language-switch styling.
- `assets/roadmap.scss` provides the complete release-roadmap cards and status surfaces.
- `assets/interactions.js` adds scroll reveal, pointer-responsive hero glow, and the decorative agent pipeline.
- Core copy, links, pilot CTAs, and language switching must still work without JavaScript.
- `prefers-reduced-motion` disables nonessential motion.
- Avoid heavy WebGL, scroll hijacking, or animation that competes with reading and first-value conversion.

Micro-interactions should explain the product model—routing, context flow, review, memory—not act as decoration alone.

## Growth rule

Do not optimize the site for raw project count or generic beta sign-ups. Showing the complete roadmap is useful for portfolio comprehension, but the primary conversion remains a completed first-value experiment or a high-intent release-waitlist opt-in.

## Local / CI validation

The repository uses GitHub Pages/Jekyll. `.github/workflows/site-check.yml` builds the site on pull requests, syntax-checks the interaction script, validates English/Japanese growth and roadmap pages, verifies language metadata/switching, confirms generated growth/motion/roadmap assets, checks that all 13 planned releases render, and blocks known private pilot-Issue URLs from returning to public CTAs.

Keep public pages free of private repository identifiers, local paths, secrets, customer data, raw prompts/logs, and other non-public operational content.