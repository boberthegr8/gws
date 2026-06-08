# GWS — Great White Streams

A dark, ocean-themed landing site for **Great White Streams**, plus a private
admin backend to manage your Hush and Pure Vision members, trials, messages,
and a live updates panel.

Built with **Next.js 14** (App Router) + **Prisma**. Designed to deploy on
**Vercel** with GitHub.

---

## What's in here

**Public site**

- `/` — landing page: shark hero, features, "Install Hush" / "Fix TiviMate"
  tiles, live Updates panel (Hush + Pure Vision), free-trial form, contact form.
- `/install` — step-by-step Install Hush + Fix TiviMate guide (placeholder
  steps you can edit freely).

**Admin backend** (`/admin`, password-protected)

- **Users** — add / edit / delete members (service, plan, status, expiry, notes).
- **Trials** — every trial request from the site, with status tracking
  (new → sent → converted / declined).
- **Messages** — every contact-form message, reply links, mark handled.
- **Updates** — post Hush updates (relayed from Circle) and Pure Vision updates;
  Pure Vision also syncs automatically from Telegram.

**Integrations**

- **Email** — trial + contact submissions are emailed to you (via Resend) and
  saved to the dashboard.
- **Telegram** — Pure Vision channel posts auto-sync into the Updates panel.
- **Circle (Hush)** — Circle has no public API, so Hush updates are posted from
  the admin Updates tab (takes ~10 seconds).

---

## The short fill-in list

These are the only values that are specific to you. Set them in your `.env`
locally and in **Vercel → Settings → Environment Variables** for production.

| Variable | What it's for | Required? |
|---|---|---|
| `ADMIN_PASSWORD` | Your password for `/admin` | **Yes** |
| `SESSION_SECRET` | Any long random string (signs the login cookie) | **Yes** |
| `CONTACT_EMAIL` | Where trial + contact emails are delivered | **Yes** |
| `DATABASE_URL` | SQLite locally; Postgres on Vercel (see below) | **Yes** |
| `RESEND_API_KEY` | Enables outgoing email (free at resend.com) | Recommended |
| `RESEND_FROM` | The "from" address for emails | If using Resend |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather | For PV auto-updates |
| `TELEGRAM_PUREVISION_CHAT` | Your PV channel, e.g. `@yourchannel` | For PV auto-updates |
| `NEXT_PUBLIC_TELEGRAM_CHAT_URL` | Public Telegram chat link (button on site) | Optional |

> If you skip Resend, forms still work — submissions are saved to the admin
> dashboard, they just won't also be emailed. If you skip Telegram, the Pure
> Vision feed just shows whatever you post manually.

---

## Run it locally

```bash
cp .env.example .env        # then fill in the values above
npm install
npm run db:push             # creates the local SQLite database
npm run db:seed             # optional: adds a couple of demo rows
npm run dev                 # http://localhost:3000  (admin at /admin)
```

Quick source check (no DB/network needed):

```bash
node swccheck.mjs
```

---

## Deploy to Vercel (with GitHub)

Vercel's serverless filesystem is read-only, so **SQLite won't work in
production** — use a free hosted Postgres. The easiest is Neon or Vercel
Postgres.

**1. Switch Prisma to Postgres.** In `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"   // was "sqlite"
  url      = env("DATABASE_URL")
}
```

**2. Push to GitHub.**

```bash
git init
git add .
git commit -m "GWS site"
git branch -M main
git remote add origin https://github.com/<you>/gws-site.git
git push -u origin main
```

**3. Import into Vercel.** New Project → import the repo. Framework is
auto-detected as Next.js.

**4. Add a database.** In Vercel → Storage, create a Postgres database (or paste
a Neon connection string). Make sure `DATABASE_URL` is set.

**5. Add the env vars** from the table above in Vercel → Settings →
Environment Variables.

**6. Create the tables once** (from your machine, pointed at the prod DB):

```bash
DATABASE_URL="<your-postgres-url>" npx prisma db push
```

**7. Deploy.** Vercel builds on every push to `main`.

> Note: the production build runs `prisma generate`, which downloads Prisma's
> query engine from `binaries.prisma.sh`. Vercel allows this; some locked-down
> sandboxes don't.

---

## Setting up the integrations

**Resend (email)** — sign up at resend.com, create an API key, set
`RESEND_API_KEY`. Verify a sending domain (or use the test `onboarding@resend.dev`
sender for `RESEND_FROM` while testing).

**Telegram (Pure Vision updates)**

1. Message **@BotFather**, run `/newbot`, copy the token → `TELEGRAM_BOT_TOKEN`.
2. Add the bot to your Pure Vision channel **as an admin**.
3. Set `TELEGRAM_PUREVISION_CHAT` to `@yourchannel` (or the numeric `-100…` id
   for a private channel).

New channel posts then appear in the site's Pure Vision feed automatically
(synced on page load and on each admin refresh). For a high-volume channel you
can later move from polling to a Telegram webhook — the sync code lives in
`lib/telegram.js`.

**Circle (Hush updates)** — Circle exposes no public API, so when you get a Hush
update in Circle, paste it into the admin **Updates** tab (source = Hush). It
shows up in the Hush feed instantly.

---

## Customizing

- **Shark / branding:** `components/Shark.jsx` (hero art) and
  `components/FinLogo.jsx` (logo). Colors live as CSS variables at the top of
  `app/globals.css`.
- **Copy & sections:** `app/page.jsx`.
- **Install / TiviMate steps:** `app/install/page.jsx` (replace the
  `[Placeholder]` text with your real instructions and links).
- **The "Install Hush" buttons** currently point to `/install`. Repoint them to
  an external URL or file any time.

---

## Project structure

```
app/
  page.jsx                 landing page
  install/page.jsx         install + TiviMate guide
  admin/                   admin dashboard (login-gated)
  api/                     contact, trial, auth, users, updates, trials, messages
components/                Nav, Footer, Shark, FinLogo, forms, admin UI
lib/                       db (Prisma), auth, email (Resend), telegram
prisma/                    schema + seed
```
