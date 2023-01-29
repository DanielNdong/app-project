export interface IAnime {
    id: string,
    type: string,
    attributes: {
        canonicalTitle: string,
        popularityRank: number,
        ageRatingGuide: string,
        status: Symbol,
        posterImage: {
            small: string,
            medium: string,
            original: string
        }
    }
}