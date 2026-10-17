# Jasper public website

Static Cloudflare Pages site for `jasper.willsabol.com`. It has no runtime, database, authentication, analytics, or connection to the Jasper application.

## Local build

```sh
CONTACT_EMAIL=hello@example.com npm run build
```

The generated site is written to `dist/`. `CONTACT_EMAIL` is substituted into the homepage, privacy policy, and terms. Set it to a monitored address before deployment; the default is the operator's current contact address.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `jasper-site`
- Environment variable: `CONTACT_EMAIL` (set to the monitored public contact address)
- Custom domain: `jasper.willsabol.com`

The `_headers` file adds basic security headers. Verify the three routes after the custom domain is attached:

- `https://jasper.willsabol.com/`
- `https://jasper.willsabol.com/privacy/`
- `https://jasper.willsabol.com/terms/`

The privacy policy reflects the current Family Assistant implementation: Gmail and Calendar access, local SQLite/token storage, and OpenAI API processing for extraction and event matching. Revisit it if those practices change.
