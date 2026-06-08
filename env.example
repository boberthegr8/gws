import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userCount = await prisma.user.count();
  if (userCount === 0) {
    await prisma.user.createMany({
      data: [
        {
          name: "Demo Customer",
          email: "demo@example.com",
          service: "Hush",
          plan: "Monthly",
          status: "active",
          expiresAt: new Date(Date.now() + 30 * 864e5),
        },
        {
          name: "Trial Tester",
          email: "trial@example.com",
          service: "Pure Vision",
          plan: "Trial",
          status: "trial",
          expiresAt: new Date(Date.now() + 1 * 864e5),
        },
      ],
    });
  }

  const updateCount = await prisma.update.count();
  if (updateCount === 0) {
    await prisma.update.createMany({
      data: [
        {
          source: "Hush",
          title: "Hush servers stable",
          body: "All Hush servers reporting healthy. No action needed.",
        },
        {
          source: "Pure Vision",
          title: "Pure Vision EPG refreshed",
          body: "Guide data updated across all regions.",
        },
      ],
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
