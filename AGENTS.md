# AGENTS.md

## Cursor Cloud specific instructions

This is a React + Vite portfolio website (single-page application, no backend/database).

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Vite dev server | `npm run dev` | 5173 | The only service needed for development |

### Quick reference

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (serves at `http://localhost:5173`)
- **Build:** `npm run build` (outputs to `./dist`)
- **Preview prod build:** `npm run preview`

### Notes

- No test framework is configured (no Jest, Vitest, Playwright, etc.). There are no automated tests to run.
- No linter (ESLint) or formatter (Prettier) is configured. There are no lint scripts in `package.json`.
- No environment variables or secrets are required. All data is static JSON in `src/data/`.
- The admin page uses browser `localStorage` only; no auth service is needed.
- Uses HashRouter (`/#/`) for routing, which is important for GitHub Pages deployment.
