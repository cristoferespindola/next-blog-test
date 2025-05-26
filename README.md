# Mock Blog

A modern blog application built with Next.js, React, and Tailwind CSS.
Online Demo [here](https://next-blog-test-lime.vercel.app/).

## 🚀 Technologies Used

- **Next.js 15** (App Router, SSR/ISR)
- **NodeJS 20**
- **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **ESLint & Prettier** (code quality)
- **tailwind-merge** (utility class merging)

## 🛠️ Getting Started

1. Set Node Version
   If you use [nvm](https://github.com/nvm-sh/nvm) :

```bash
nvm use
```

2. Install dependencies and run the project:

```bash
yarn install
yarn dev
```

3. Open in your browser:

```bash
[http://localhost:3000/](http://localhost:3000)
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
    # UI components
  user/
models/
  authors/
  posts/
node_modules/
public/
types/
utils/
  # Utils files
```

- **app/**: Main application folder (Next.js App Router)
- **components/**: Reusable UI and feature components
- **models/**: Data fetching and API logic
- **types/**: TypeScript type definitions
- **utils/**: Utility functions
- **public/**: Static assets

---

## 🔌 API & Caching

This project uses Vercel's cache (1 hour by default).
To manually clear the cache for a specific tag, use the revalidation route:

- **Base API URL**: https://jsonplaceholder.typicode.com
- **Revalidate cache**: `/api/cache-revalidate?tag=posts&key=YOUR_KEY`

## ⚙️ Environment Variables

Create a .env.local file in the root with the following variables:

# Time (in seconds) to revalidate cache. Default: 3600 (1 hour)

NEXT_PUBLIC_API_REVALIDATE=3600

# Key to authorize cache revalidation requests

NEXT_PUBLIC_CACHE_REVALIDATE_KEY=YOUR_KEY
