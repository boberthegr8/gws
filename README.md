{
  "name": "gws-great-white-streams",
  "version": "1.0.0",
  "private": true,
  "description": "Great White Streams (GWS) — landing site + admin backend",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:seed": "node prisma/seed.mjs",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "next": "14.2.15",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "prisma": "^5.22.0"
  }
}
