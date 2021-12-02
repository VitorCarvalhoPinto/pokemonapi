import { useEffect, useState } from 'react';
import api from '../../api';
import PokeCard from '../card/PokeCard';
import "./style.css"
import logo from '../../titulo pokemon.png';
import { Button } from '@mui/material' 
function ListaPokemons(){
  const [pokemon, setPokemon] = useState();
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');


  function requestPokemon(url){
    api
    .get(url)
    .then((response) => {
      setPrevious(response.data.previous)
      setNext(response.data.next)
      setPokemon(response.data.results)
  })
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
  }


  useEffect(() =>{
    requestPokemon('https://pokeapi.co/api/v2/pokemon')
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
      
      <div className="Button">
        <Button variant="outlined" onClick={() => requestPokemon(previous)}>Anterior</Button>
        <Button variant="outlined" onClick={() => requestPokemon(next)}>Proximo</Button>
      </div>
    </>
    );
  
}

export default ListaPokemons;
