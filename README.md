# Daemon

**Draw logic. Ship code.**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![GSSoC](https://img.shields.io/badge/GSSoC-Open%20Source-F59E0B.svg)](CONTRIBUTING.md#gssoc-contributors)

Daemon is a visual state machine builder for developers who want to design application logic as diagrams and export that logic as working code. Instead of burying flows across files, conditions, and callbacks, Daemon gives you a canvas where states, transitions, guards, and actions can be modeled clearly.

The project is designed for practical engineering workflows: users can create projects, save and reload state machine canvases, validate graph structure, and generate code in JavaScript, TypeScript, or Python. Daemon aims to make complex logic easier to reason about, review, and ship.

Daemon is also an open source learning project. Contributors can work across frontend canvas UX, backend APIs, graph validation, compiler output, documentation, testing, and developer experience.

## Live Demo

[PLACEHOLDER — add your deployed URL here]

## Features

- Canvas builder for visually creating state machines
- Graph validator for detecting invalid or incomplete machine definitions
- Code compiler for JavaScript, TypeScript, and Python exports
- Save and load projects backed by PostgreSQL
- JWT authentication stored in HTTP-only cookies
- Dark and light mode support
- Contributor-friendly architecture using Next.js, Node.js, PostgreSQL, and ReactFlow

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js 14, TypeScript, Tailwind CSS, ReactFlow |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL 15 |
| Auth | JWT in HTTP-only cookies |
| Deployment | Docker Compose for local development, deployable to platforms that support Node.js and PostgreSQL |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- Docker Desktop or Docker Engine with Docker Compose
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itzzavdhesh/daemon.git
   cd daemon
   ```

2. Install dependencies:

   ```bash
   npm run install:all
   ```

3. Create environment files:

   ```bash
   cp .env.example .env
   cp server/.env.example server/.env
   ```

4. Start PostgreSQL, backend, and frontend with Docker Compose:

   ```bash
   docker compose up --build
   ```

5. Open the app:

   - Frontend: http://localhost:3000
   - Backend health check: http://localhost:4000/health

### Local Development Without Docker

If PostgreSQL is already running locally, copy `server/.env.example` to `server/.env`, update `DATABASE_URL` if needed, then run:

```bash
npm run dev
```

## Project Structure

```text
daemon/
├── client/                     Next.js frontend application
│   ├── app/                    App Router pages and global styles
│   └── lib/                    Shared frontend utilities such as the API client
├── server/                     Express backend application
│   ├── src/db/                 Database pool, migrations, and migration runner
│   ├── src/middleware/         Express middleware such as JWT authentication
│   ├── src/routes/             Versioned API route handlers
│   └── src/types/              TypeScript declaration extensions
├── .github/                    Issue templates, PR template, labels, and CI
├── docker-compose.yml          Local PostgreSQL, backend, and frontend orchestration
├── package.json                Root workspace scripts
└── README.md                   Project overview and setup guide
```

## Contributing

Contributions are welcome, especially from first-time open source contributors and GSSoC participants. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

Good contributions include bug fixes, UI polish, accessibility improvements, docs, tests, validation rules, compiler output improvements, and small developer-experience upgrades.

## Good First Issues

Beginner-friendly issues are tracked in [GOOD_FIRST_ISSUES.md](GOOD_FIRST_ISSUES.md). Look for issues labeled:

- `good first issue`
- `level: easy`
- `level: medium`
- `GSSoC`

## Roadmap

### v0.1 - Current

- Project scaffold with Next.js frontend and Express backend
- PostgreSQL database schema for users and projects
- JWT authentication with HTTP-only cookies
- Basic landing, login, register, and dashboard pages
- Docker Compose local development setup

### v0.2 - Contributor Foundations

- ReactFlow canvas editor for drawing states and transitions
- Project list and project editor pages
- Graph validator for missing start states, duplicate state names, and invalid transitions
- Google and GitHub OAuth login as a contributor task
- UI polish, loading states, empty states, and accessibility improvements

### v0.3 - Compiler Preview

- JavaScript and TypeScript code generation from validated state machines
- Python code generation support
- Code preview modal with copy and download actions
- Export presets for common runtime styles
- Unit tests for validators and compiler output

### v0.4 - Collaboration And Deployment

- Import and export project JSON
- Version history for saved machines
- Public read-only project sharing
- Hosted demo deployment
- Contributor documentation for advanced compiler tasks

## License

Daemon is licensed under the [MIT License](LICENSE).

## Author

Created and maintained by [Avdhesh Kumar Dadhich](https://github.com/itzzavdhesh).
