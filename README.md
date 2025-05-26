# Mock Blog

A modern blog application built with Next.js, React, and Tailwind CSS.
Online Demo [here](https://next-blog-test-lime.vercel.app/).

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

After to started the project

```bash
yarn install
yarn dev
```

In the browser go to:

```bash
http://localhost:3000/
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
    <!-- UI components -->
  user/
models/
  authors/
  posts/
node_modules/
public/
types/
utils/
  <!-- Utils files -->
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

## API

The project uses Vercel cache(1h), to clear the cache I created a route to revalidate and clear the cache.

**Base URL**: https://jsonplaceholder.typicode.com
**URL to revalidate cache**: /api/cache-revalidate?tag=posts&key=SUA_CHAVE

## Env variables

<!-- Time to revalidate cache. Default 3600(1h) -->

NEXT_PUBLIC_API_REVALIDATE=

<!-- Key to avoid wrong access -->

NEXT_PUBLIC_CACHE_REVALIDATE_KEY=SUA_CHAVE
