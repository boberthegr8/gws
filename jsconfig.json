# Launching GWS on Vercel

The site is **built and verified** (every source file compiles). What's left is
getting the code onto Vercel and giving it a database + a few secret values.
This takes about 10 minutes.

---

## Step 1 — Push the code to GitHub

From the `gws-site` folder on your computer:

```bash
git init
git add .
git commit -m "GWS site"
git branch -M main
git remote add origin https://github.com/<your-username>/gws-site.git
git push -u origin main
```

(Create an empty repo named `gws-site` on github.com first — don't add a README,
it'll conflict.)

## Step 2 — Import into Vercel

1. Go to vercel.com → **Add New… → Project**.
2. Pick the `gws-site` repo. Framework auto-detects as **Next.js**. Don't deploy yet.

## Step 3 — Add a Postgres database

The site already targets Postgres (`prisma/schema.prisma`). Easiest options:

- **Vercel → Storage → Create Database → Postgres** (one click, sets `DATABASE_URL`
  for you), **or**
- A free **Neon** database — copy its connection string into `DATABASE_URL`.

## Step 4 — Add environment variables

In Vercel → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `ADMIN_PASSWORD` | the password you'll use to log into `/admin` |
| `SESSION_SECRET` | any long random string |
| `CONTACT_EMAIL` | the email where trials + contact messages should land |
| `DATABASE_URL` | (set automatically if you used Vercel Postgres) |
| `RESEND_API_KEY` | optional — free key from resend.com to actually send emails |
| `RESEND_FROM` | optional — the "from" address |
| `TELEGRAM_BOT_TOKEN` | optional — for Pure Vision auto-updates |
| `TELEGRAM_PUREVISION_CHAT` | optional — e.g. `@yourchannel` |

Without Resend, forms still save to the admin dashboard — they just won't also
email you. Without Telegram, the Pure Vision feed shows whatever you post manually.

## Step 5 — Create the database tables (once)

From your machine, pointed at the production DB:

```bash
DATABASE_URL="<your-postgres-url>" npx prisma db push
```

## Step 6 — Deploy

Hit **Deploy** in Vercel. Every future `git push` to `main` redeploys automatically.

---

### Why I couldn't push it for you

Your Vercel account is connected (I can see your "Bobert's projects" team), but
the connection is read/manage only — it can't upload code. There's also no GitHub
connection on my side and no deploy token in my sandbox, so the actual push has to
come from your machine via the steps above. Once it's pushed, redeploys are
automatic.
