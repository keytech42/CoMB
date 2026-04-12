# AGENTS.md

<!-- CLAUDE.md is a symlink to this file. Always edit AGENTS.md, never CLAUDE.md directly. -->

Project-level instructions for AI coding agents working on this repository.

## Project Overview

CoMB (Co-adaptation of My Brain) is a personal knowledge base built with
[Astro Starlight](https://starlight.astro.build/), deployed on Cloudflare Pages.
Topics: Mathematics, Computer Science, AI/ML, Developer Experience.

## Critical Rules

### 1. Build Verification

**Always run `npm run build` before committing content or config changes.**
A successful build is the minimum bar — never commit code that breaks the site.
Mermaid diagrams require Playwright (`npx playwright install chromium`).

### 2. Factual Accuracy

False positives (incorrect information presented as fact) are the worst outcome.
When writing or modifying content:
- Verify every formula, algorithm, code example, and technical claim.
- If uncertain, mark the file as `draft: true` rather than publishing incorrect content.
- AI-generated content must be reviewed before committing.

### 3. Draft Convention

- Files in `__draft__/` subdirectories are gitignored (`src/content/**/__draft__/`).
- Use `draft: true` in frontmatter for tracked files that are not yet ready.
- When a file passes review and is ready to publish, remove `draft: true`.
- Committing a file as "publish-ready" while keeping `draft: true` is a contradiction — always check.

### 4. Language Convention

| Context | Language |
|---|---|
| Content body (articles, explanations) | Korean or English (author's choice) |
| Code comments, commit messages, branch names, PR titles, config annotations | **English only** |
| Conversation with the user | Korean |

### 5. Git Workflow

- Commit messages follow conventional commits: `feat:`, `fix:`, `chore:`, `cnt:` (content), etc.
- Do not commit files that may contain secrets (`.env`, credentials).
- `git config core.ignorecase false` is required (see README).

### 6. Branch Strategy (trunk-based)

`main` is the single long-lived branch. Cloudflare Pages deploys from `main`.

**When to branch vs. commit directly to main:**

| Situation | Action |
|---|---|
| Quick edit, 1–2 commits expected | Commit directly to `main` |
| Long authoring, 3+ commits expected | `content/<slug>` branch → squash merge |
| Infrastructure / config / plugin change | `feat/<name>` branch → merge to `main` |
| Bug fix | `fix/<name>` branch → merge to `main` |

**Branch naming:** English, lowercase, hyphen-separated.

**Merge policy:**
- `content/*` → squash merge (clean single commit on main)
- `feat/*`, `fix/*` → regular merge or squash, at discretion
- Delete branch after merge

**Draft lifecycle (three stages):**
1. `__draft__/` — idea stage, gitignored, local only
2. `draft: true` on `main` or a branch — tracked, pushed, not rendered on site
3. Remove `draft: true` — published

Branches and drafts solve different problems: branches isolate incomplete
*code changes* from main; drafts isolate incomplete *content* from the live site.

## Project Structure

```
src/content/docs/
├── 01--math/          # Mathematics (algebra, calculus, linear algebra, statistics, category theory)
├── 02--CSE/           # Computer Science (DSA, OS, prog lang, RegEx, web)
├── 03--AI/            # AI/ML (fundamentals, RL, model arch, CV, NLP)
├── 04--DX/            # Developer Experience (git, cheatsheet, env setup)
└── guides/            # Site guides and notation conventions
```

Sidebar topics are configured in `astro.config.mjs` via `starlightSidebarTopics`.

## Dev Environment

```shell
npm install                         # install dependencies
npx playwright install chromium     # required for Mermaid diagram rendering
npm run dev                         # start dev server (localhost:4321)
npm run build                       # production build to ./dist/
```
