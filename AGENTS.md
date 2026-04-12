# AGENTS.md

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
