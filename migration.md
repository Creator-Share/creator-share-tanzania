# Migration Plan: Cloning Source Repo & Extracting Home Page

## 1. Clone the original, working repository

From the directory where you want the source repo:

```bash
git clone <source-repo-url> creator-share-source
cd creator-share-source
git checkout d7264ae02f7740e87625d37006d832661729e11a
```

Replace `<source-repo-url>` with the actual URL of the working repository (e.g., GitHub URL or local path).  
This will checkout the **known good commit `d7264ae02f7740e87625d37006d832661729e11a`** as the source snapshot.

---

## 2. Identify the home/landing page components

In the cloned repo (`creator-share-source`):

- The main landing page is typically in:

  ```
  src/app/page.tsx
  ```

- It likely imports **section components** from:

  ```
  src/components/sections/
  ```

  such as `Hero.tsx`, `About.tsx`, `OurWork.tsx`, `Sponsorship.tsx`, `Statistics.tsx`, `WaysToShare.tsx`.

- It also uses **shared components** like `Navigation.tsx`, `Footer.tsx`, `DonorSection.tsx`, etc.

- Global styles are in:

  ```
  src/styles/globals.css
  ```

- The layout wrapper is in:

  ```
  src/app/layout.tsx
  ```

---

## 3. Copy the home page and dependencies

Copy **only** the following from the source repo into your new project:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`
- `src/components/DonorSection.tsx`
- `src/components/sections/` directory (all files)
- `src/styles/globals.css`
- Any **fonts** or **assets** referenced (e.g., images in `public/`)

Overwrite existing files if necessary to ensure **pixel-perfect match**.

---

## 4. Copy configuration files

Copy the following config files from the source repo:

- `tailwind.config.ts`
- `postcss.config.mjs`
- `.gitignore` (optional)
- `tsconfig.json` (merge or replace as needed)

This ensures **Tailwind CSS and other tooling** work identically.

---

## 5. Align dependencies

In your new project's `package.json`, ensure the following match the source repo:

- `@chakra-ui/react`
- `@chakra-ui/next-js`
- `@emotion/react`
- `next`
- `react`
- `tailwindcss`
- `next-themes`
- Any other relevant packages

Run:

```bash
yarn install
```

or

```bash
npm install
```

to update dependencies.

---

## 6. Verify Tailwind and Chakra setup

- The copied `tailwind.config.ts` should include the correct content paths and theme extensions.
- The `globals.css` **must** include:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- The ChakraProvider setup in `src/components/Providers.tsx` (or equivalent) should match the source repo.

---

## 7. Test the landing page

Run the dev server:

```bash
yarn dev
```

Visit the home page (`/`) and verify it **looks identical** to the source repo.

---

## Summary

- **Start from a fresh clone** of the working repo.
- **Copy only the home page and its dependencies** into your new project.
- **Align configs and dependencies** to avoid styling or runtime issues.
- This approach **avoids partial, inconsistent copies** and ensures a pixel-perfect, functional landing page as a solid foundation.

Once this is done, the developer can **incrementally add other features** (like sponsor-a-child) with confidence, knowing the base is stable and consistent.
