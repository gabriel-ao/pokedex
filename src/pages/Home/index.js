import React, { useState, useEffect } from 'react';

import { PokemonService } from '../../services/pokemonService';
function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(50);
  const [count, setCount] = useState(20);

  function cardPokemon(pokemon) {
    console.log('pokemon', pokemon);

    return (
      <>
        <h1 key={pokemon.name}> {pokemon.name}</h1>
        <p>{pokemon.order}</p>
        <img src={pokemon.sprites.front_default} ult='logo' />
      </>
    );
  }

  useEffect(() => {
    (async () => {
      const res = await PokemonService.getAll(count, pageNumber);
      res.sortBy('id');
      setPokemons(res);
    })();
  }, []);

  return (
    <>
      <h1> pokemons</h1>

      {pokemons.map((pokemon) => cardPokemon(pokemon))}
    </>
  );
}

export default Home;
