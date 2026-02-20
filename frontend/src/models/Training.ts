import type { Exercise } from "./Exercise";
import type { Volume } from "./Volume";

export interface Training {
    id: number,
    description: string,
    trainingType: "BEGINNER" | "ADVANCED" | "ELITE",
    exerciseList: Exercise[],
    volumeList: Volume[]
}