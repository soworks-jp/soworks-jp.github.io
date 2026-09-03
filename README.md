# SO Works Agent Series site

Public product and pilot site for SO Works local-first OSS tools.

Published URLs:

- English: https://soworks.app/
- Japanese: https://soworks.app/ja/
- GitHub Pages fallback: https://soworks-jp.github.io/

## Site role

This site is not only a documentation index. It should help a developer understand the Agent Series, choose the smallest tool for a current bottleneck, see a concrete output, try a bounded first-value workflow, and join a structured pilot.

Core growth surfaces:

- `/agent-workbench/` — multi-agent task coordination and 7-day design-partner pilot
- `/agent-token-optimizer/` — local repository context audit and before/after pilot
- `/agent-persona/` — persona-guided review and 30-minute before/after challenge
- `/agent-human-memory/` — invite-only safe memory research pilot
- `/compare/` — decision-oriented product comparison
- `/pilot/` — active pilot chooser and privacy boundaries
- `/ja/` — Japanese entrypoint
- `/ja/pilot/` — Japanese pilot chooser

Other OSS guides such as Agent Skill Shelf and Fusion Skill remain available as composable building blocks.

## Language architecture

English and Japanese are explicit first-class surfaces rather than an automatic browser redirect. `_data/translations.yml` maps equivalent pages, the header exposes an EN / 日本語 switch, and the head emits `hreflang` alternates for search engines. This keeps URLs stable, lets users choose their language, and avoids surprising redirects from shared links.

Major Agent Series product, comparison, pilot, and home pages should have an English/Japanese pair before they are added to the translation map.

## Motion / interaction boundary

The technical visual layer is progressive enhancement:

- `assets/motion.scss` provides ambient grid motion, agent-pipeline pulses, card/button feedback, and language-switch styling.
- `assets/interactions.js` adds scroll reveal, pointer-responsive hero glow, and the decorative agent pipeline.
- Core copy, links, pilot CTAs, and language switching must still work without JavaScript.
- `prefers-reduced-motion` disables nonessential motion.
- Avoid heavy WebGL, scroll hijacking, or animation that competes with reading and first-value conversion.

Micro-interactions should explain the product model—routing, context flow, review, memory—not act as decoration alone.

## Growth rule

Do not optimize the site for raw project count or generic beta sign-ups. The primary conversion is a completed first-value experiment: a Workbench task loop, repository audit, persona review comparison, or controlled memory research pilot.

## Local / CI validation

The repository uses GitHub Pages/Jekyll. `.github/workflows/site-check.yml` builds the site on pull requests, syntax-checks the interaction script, validates the primary English/Japanese growth pages, verifies language metadata/switching, and confirms generated growth/motion assets before changes reach `main`.

Keep public pages free of private repository names, local paths, secrets, customer data, raw prompts/logs, and sensitive memory content.
