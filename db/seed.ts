import { File, db } from "astro:db";

export default async function() {
  await db.insert(File).values([
    {
      path: "/content/primero/bases/tema1/T01_bases_teoria.pdf",
      resume: "Teoría Tema 01 Bases de Datos",
      subjectName: "bases",
      unitName: "01",
      courseName: "primero",
    },
    {
      path: "/content/primero/bases/tema1/T01_bases_teoria.pdf",
      resume: "Teoría Tema 01 Bases de Datos",
      subjectName: "bases",
      unitName: "02",
      courseName: "primero",
    },
  ])
}