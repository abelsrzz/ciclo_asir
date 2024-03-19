import { Subject, db } from "astro:db";
 
await db.insert(Subject).values([
  {
    id: "bases",
    courseName: "primero",
  },
  {
    id: "iso",
    courseName: "primero",
  },
  {
    id: "lm",
    courseName: "primero",
  },
  {
    id: "redes",
    courseName: "primero",
  },
  {
    id: "hardware",
    courseName: "primero",
  },
  {
    id: "redes",
    courseName: "segundo",
  },
  {
    id: "aso",
    courseName: "primero",
  },
  {
    id: "seguridad",
    courseName: "segundo",
  },
  {
    id: "iaw",
    courseName: "primero",
  },
  {
    id: "bases",
    courseName: "primero",
  },
]);