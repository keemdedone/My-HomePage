
export type SearchData = {
    search?: string,
    page?: string,
};
  
export type List<X> = {
    count: number;
    next: string | null ;
    previous: string | null ;
    results: X[];
};

export type Game = {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: boolean,
    background_image: string,
    rating: number,
    rating_top: number,
    ratings: ratings[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    added_by_status: added_by_status,
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    platforms: platforms[],
    reviews_count: number,
    genres: genres[],
    stores: stores[],
    tags: tags[],
    short_screenshots: short_screenshots[],
}

export type ratings = {
    id: number,
    title: string,
    count: number,
    percent: number,
}

export type added_by_status = {
    yet: number,
    owned: number,
    beaten: number,
    toplay: number,
    dropped: number,
    playing: number,
}

export type genres = {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string,
}

export type tags = {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string,
}

export type short_screenshots = {
    id: number,
    image: string,
}

export type platforms = {
    platform: platform,
    released_at: string,
    requirements_en: requirements_en,
    requirements_ru: requirements_ru,
}

export type  platform = {
    id: number,
    name: string,
    slug: string,
    image:string,
    games_count: number,
    year_end: string,
    year_start: number,
    image_background: string,
}

export type requirements_en = {
    minimum:string,
    recommended:string,
}

export type requirements_ru = {
    minimum:string,
    recommended:string,
}

export type stores = {
    id:number,
    store:store,
}

export type store = {
    id:number,
    name:string,
    slug:string,
    domain:string,
    games_count:number,
    image_background:string,
}

export function parseGameList(data: any): List<Game>{
    if(data){
        console.log(data)
        localStorage.setItem('loadSet','stop');
    }
    return {...data};
}
