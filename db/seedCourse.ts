import { Course, db } from "astro:db";

await db.insert(Course).values([
    {
        id: "primero",
    },
    {
        id: "segundo"
    }
]);