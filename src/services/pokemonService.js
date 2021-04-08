import api from './api';

class PokemonService {
  static async getAll(count, pageNumber) {
    const response = await api.get(`?limit=${count}&offset=${pageNumber}`);
    let array = [];

    await Promise.all(
      response.data.results.map(async (pokemon) => {
        let pokeId = pokemon.url.slice(34).replace('/', '');
        let imageHd = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`;

        const pokeRes = await api.get(`${pokeId}`);

        array.push({
          ...pokeRes.data,
          url: pokemon.url,
          imageHdUrl: imageHd,
        });
      })
    );

    return array;
  }
}

export { PokemonService };
