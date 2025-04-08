# Project Tasks & Roadmap

This file tracks all major tasks, features, and improvements for the Creator Share Tanzania platform.

---

## How to Use This File

- **Add a new task:** Under the relevant section, add a new row with status 🟢 To Do.
- **Start a task:** Change its status to 🟡 In Progress and add your name/date in Notes.
- **Complete a task:** Change status to ✅ Done, add completion date in Notes.
- **Update regularly:** Keep this file current to reflect project status.
- **Commit updates:** Always commit this file along with related code changes.

---

## Legend

| Status         | Description                        |
|----------------|------------------------------------|
| 🟢 To Do       | Planned, not yet started           |
| 🟡 In Progress | Currently being worked on          |
| ✅ Done        | Completed                          |

---

## Initial Setup

| Task                                              | Status        | Notes                                  |
|---------------------------------------------------|---------------|----------------------------------------|
| Initialize Next.js project with TypeScript        | ✅ Done        |                                        |
| Setup Tailwind CSS                                | ✅ Done        |                                        |
| Configure ESLint + Prettier                       | ✅ Done        |                                        |
| Setup Supabase project                            | ✅ Done        | Completed 2025-04-07                   |
| Integrate Supabase Auth                           | ✅ Done        | Completed 2025-04-07                   |
| Setup environment variables                       | ✅ Done        | Completed 2025-04-07                   |
| Configure Supabase migrations                     | ✅ Done        | Completed 2025-04-07                   |
| Setup CI pipeline (GitHub Actions)                | ✅ Done        | Completed 2025-04-07                   |

---

## Core Features

| Task                                              | Status        | Notes                                  |
|---------------------------------------------------|---------------|----------------------------------------|
| Child sponsorship listing                         | ✅ Done        | Display children available for sponsorship, completed 2025-04-07 |
| Fix styles on sponsorship listing                 | 🟡 In Progress | Started 2025-04-07                       |
| Sponsorship checkout & payment integration        | 🟢 To Do       |                                        |
| Content pages (About, Contact, FAQ)              | 🟢 To Do       |                                        |

---

## UI/UX Improvements

| Task                                              | Status        | Notes                                  |
|---------------------------------------------------|---------------|----------------------------------------|
| Responsive design                                 | 🟢 To Do       | Mobile-first                           |

---

## Infrastructure & Tooling

| Task                                              | Status        | Notes                                  |
|---------------------------------------------------|---------------|----------------------------------------|
| Setup Jest & React Testing Library                | 🟢 To Do       |                                        |
| Add Prettier formatting checks                    | 🟢 To Do       |                                        |

---

## Documentation

| Task                                              | Status        | Notes                                  |
|---------------------------------------------------|---------------|----------------------------------------|
| Update `README.md`                                | 🟢 To Do       | Overview, setup, contribution          |
| Maintain `PLANNING.md`                            | 🟢 To Do       | Architecture, goals                    |
| Maintain `DEVELOPMENT.md`                         | ✅ Done        | Process, guidelines                    |
| Create onboarding guide                           | 🟢 To Do       | For new contributors                   |

---

---

## Discovered During Work

| Date       | Description                                         | Status        | Notes                     |
|------------|-----------------------------------------------------|---------------|---------------------------|
|            |                                                     |               |                           |

---

## Testing Policies

- Use **Jest** and **React Testing Library** for unit and integration tests.
- Cover success, edge, and failure cases.
- Mock external services (Supabase, payment APIs).
- Place tests alongside components or in `/tests`.
- Tests must pass before merging pull requests.
- Integrate tests with CI pipeline.
- Avoid real secrets in tests; use mocks or env vars.

---

_Update this file regularly to track progress and plan new work._