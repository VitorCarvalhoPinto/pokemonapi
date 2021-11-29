import { useEffect, useState } from 'react';
import api from '../../api';
import PokeCard from '../card/PokeCard';
import "./style.css"
import logo from '../../titulo pokemon.png';

function ListaPokemons(){
  const [pokemon, setPokemon] = useState();
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');


  useEffect(() =>{
    api
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setPrevious(response.data.previous)
        setNext(response.data.next)
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
      <img src={logo} alt="" className='logo'/>
      <div className='areaCards'>
          {pokemon.map((e, index) => (
            <div key={index}>
                <PokeCard url={e.url} />
            </div>
          ))}
      </div>
      <button onClick={previous}>Anterior</button>
      <button onClick={next}>Proximo</button>
    </>
    );
  
}

export default ListaPokemons;
