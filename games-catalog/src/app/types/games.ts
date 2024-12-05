import { User } from "./user";

export interface Game {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    genre: string;
    owner: User;
    boughtBy: User[];
    __v: number;
}