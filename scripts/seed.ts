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
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Spanish",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1, // Spanish Unit 1
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1, // Spanish Unit 1
        title: "Numbers",
        order: 2,
      },
      {
        id: 3,
        unitId: 1, // Spanish Unit 1
        title: "Verbs",
        order: 3,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Spanish Nouns
        type: "SELECT",
        question: 'Which one of these is the "the man"?',
        order: 1,
      },
      {
        id: 2,
        lessonId: 2, // Spanish Numbers
        type: "SELECT",
        question: "Which one of these is the number 1?",
        order: 1,
      },
      {
        id: 3,
        lessonId: 3, // Spanish Verbs
        type: "SELECT",
        question: 'Which one of these is the verb "to eat"',
        order: 1,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1, // Spanish Nouns
        text: "el hombre",
        correct: true,
      },
      {
        id: 2,
        challengeId: 1, // Spanish Nouns
        text: "la mujer",
        correct: false,
      },
      {
        id: 3,
        challengeId: 1, // Spanish Nouns
        text: "el niño",
        correct: false,
      },
      {
        id: 4,
        challengeId: 2, // Spanish Numbers
        text: "uno",
        correct: true,
      },
      {
        id: 5,
        challengeId: 2, // Spanish Numbers
        text: "dos",
        correct: false,
      },
      {
        id: 6,
        challengeId: 2, // Spanish Numbers
        text: "tres",
        correct: false,
      },
      {
        id: 7,
        challengeId: 3, // Spanish Verbs
        text: "comer",
        correct: true,
      },
      {
        id: 8,
        challengeId: 3, // Spanish Verbs
        text: "beber",
        correct: false,
      },
      {
        id: 9,
        challengeId: 3, // Spanish Verbs
        text: "dormir",
        correct: false,
      },
    ]);

    console.log("Seeded database successfully!");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
