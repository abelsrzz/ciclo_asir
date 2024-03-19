import { File, db } from "astro:db";

await db.insert(File).values([
   /* 
   Already remote
   {
        id: 1,
        path: "/content/primero/bases/tema1/T01_bases_teoria.pdf",
        resume: "Introducción a las bases de datos",
        unitName: "01",
        subjectName: "bases",
        courseName: "primero",
    }, */
]);
