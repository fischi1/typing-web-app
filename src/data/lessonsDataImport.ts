import { DataType } from "../types/DataType.js"
import { Lesson } from "../types/LessonType.js"
import lessonsDataImport from "./lessonsData.json"

const lessonsData: DataType<Lesson> = lessonsDataImport as any

export default lessonsData
