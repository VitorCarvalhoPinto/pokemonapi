import { useEffect, useState } from 'react';
import api from '../../api';
import PokeCard from '../card/PokeCard';

function ListaPokemons(){
  const [pokemon, setPokemon] = useState();
  


  useEffect(() =>{
    api
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        console.log(response.data)
        setPokemon(response.data.results)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  },[])

  if(pokemon === undefined){
    return (
      <div>loading</div>
    )
  }


    return(
    <>
      <div>
        {pokemon.map((e, index) => (
          <div key={index} className='cardPokemon'>
              <PokeCard url={e.url} />
          </div>
          ))}
      </div>
  </>
    );
  
}

export default ListaPokemons;
