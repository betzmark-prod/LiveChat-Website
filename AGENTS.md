<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# LiveChat Website Codebase Guide & Agent Instructions

This document serves as the operational manual for any AI agent or developer interacting with the LiveChat `website` codebase. It details the architecture, conventions, and strict protocols required to maintain system integrity.

**CRITICAL DIRECTIVE:** Before making any modifications, you must read and understand this document.

---

## 1. Architectural Overview

The website is a **Next.js App Router** application. It serves as the admin dashboard and public marketing surface for the LiveChat SaaS product.

### Directory Structure

```text
website/
├── app/                  # Next.js App Router — all routes live here
│   ├── layout.js         # Root layout (fonts, global providers, metadata)
│   ├── page.js           # Landing page
│   └── (routes)/         # Feature-grouped route segments
├── components/           # Shared React components
├── lib/                  # Utility functions, API clients, auth helpers
├── public/               # Static assets served at root
├── next.config.js        # Next.js configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

---

## 2. System Context & Integration Points

The website integrates with the backend API (`api.livechat.io`) and must respect the following contracts:

### Backend API

- Base URL is configured via an environment variable (e.g., `NEXT_PUBLIC_API_URL`).
- All admin-facing API calls use JWT access tokens (from the `ACCESS` token type).
- Token refresh uses the `REFRESH` token type. Do not use `SESSION_TOKEN` — that type is reserved exclusively for the embeddable widget.

### Widget Embed (for demo/preview pages)

- Widget is embedded via `<script src="${WIDGET_URL}/loader.js?siteId=..."></script>`.
- The loader script handles all bootstrap, token issuance, and iframe lifecycle.
- The website must never attempt to manage the widget session directly — that is entirely the loader's responsibility.
- Do not pass or expose `siteId` secrets in client-rendered pages; the siteId is a public tenant identifier, but sensitive config (API keys, JWT secrets) must never appear in the browser.

---

## 3. Coding Standards & Conventions

- **Routing:** Use the App Router (`app/` directory) exclusively. Do not create files in `pages/`. Server Components are the default — opt into `"use client"` only when browser APIs or React hooks are required.
- **Data Fetching:** Use React Server Components + `fetch` with Next.js cache directives for server-side data. Use SWR or React Query for client-side live data.
- **Styling:** Tailwind CSS utility classes. Avoid inline styles. Use `cn()` (clsx + tailwind-merge) for conditional class composition.
- **Environment Variables:** Public variables must be prefixed with `NEXT_PUBLIC_`. Server-only secrets must NOT be prefixed (they will be excluded from the client bundle by Next.js).
- **Error Boundaries:** Use `error.js` and `not-found.js` App Router conventions for error handling at the route level.

---

## 4. Security Constraints

- **Never expose** backend JWT secrets, database URLs, or AWS credentials in any client component or public env var.
- **CSP:** If a Content Security Policy is configured in `next.config.js`, ensure the `frame-src` directive permits the widget's `WIDGET_URL` origin so the iframe can load.
- **CORS:** The website itself does not serve CORS-sensitive endpoints. API calls from the browser go directly to the backend API, which handles its own CORS policy.

---

## 5. Agent Workflow Directives

- **No pages/ directory:** Always use the App Router. Creating files in `pages/` will conflict with App Router layouts.
- **Server vs. Client boundary:** Do not import server-only modules (e.g., `fs`, `path`, Prisma) into `"use client"` components. Use Server Actions or API route handlers to bridge the boundary.
- **No hardcoded URLs:** All API base URLs and widget URLs must come from environment variables.
