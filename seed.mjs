// GWS — Great White Streams :: data model
// Configured for production on Vercel with hosted Postgres.
// For local SQLite dev, change provider to "sqlite" and point
// DATABASE_URL at a file (see README).

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// A managed subscriber / customer.
model User {
  id        String   @id @default(cuid())
  name      String
  email     String
  service   String   @default("Hush") // "Hush" | "Pure Vision"
  plan      String   @default("Monthly")
  status    String   @default("active") // active | trial | expired | suspended
  notes     String   @default("")
  expiresAt DateTime?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Incoming trial requests from the public site.
model TrialRequest {
  id        String   @id @default(cuid())
  name      String
  email     String
  service   String   @default("Hush")
  device    String   @default("")
  message   String   @default("")
  status    String   @default("new") // new | sent | converted | declined
  createdAt DateTime @default(now())
}

// Incoming contact messages from the public site.
model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String   @default("")
  message   String
  handled   Boolean  @default(false)
  createdAt DateTime @default(now())
}

// Update / announcement entries shown in the front-page Updates panel.
// source: "Hush" (posted manually, relayed from Circle) or
//         "Pure Vision" (auto-synced from Telegram, or posted manually).
model Update {
  id         String   @id @default(cuid())
  source     String   @default("Hush")
  title      String
  body       String   @default("")
  externalId String?  // de-dupe key for Telegram message ids
  createdAt  Date