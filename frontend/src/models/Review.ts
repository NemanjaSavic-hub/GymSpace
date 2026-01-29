export interface Review {
    id: number,
    dateTime: string,
    rate: number,
    text: string,
    user: {id: number, username: string}
} 