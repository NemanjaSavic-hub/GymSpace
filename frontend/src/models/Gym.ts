import type { Review } from "./Review";

export interface Gym {
    id: number,
    name: string,
    averageRate: number,
    image: string,
    location: string,
    reviews: Review[]
} 