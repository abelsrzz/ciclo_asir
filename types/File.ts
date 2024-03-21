type SubjectId = 
    | "iso"
    | "par"
    | "lm"
    | "bd"
    | "fh"
    | "sri"
    | "aso"
    | "sgbd"
    | "iaw"
    | "sad"
    | "fct"
type FileType =
    | "teoria"
    | "practica"
    | "otro"
type CourseId =
	| "primero"
	| "segundo"
export interface File {
    title: string
    subjectId: SubjectId
    course: CourseId
    unit: string
    ext: string
    resume: string
}