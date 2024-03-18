import { File, db } from "astro:db";

export default async function () {
  await db.insert(File).values([
    {
      id: 1,
      path: "primero",
      resume: "Todo el contenido de primero",
    },
    { 
        id: 2, 
        path: "segundo", 
        resume: "Todo el contenido de segundo" 
    },
    { 
        id: 3, 
        path: "/content/primero/bases/tema1/T01_bases_teoria.pdf",
        subject: "bases",
        resume: "Teoría Tema 1 (Introducción a las bases de datos)" 
    },
  ]);
}
