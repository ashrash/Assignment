import AllEpisodes from "./models/AllEpisodes";
import Episode from "./models/Episode";
import api from "./lib/api";
import Character from "./models/Character";


class RickAndMorty {
    nextUrl: string | null;
    characterCache: any;
    allEpisodes: Episode<string[]>[];
     allEpisodesWithChar: Episode<Character[]>[];

    constructor() {
        this.nextUrl ='https://rickandmortyapi.com/api/episode';
        this.characterCache= {};
        this.allEpisodes = [];
        this.allEpisodesWithChar = [];
    }

    episodeMapper = (data: Episode<string[]>, characters: Character[]): Episode<Character[]> => {
        return {
            id: data.id,
            name: data.name,
            air_date: data.air_date,
            episode: data.episode,
            url: data.url,
            created: data.created,
            characters,
        };
    }
    
    fetchAllEpisode = async () => {
        try {
            while(this.nextUrl) {
                const response: AllEpisodes<string[]> | null = await api<AllEpisodes<string[]>>(this.nextUrl);
                if(response) {
                    const { info, results }: AllEpisodes<string[]> = response;
                    this.allEpisodes.push(...results);
                    this.nextUrl = info?.next;
                } else {
                    this.nextUrl = null;
                }
            }
            console.log(`Fetch complete of ${this.allEpisodes?.length} Rick and morty Episode`)
            for(let i=0; i<this.allEpisodes.length; i++){
                const { characters }: Episode<string[]> = this.allEpisodes[i];
                const charPromise = characters.map((characterURL: string)=> {
                    if(this.characterCache[characterURL]){
                        return this.characterCache[characterURL];
                    }
                    const promise = api<Character>(characterURL);
                    this.characterCache[characterURL] = promise;
                    return promise;
                });
                const data: Character[] = await Promise.all(charPromise);
                console.log(`Fetch complete ${i+1} of ${this.allEpisodes?.length} Rick and morty Episode's charaters`)
                this.allEpisodesWithChar[i] = this.episodeMapper(this.allEpisodes[i], data);
            }
            console.log(this.allEpisodesWithChar);
        } catch(error) {
            console.log(`An Error occured ${JSON.stringify(error)}`)
        }
    }
    
    
}


const rickAndMorty = new RickAndMorty();
rickAndMorty.fetchAllEpisode();