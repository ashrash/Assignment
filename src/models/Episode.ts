import Character from "./Character";

interface Episode<T> {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: T;
    url: string;
    created: string;
}

export default Episode;