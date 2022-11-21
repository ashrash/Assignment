import Episode from "./Episode";


interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

interface AllEpisodes<T> {
    info: Info;
    results: Episode<T>[]; 
}

export default AllEpisodes;