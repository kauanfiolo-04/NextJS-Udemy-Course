"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText=text=>{
  return !text || text.trim() === "";
} 

// Server action
export const shareMeal=async (prevState, formData)=>{
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email")
  }

  if(
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image || meal.image.size===0
  ){
    return {
      message: "Invalid input."
    };
  }

  await saveMeal(meal);
  // if you want to revalidate cache from all pages from /meals add the "layout" param
  revalidatePath("/meals");
  redirect("/meals");
}