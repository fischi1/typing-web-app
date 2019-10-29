
import lessonsDataImport from "./lessonsData.json";
import { Lesson } from "../types/LessonType.js";
import { DataType } from "../types/DataType.js";

const lessonsData: DataType<Lesson> = lessonsDataImport as any;

export default lessonsData;