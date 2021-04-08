import React, { useState, useEffect } from 'react';

import { PokemonService } from '../../services/pokemonService';

import { pokeBackground, pokeColor } from '../../utils/enum/index';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [count, setCount] = useState(300);

  function cardPokemon(pokemon) {
    console.log('pokemon', pokemon);

    return (
      <>
        <div
          style={{
            maxWidth: 350,
            minWidth: 250,

            display: 'flex',
            justifyContent: 'space-around',
            padding: 5,

            margin: 12,
            borderRadius: 14,

            backgroundColor: [pokeBackground(pokemon.types[0].type.name)],
          }}
        >
          <div style={{ margin: 0 }}>
            {/* NUMERO */}
            <h2
              style={{
                color: 'rgba(0,0,0,0.65)',
                fontStyle: 'bold',
                fontSize: 14,

                marginTop: 20,
                marginBottom: 0,
              }}
            >
              # {pokemon.id}
            </h2>
            {/* FIM NUMERO */}

            {/* NOME */}
            <h1
              style={{
                color: '#fff',
                fontStyle: 'bold',
                fontSize: 18,

                margin: 0,
              }}
              key={pokemon.name}
            >
              {pokemon.name}
            </h1>
            {/* FIM NOME */}

            {/* TIPO */}
            <p
              style={{
                marginTop: 0,
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              {pokemon.types.map((types) => (
                <div
                  style={{
                    color: '#fff',
                    fontStyle: 'medium',
                    fontSize: 18,

                    padding: 4,
                    margin: 2,
                    borderRadius: 4,

                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',

                    backgroundColor: [pokeColor(types.type.name)],
                  }}
                >
                  {types.type.name}
                </div>
              ))}
            </p>
            {/* FIM TIPO */}
          </div>

          <div>
            <div>
              <img
                // style={{ position: 'absolute' }}
                width={120}
                height={120}
                src={pokemon.imageHdUrl}
                ult='logo'
                alt='logo'
              />
            </div>
          </div>
        </div>
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
      <h1> pokedex</h1>

      <div
        style={
          {
            // backgroundColor: 'red',
            // maxWidth: 1200,
            // display: 'flex',
            // justifyContent: 'center',
            // flexDirection: 'row',
          }
        }
      >
        {pokemons.map((pokemon) => cardPokemon(pokemon))}
      </div>
    </>
  );
}

export default Home;
