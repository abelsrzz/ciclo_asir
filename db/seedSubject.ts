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
    id: "hardware",
    fullName: "Fundamentos del Hardware",
    courseName: "primero",
  },
  {
    id: "redes2",
    fullName: "Servicios de Red e internet",
    courseName: "segundo",
  },
  {
    id: "aso",
    fullName: "Administración de Sistemas Operativos",
    courseName: "segundo",
  },
  {
    id: "seguridad",
    fullName: "Seguridad y Alta Disponibilidad",
    courseName: "segundo",
  },
  {
    id: "iaw",
    fullName: "Implantación de Aplicaciones Web",
    courseName: "segundo",
  },
  {
    id: "bases2",
    fullName: "Administración de Sistemas Gestores de Bases de Datos",
    courseName: "segundo",
  },
]);
