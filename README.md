# Next.js 16.3.0-preview.6 — cache warming reproduction

Minimal reproduction for a production-only error that appears on the **first page load** after `next build` + `next start`:

```
Error: Unexpected cache miss after cache warming phase during prerendering.

This is likely caused by non-deterministic arguments that differ between the cache warming phase and the final prerender phase (e.g. unstable array order).

Ensure that arguments passed to cached functions are deterministic.
```

The build succeeds. The app otherwise works normally. The error only shows once, on the first request to `/` after starting the production server.


## Reproduce

```bash
bun install
bun run build
bun run start
```

Open [http://localhost:3000](http://localhost:3000) (or refresh once). The error appears in the server terminal on that first load.

