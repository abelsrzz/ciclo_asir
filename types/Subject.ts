type CourseId =
	| "primero"
	| "segundo"
type CourseName =
	| "Primero de ASIR"
	| "Segundo de ASIR"


export interface Subject {
	id: string
	name: string
    courseId: CourseId
    courseName: CourseName
	files: string[]
}