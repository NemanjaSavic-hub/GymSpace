import type { Gym } from "./Gym";

export interface GymResponse {
    content: Gym[],
    page: {
        size: number,
        number: number,
        totalElements: number,
        totalPages: number
    }
}