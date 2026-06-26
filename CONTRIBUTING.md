# Contributing to Daemon

Thank you for your interest in contributing to Daemon. First-time contributors are very welcome here. If you are learning open source, TypeScript, React, backend APIs, databases, testing, or documentation, this project has tasks at multiple difficulty levels.

Daemon is a visual state machine builder. Contributions should help make state machine design, validation, export, and project management clearer and more reliable.

## Types of Contributions Welcome

- Code changes for frontend, backend, compiler, validation, and developer tooling
- Documentation improvements, examples, diagrams, and setup help
- Bug reports with clear reproduction steps
- Feature ideas that improve state machine editing or exporting
- Tests for graph validation, API behavior, and compiler output
- UI and accessibility improvements

## Prerequisites

- Git and GitHub account
- Node.js 20 or newer
- npm
- Docker Desktop or Docker Engine with Docker Compose
- Basic familiarity with TypeScript is helpful for code contributions

## Contribution Workflow

1. Fork the repository on GitHub.

2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/daemon.git
   cd daemon
   ```

3. Add the upstream repository:

   ```bash
   git remote add upstream https://github.com/itzzavdhesh/daemon.git
   ```

4. Install dependencies:

   ```bash
   npm run install:all
   ```

5. Create environment files:

   ```bash
   cp .env.example .env
   cp server/.env.example server/.env
   ```

6. Start the app:

   ```bash
   docker compose up --build
   ```

7. Create a branch:

   ```bash
   git checkout -b feature/short-description
   ```

8. Make your changes in a focused way. Keep pull requests small enough to review comfortably.

9. Test your changes locally:

   ```bash
   npm run build
   ```

10. Commit your changes:

   ```bash
   git add .
   git commit -m "feat: add project card node count"
   ```

11. Push your branch:

   ```bash
   git push origin feature/short-description
   ```

12. Open a pull request against the main repository.

## Commit Message Format

Use clear, conventional prefixes:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation-only changes
- `style:` for formatting or visual changes that do not alter behavior
- `refactor:` for code restructuring without behavior changes
- `test:` for adding or updating tests

Examples:

```text
feat: add minimap toggle to canvas toolbar
fix: show validation error for short passwords
docs: add Docker troubleshooting guide
test: add graph validator cycle tests
```

## Branch Naming

Use one of these prefixes:

- `feature/` for new functionality
- `fix/` for bug fixes
- `docs/` for documentation changes

Examples:

```text
feature/canvas-minimap-toggle
fix/login-validation-message
docs/gssoc-setup-guide
```

## Pull Request Guidelines

Every pull request should include:

- A clear description of what changed
- The issue it closes, using `Closes #123` when applicable
- Steps you used to test the change
- Screenshots or screen recordings for UI changes
- Notes about any tradeoffs or follow-up work

Keep PRs scoped to one issue whenever possible. Large PRs are harder to review and may be asked to split into smaller changes.

## Code Style Guide

- Use TypeScript for frontend and backend code.
- Prefer descriptive names such as `projectId`, `canvasJson`, and `validateGraph`.
- Use PascalCase for React components.
- Use camelCase for variables and functions.
- Keep route handlers in `server/src/routes`.
- Keep Express middleware in `server/src/middleware`.
- Keep frontend utilities in `client/lib`.
- Avoid unrelated refactors in feature PRs.
- Do not commit secrets, `.env` files, build output, or dependency folders.

## Issue Label Guide

- `good first issue`: Suitable for new contributors
- `help wanted`: Maintainers would like community help
- `bug`: Something is broken or behaving incorrectly
- `enhancement`: New feature or improvement
- `documentation`: Docs-only work
- `area: frontend`: Canvas, UI, React, or Next.js work
- `area: backend`: Express API, database, auth, or server work
- `area: compiler`: Code generation or graph validation work
- `area: docs`: README, guides, templates, or community files
- `level: easy`: Basic knowledge needed
- `level: medium`: Some experience needed
- `level: hard`: Advanced knowledge needed
- `GSSoC`: Tracked for GirlScript Summer of Code
- `duplicate`: Already reported or implemented
- `wontfix`: Not planned

## GSSoC Contributors

Daemon welcomes GSSoC contributors. To participate effectively:

- Comment on an open issue and ask to be assigned before starting work.
- Wait for a maintainer assignment before opening a PR.
- Work only on one assigned issue at a time unless a maintainer approves otherwise.
- Keep communication on the issue and PR so mentors can track progress.
- Submit your PR within the timeline mentioned by the maintainer.

GSSoC points are typically awarded by program rules based on issue difficulty, PR quality, and whether the PR is merged. Maintainers may label issues as `level: easy`, `level: medium`, or `level: hard`, but the final scoring policy follows official GSSoC guidelines.

## Getting Help

If you are stuck:

- Read the issue description and related files carefully.
- Share what you tried and what error you saw.
- Ask concise questions in the GitHub issue.
- For PR review feedback, reply on the specific review thread after making changes.

Clear communication is part of good open source contribution. You do not need to know everything before you start.
