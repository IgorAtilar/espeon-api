export enum Type {
  Colorless = 'colorless',
  Darkness = 'darkness',
  Dragon = 'dragon',
  Fairy = 'fairy',
  Fighting = 'fighting',
  Fire = 'fire',
  Grass = 'grass',
  Lightning = 'lightning',
  Metal = 'metal',
  Psychic = 'psychic',
  Water = 'water',
}

export interface CardResponse {
  id: string
  name: string
  images: {
    small: string
    large: string
  }
  types?: Type[]
}

export interface GetCardsPokemonTCGAPIResponse {
  data: CardResponse[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}
