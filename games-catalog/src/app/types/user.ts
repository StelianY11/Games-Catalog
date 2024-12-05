export interface User {
    games: string[];
    _id: string;
    email: string;
    username: string;
    password: string;
    __v: number;
}

export interface UserForAuth {
    username: string;
    email: string;
    password: string;
    id: string;
}

export interface ProfileDetails {
    username: string;
    email: string;
}