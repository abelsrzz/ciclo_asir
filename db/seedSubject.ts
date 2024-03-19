import { Subject, db } from "astro:db";
 
await db.insert(Subject).values([
  {
    id: "bases",
    fullName: "Gestión de Bases de Datos",
    courseName: "primero",
  },
  {
    id: "iso",
    fullName: "Implantación de Sistemas Operativos",
    courseName: "primero",
  },
  {
    id: "lm",
    fullName: "Lenguajes de Marcas",
    courseName: "primero",
  },
  {
    id: "redes",
    fullName: "Planificación y Administración de Redes",
    courseName: "primero",
  },
  {
    id: "Fundamentos del Hardware",
    courseName: "primero",
  },
  {
    id: "Servicios de Red e internet",
    courseName: "segundo",
  },
  {
    id: "Administración de Sistemas Operativos",
    courseName: "primero",
  },
  {
    id: "Seguridad y Alta Disponibilidad",
    courseName: "segundo",
  },
  {
    id: "Implantación de Aplicaciones Web",
    courseName: "primero",
  },
  {
    id: "Administración de Sistemas Gestores de Bases de Datos",
    courseName: "primero",
  },
]);
