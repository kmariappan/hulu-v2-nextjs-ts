// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type TitleString =
  | 'Trending'
  | 'Top Rated'
  | 'Action'
  | 'Comedy'
  | 'Horror'
  | 'Romance'
  | 'Mystery'
  | 'Sci-Fi'
  | 'Western'
  | 'Animation'
  | 'TV Movie'

export type RequestKeys =
  | 'fetchTrending'
  | 'fetchTopRated'
  | 'fetchActionMovies'
  | 'fetchComedyMovies'
  | 'fetchHorrorMovies'
  | 'fetchRomanceMovies'
  | 'fetchMystery'
  | 'fetchSciFi'
  | 'fetchWestern'
  | 'fetchAnimation'
  | 'fetchTV'

export type NavItemType = {
  title: TitleString
  url: string
}

export type RequestObject = Record<RequestKeys, NavItemType>

export type TmdbApiResultType = {
  release_date: string
  name?: string
  original_name?: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  poster_path: string
  vote_count: number
  video: boolean
  title?: string
  vote_average: number
  overview: string
  popularity: number
  media_type: string
  first_air_date?: string
}

export type TmdbApiResponseType = {
  page: number
  total_pages: number
  total_results: number
  results: TmdbApiResultType[]
}
