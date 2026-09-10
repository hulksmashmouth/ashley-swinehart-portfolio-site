# ashleyswinehart.com

Personal portfolio site. Vite + React + TypeScript, React Router, CSS Modules.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

- `npm run build` – type-check and produce `dist/`
- `npm run preview` – serve the production build locally
- `npm run lint` – oxlint

## Structure

```
src/
  main.tsx            entry, mounts RouterProvider
  router.tsx          route table
  App.tsx             layout (header / <Outlet/> / footer)
  routes/             one folder-less file + .module.css per page
```

## Deploy (Render static site)

`render.yaml` defines a Render **static site** — no server, no Docker.

1. Render dashboard → **New → Static Site** → connect this repo.
2. Render reads `render.yaml`: build `npm ci && npm run build`, publish `./dist`.
3. The `routes` rewrite (`/* → /index.html`) is the SPA fallback so client-side
   routes survive a hard refresh. Real files (`/assets/*`) are served first.

### Custom domain (ashleyswinehart.com)

In the site's **Settings → Custom Domains**, add both `ashleyswinehart.com` and
`www.ashleyswinehart.com`. Render issues TLS automatically. Then at the DNS host:

- `www` → CNAME → `<site>.onrender.com`
- apex (`ashleyswinehart.com`) → ALIAS/ANAME → `<site>.onrender.com` if the host
  supports it; otherwise move DNS to Cloudflare (free) so the apex CNAME
  flattens, or use Render's apex A records (shown in the dashboard).
