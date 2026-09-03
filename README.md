# SO Works Agent Series site

Public product and release-roadmap site for SO Works local-first OSS tools.

Published URLs:

- English: https://soworks.app/
- Japanese: https://soworks.app/ja/
- GitHub Pages fallback: https://soworks-jp.github.io/

## Site role

This site explains the complete SO Works Agent Series before every repository is public. It should help a developer understand the architecture, choose the project that maps to a current bottleneck, preview representative product surfaces, and see which OSS releases are planned without implying that private repositories or unpublished packages are already available.

Core public surfaces:

- `/oss/` / `/ja/oss/` — complete 13-project planned OSS release roadmap
- `/agent-workbench/` — multi-agent coordination product preview
- `/agent-token-optimizer/` — repository context-audit product preview
- `/agent-persona/` — persona-guided review product preview
- `/agent-human-memory/` — controlled memory research preview
- `/compare/` — decision-oriented comparison across all 13 planned projects

Agent Skill Shelf and Agent Fusion Skill also have preview pages. AI Product Manager, Agent Task Router, Agent Handoff Kit, Agent Reporting, Agent Machine Doctor, Agent Security Doctor, and Agent Channel Bridge appear in the complete roadmap before dedicated public landing pages are finished.

## Release-status rule

All 13 catalog projects are planned for public OSS release, but the site must not imply they are already publicly available.

Until a project is genuinely public:

- show **Planned OSS release**,
- do not expose private repository URLs,
- do not publish installation commands that depend on unpublished packages,
- do not advertise private pilot, research, waitlist, or pre-release coordination,
- use synthetic/sanitized previews only.

When a repository/package becomes public, update `_data/oss_catalog.yml` and the relevant product page in the same PR.

## Private pre-release boundary

Evaluation, research, design-partner work, and pre-release coordination may continue internally, but they are intentionally not a public-site acquisition surface while most repositories remain private. Public recruitment should be introduced only when the relevant project is ready to receive external users without exposing private infrastructure or creating dead-end links.

## Language architecture

English and Japanese are explicit first-class surfaces rather than an automatic browser redirect. `_data/translations.yml` maps equivalent pages, the header exposes an EN / 日本語 switch, and the head emits `hreflang` alternates for search engines.

Major Agent Series product, comparison, roadmap, and home pages should have an English/Japanese pair before they are added to the translation map.

## Motion / interaction boundary

The technical visual layer is progressive enhancement:

- `assets/motion.scss` provides ambient grid motion, agent-pipeline pulses, card/button feedback, and language-switch styling.
- `assets/roadmap.scss` provides the complete release-roadmap cards and status surfaces.
- `assets/interactions.js` adds scroll reveal, pointer-responsive hero glow, and the decorative agent pipeline.
- Core copy, links, and language switching must still work without JavaScript.
- `prefers-reduced-motion` disables nonessential motion.
- Avoid heavy WebGL, scroll hijacking, or animation that competes with reading.

Micro-interactions should explain the product model—routing, context flow, review, memory—not act as decoration alone.

## Growth rule

For now, optimize the public site for **portfolio comprehension and release credibility**, not sign-ups. Showing all 13 planned releases is useful because it communicates the architecture. Proof, case studies, and public acquisition flows should be added later from releases that are actually open to external users.

## Local / CI validation

The repository uses GitHub Pages/Jekyll. `.github/workflows/site-check.yml` builds the site on pull requests, syntax-checks the interaction script, validates English/Japanese growth and roadmap pages, verifies language metadata/switching, confirms generated growth/motion/roadmap assets, checks that all 13 planned releases render, and fails if known recruitment/private-repository patterns return to public pages.

Keep public pages free of private repository URLs, local paths, secrets, customer data, raw prompts/logs, sensitive memory content, and other non-public operational details.
