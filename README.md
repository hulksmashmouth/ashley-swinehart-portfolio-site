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

## Deploy (Render)

The repo ships a multi-stage `Dockerfile` that builds the static site and serves
it with nginx. `render.yaml` defines a Docker web service, so on Render:

1. New → Web Service → connect this repo.
2. Render reads `render.yaml` (runtime: docker). No build/start command needed.
3. Render injects `PORT`; nginx picks it up via `nginx.conf.template`.

`nginx.conf.template` includes an SPA fallback so client-side routes resolve on
hard refresh.
