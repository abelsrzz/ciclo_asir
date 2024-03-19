import { defineTable, defineDb, column, NOW } from 'astro:db';

const File = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    path: column.text(),
    resume: column.text({ optional: true }),
    subjectName: column.number({ optional: true }),
    unitName: column.number({ optional: true }),
    courseName: column.number({ optional: true }),
    published: column.date({ default: NOW }),
  },
});

export default defineDb({
    tables: { File },
  })