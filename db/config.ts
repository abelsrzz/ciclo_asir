import { defineTable, defineDb, column, NOW } from 'astro:db';

const File = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    path: column.text(),
    subject: column.text({ optional: true }),
    resume: column.text({ optional: true }),
    published: column.date({ default: NOW }),
  },
});
export default defineDb({
    tables: { File },
  })