export type PokemonData = {
  name: string,
  id: number,
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  },
  types: {
    // da forma que está na API
    slot: number,
    type: {
      name: string,
      url: string
    }
  }[]
}