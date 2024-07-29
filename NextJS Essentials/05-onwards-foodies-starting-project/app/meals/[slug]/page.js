import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/app/controllers/meals";
  
export default function MealsDetailsPage({ params }){

  const meal = getMeal(params.slug);

  if(meal.instructions){
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal?.image ?? ""} alt={meal?.title ?? "some meal alt"} fill/>
        </div>
        <div className={classes.hederText}>
          <h1>{meal?.title ?? 'Some Meal name'}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal?.creator_email ?? "Some Email"}`}>Name</a>
          </p>
          <p className={classes.summary}>summary</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions}  dangerouslySetInnerHTML={{__html:meal?.instructions ?? "some instructions..."}} />
      </main>
    </>
  );
}