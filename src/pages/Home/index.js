import React, { useState, useEffect } from 'react';

import { PokemonService } from '../../services/pokemonService';

import { pokeBackground, pokeColor } from '../../utils/enum/index';

// import img6for3 from '../../assets/6x3.svg';
import img6for3 from '../../assets/Pattern.svg';
import img10for5 from '../../assets/10x5.svg';
import pokeball from '../../assets/Pokeball.svg';
import circle from '../../assets/Circle.svg';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [count, setCount] = useState(30);

  function cardPokemon(pokemon) {
    console.log('pokemon', pokemon);

    return (
      <>
        {/* CARD */}
        <div
          style={{
            width: 400,
            display: 'flex',
            position: 'relative',

            right: 0,
            padding: 5,

            margin: '12px 12px 28px 12px',
            borderRadius: 14,

            backgroundColor: [pokeBackground(pokemon.types[0].type.name)],
          }}
        >
          <div>
            <img
              style={{
                position: 'absolute',
                top: 6,
                right: 170,
              }}
              width={90}
              height={40}
              src={img6for3}
              ult='img6for3'
              alt='img6for3'
            />
          </div>

          <div style={{ margin: 0, marginLeft: 20 }}>
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
                fontSize: 28,

                margin: 0,
                marginBottom: 2,
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
            <img
              style={{ position: 'absolute', top: 0, right: 0 }}
              width={120}
              height={120}
              src={pokeball}
              ult='logo'
              alt='logo'
            />

            <div>
              <img
                style={{ position: 'absolute', top: -18, right: 20 }}
                width={110}
                height={110}
                src={pokemon.imageHdUrl}
                ult='logo'
                alt='logo'
              />
            </div>
          </div>
        </div>
        {/* FIM CARD */}
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1> pokedex Gabriel</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            maxWidth: 1400,
            minWidth: 260,
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          {pokemons.map((pokemon) => cardPokemon(pokemon))}
        </div>
      </div>
    </>
  );
}

export default Home;
