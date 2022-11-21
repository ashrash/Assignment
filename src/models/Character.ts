interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: UrlMap;
    location: UrlMap;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

interface UrlMap {
    name: string;
    url: string;
}

export default Character;