import { File, db } from "astro:db";

export default async function () {
  await db.insert(File).values([
    {
      id: 1,
      route: "primero",
      resume: "Todo el contenido de primero",
    },
    { 
        id: 2, 
        route: "segundo", 
        resume: "Todo el contenido de segundo" 
    },
  ]);
}
