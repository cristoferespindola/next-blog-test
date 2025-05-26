# Mock Blog

A modern blog application built with Next.js, React, and Tailwind CSS.

## Technologies Used

- **Next.js 15** (App Router, SSR/ISR)
- **NodeJS 20**
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **ESLint & Prettier** (code quality)
- **tailwind-merge** (utility class merging)

## Getting Started

To use the project node version(see [nvm](https://github.com/nvm-sh/nvm) if need to install)

```bash
nvm use
```

```bash
yarn install
yarn dev
```

## Project Structure

```
app/
  (pages)/
    author/[authorId]/
      loading.tsx
      page.tsx
    post/[postId]/
      page.tsx
      layout.tsx
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
components/
  author/
  blog/
  breadcrumb/
  icons/
  ui/
    grid/
      Grid.tsx
      types.ts
    header/
      Header.tsx
      Intro.tsx
      types.ts
    Container.tsx
    Footer.tsx
    Loader.tsx
    Typography.tsx
  user/
models/
  authors/
  posts/
node_modules/
public/
types/
utils/
  classes.ts
.gitignore
.nvmrc
.prettierrc
.eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
yarn.lock
```

- **app/**: Main application folder (Next.js App Router)
- **components/**: Reusable UI and feature components
- **models/**: Data fetching and API logic
- **types/**: TypeScript type definitions
- **utils/**: Utility functions
- **public/**: Static assets

---
