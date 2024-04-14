"use server";

import db from "@/db/drizzle";
import { getCouseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  const course = await getCouseById(courseId);

  if (!course) {
    throw new Error("Course not found");
  }
  /* TO DO 
  if (!course.units.lenght || !course.units[0].lessons.lenght) {
    throw new Error("Course is empty");
  }
  */

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "Shy Penguin",
      userImageSrc: user.imageUrl || "/images/shy-penguin.svg",
    });
    revalidatePath("/courses");
    revalidatePath("/learn");

    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "Shy Penguin",
    userImageSrc: user.imageUrl || "/images/shy-penguin.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");

  redirect("/learn");
};
