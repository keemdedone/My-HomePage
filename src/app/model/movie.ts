export type SearchData = {
    search?: string,
    page?: string,
}

export type Popular = {
    page: number,
    results: Result[],
    total_pages: number,
    total_results: number,
}

export type Result = {
    adult: string,
    backdrop_path: string,
    genre_ids: string[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export function parsePopularList(data: any): Popular{
    return {
        page: data.page,
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
    };
}
