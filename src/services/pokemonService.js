import api from './api';

class PokemonService {
  static async getAll(count, pageNumber) {
    const response = await api.get(`?limit=${count}&offset=${pageNumber}`);
    let array = [];

    await Promise.all(
      response.data.results.map(async (pokemon) => {
        let pokeId = pokemon.url.slice(34);

        const pokeRes = await api.get(`${pokeId}`);

        array.push({ ...pokeRes.data, url: pokemon.url });
      })
    );

    return array;
  }
}

export { PokemonService };
