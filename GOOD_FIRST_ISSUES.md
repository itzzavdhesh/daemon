# Good First Issues for Daemon

Use this list to create beginner-friendly GitHub issues for GSSoC and regular contributors. Each issue is specific, scoped, and connected to the current Daemon roadmap.

## 1. Add Form Validation Error Messages To Login And Register

**Description:** Improve the login and register forms by showing clear validation messages before submitting invalid input. The register page should explain password length and password mismatch errors in a friendly way.

**Files to look at:** `client/app/login/page.tsx`, `client/app/register/page.tsx`

**Hints:** Reuse the existing `error` state. Validate email format and password length on the client before calling the API.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 2. Add A 404 Not Found Page

**Description:** Create a custom Not Found page that matches Daemon's dark theme. It should include a short message and a button back to the homepage.

**Files to look at:** `client/app/not-found.tsx`, `client/app/globals.css`

**Hints:** Next.js App Router supports a root `not-found.tsx` file. Keep the design consistent with the landing page.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 3. Add A Logout Button To The Dashboard

**Description:** Add a logout button to the dashboard header that calls the backend logout endpoint and redirects users to the login page. This completes the current auth flow from the user interface.

**Files to look at:** `client/app/dashboard/page.tsx`, `client/lib/api.ts`, `server/src/routes/auth.ts`

**Hints:** Because the dashboard is a server component, create a small client component for the logout action.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 4. Add Loading State Text To Login And Register Buttons

**Description:** The auth pages already track submit state, but the interaction can be made more polished. Improve disabled button styling and ensure users cannot submit forms twice while a request is in progress.

**Files to look at:** `client/app/login/page.tsx`, `client/app/register/page.tsx`

**Hints:** Check the existing `isSubmitting` state and make button text, disabled state, and error clearing consistent.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 5. Add A Dashboard Empty State For Projects

**Description:** Add an empty state section on the dashboard for users who do not have projects yet. The empty state should invite users to create their first state machine.

**Files to look at:** `client/app/dashboard/page.tsx`

**Hints:** Use the existing panel style. This issue does not need to implement project creation.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 6. Add Node Count Badge To Project Cards

**Description:** When project cards are added, each card should display how many nodes are stored in the project's canvas JSON. This helps users scan project complexity quickly.

**Files to look at:** `client/app/dashboard/page.tsx`, `server/src/routes/projects.ts`

**Hints:** Count nodes defensively because `canvas_json` may be empty. A helper function can return `0` when nodes are missing.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 7. Add Confirm Dialog Before Deleting A Project

**Description:** Add a confirmation step before a user deletes a project. The dialog should clearly show that deletion is permanent.

**Files to look at:** `client/app/dashboard/page.tsx`, `server/src/routes/projects.ts`

**Hints:** Start with the browser `confirm()` API for a simple first version. A custom modal can be a follow-up issue.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 8. Add A Loading Skeleton To Dashboard Project List

**Description:** Add a simple loading skeleton for the dashboard project list so the page feels responsive while data is loading. The skeleton should match the dark theme.

**Files to look at:** `client/app/dashboard/page.tsx`, `client/app/globals.css`

**Hints:** If project fetching becomes client-side, place the skeleton in the component that loads projects. Keep layout dimensions stable.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 9. Add Tooltip Text To Canvas Toolbar Buttons

**Description:** Future canvas toolbar buttons should have accessible tooltip text explaining their actions. Add a reusable tooltip component or simple title-based tooltip pattern for toolbar controls.

**Files to look at:** `client/app`, `client/lib`

**Hints:** Keep the first version lightweight. Native `title` attributes are acceptable if no custom toolbar exists yet.

**Labels:** `good first issue`, `area: frontend`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 10. Add Keyboard Shortcut Cheatsheet Modal

**Description:** Add a modal that lists planned editor shortcuts such as delete selected node, save project, zoom in, zoom out, and fit view. This gives contributors a foundation for keyboard UX.

**Files to look at:** `client/app/dashboard/page.tsx`, `client/app`

**Hints:** Use a client component for open and close state. Keep the modal accessible with a close button and keyboard focus.

**Labels:** `good first issue`, `area: frontend`, `level: medium`, `GSSoC`

**Difficulty:** medium

## 11. Add A Canvas Minimap Toggle Button

**Description:** When the ReactFlow canvas is introduced, add a button that toggles the minimap on and off. This helps users with larger state machines.

**Files to look at:** `client/app`, future canvas editor components

**Hints:** ReactFlow has a `MiniMap` component. Store toggle state in the canvas editor component.

**Labels:** `good first issue`, `area: frontend`, `level: medium`, `GSSoC`

**Difficulty:** medium

## 12. Add Copy Button To Code Preview Modal

**Description:** Add a copy-to-clipboard button for generated code previews. Users should see a short success state after copying.

**Files to look at:** future code preview components, `client/lib`

**Hints:** Use `navigator.clipboard.writeText`. Handle failures by showing a friendly error message.

**Labels:** `good first issue`, `area: frontend`, `area: compiler`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 13. Write Unit Tests For Basic Graph Validator Rules

**Description:** Add tests for graph validation rules such as missing start state, duplicate state names, and transitions pointing to unknown nodes. These tests will protect the compiler pipeline.

**Files to look at:** future validator files, `server/src`, `client/lib`

**Hints:** Keep test cases small and data-driven. Start with plain objects representing nodes and edges.

**Labels:** `good first issue`, `area: compiler`, `level: medium`, `GSSoC`

**Difficulty:** medium

## 14. Add API Error Response Documentation

**Description:** Document common backend error responses for auth and project endpoints. This helps frontend contributors understand status codes and response shapes.

**Files to look at:** `README.md`, `server/src/routes/auth.ts`, `server/src/routes/projects.ts`

**Hints:** Add a concise table for endpoint, status code, and meaning. Keep examples short.

**Labels:** `good first issue`, `documentation`, `area: docs`, `level: easy`, `GSSoC`

**Difficulty:** easy

## 15. Add Docker Troubleshooting Section To README

**Description:** Add a troubleshooting section for common local setup issues such as ports already in use, Docker not running, or database volumes needing a reset. This will help new contributors during onboarding.

**Files to look at:** `README.md`, `docker-compose.yml`

**Hints:** Include safe commands for viewing logs and restarting services. Explain when deleting volumes would remove local data.

**Labels:** `good first issue`, `documentation`, `area: docs`, `level: easy`, `GSSoC`

**Difficulty:** easy
