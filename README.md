# Creator Share Tanzania Platform

A web platform to support creators, social impact initiatives, and sponsorship programs in Tanzania. Built with Next.js, Supabase, and Tailwind CSS.

---

## Features

- Showcase children and projects available for sponsorship
- Secure payment integration (planned)
- Responsive, mobile-friendly design
- Built with modern, scalable technologies

---

## Tech Stack

- **Frontend:** Next.js (React + TypeScript)
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Storage)
- **Package Manager:** Yarn
- **Linting:** ESLint + Prettier
- **Testing:** Jest, React Testing Library
- **Hosting:** Vercel

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [Yarn](https://yarnpkg.com/)
- A [Supabase](https://supabase.com/) project with API keys

### Setup

1. **Clone the repository**

```bash
git clone <repo-url>
cd creator-share-tanzania
```

2. **Install dependencies**

```bash
yarn install
```

3. **Configure environment variables**

Create a `.env.local` file with your Supabase credentials and other secrets.

4. **Run the development server**

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Contribution Guidelines

- Follow the development process in [`DEVELOPMENT.md`](./DEVELOPMENT.md)
- Use Yarn for all package management
- Write clean, well-documented, and tested code
- Update [`TASKS.md`](./TASKS.md) with new or completed tasks
- Keep documentation up to date

---

## Project Structure

```
src/
  app/            # Next.js app directory
  components/     # Reusable React components
  styles/         # Global and component styles
  utils/          # Utility functions
  store/          # State management
  types/          # TypeScript types
public/           # Static assets
supabase/         # Database migrations and config
```

---

## License

_To be decided_

---

## Contact

_Maintainer info to be added_