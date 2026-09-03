# Gapura Kencana bilingual deployment

The project now has separate SEO-friendly Indonesian and English routes:

- `/`
- `/about/`
- `/services/`
- `/facilities/`
- `/customers/`
- `/contact/`
- `/en/`
- `/en/about/`
- `/en/services/`
- `/en/facilities/`
- `/en/customers/`
- `/en/contact/`

Set `NEXT_PUBLIC_SITE_URL` to the real production domain before building. The value is used by metadata, sitemap and robots generation.

Build:

```bash
npm install
npm run build
```

The project uses `output: 'export'`, so the generated static site is placed in `out/`.
