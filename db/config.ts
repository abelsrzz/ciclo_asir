import { defineTable, defineDb, column, NOW } from 'astro:db';

const Course = defineTable({
  columns:{
    id: column.text({ primaryKey: true }),
  }
})

const Subject = defineTable({
  columns:{
    id: column.text({ primaryKey: true }),
    courseName: column.text({ optional: true , references: () => Course.columns.id }),
  }
})
const File = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    path: column.text(),
    resume: column.text({ optional: false}),
    unitName: column.text({optional: true}),
    subjectName: column.text({ optional: true , references: () => Subject.columns.id }),
    courseName: column.text({ optional: true , references: () => Course.columns.id }),
    published: column.date({ default: NOW }),
  },
});

export default defineDb({
    tables: { Course, Subject, File },
  })
