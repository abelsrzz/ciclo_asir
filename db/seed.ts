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
      resume: "Todo el contenido de segundo",
    },
    {
      id: 3,
      path: "/content/primero/bases/tema1/T01_bases_teoria.pdf",
      subject: "bases",
      resume: "Teoría Tema 1 (Introducción a las bases de datos)",
    },
    {
      id: 4,
      path: "/content/primero/bases/tema2/T02_bases_ejercicios_1.pdf",
      subject: "bases",
      resume: "Ejercicios Tema 2 (Entidad relación 1)",
    },    
    {
      id: 5,
      path: "/content/primero/bases/tema2/T02_bases_ejercicios_2.pdf",
      subject: "bases",
      resume: "Ejercicios Tema 2 (Entidad relación 2)",
    },
  ]);
}
