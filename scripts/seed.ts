import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import "dotenv/config";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/flags/es.svg",
      },
      {
        id: 2,
        title: "Japanese",
        imageSrc: "/flags/jp.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/flags/it.svg",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/flags/fr.svg",
      },
    ]);

    console.log("Database cleared");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
