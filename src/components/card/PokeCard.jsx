import { useState, useEffect } from 'react';
import api from '../../api';



function PokeCard(url){
    const [pokemonInfo, setPokemonInfo] = useState();

    function abrirModal(id,nome,front_image,back_image,types,weight,height){
        console.log(id,nome,front_image,back_image,weight,height,types)
    }
    
    
    useEffect(() =>{
        api
        .get(url.url)
        .then((response) => {
            setPokemonInfo(response.data)
        })
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        });
    },[])

    if(pokemonInfo === undefined){
        return (
            <div>loading</div>
        )
    }
    console.log(pokemonInfo)
    return(
        <div>
            {pokemonInfo.name}
            <img src={pokemonInfo.sprites.front_default} alt="" 
            onClick={() => {
                abrirModal(pokemonInfo.id, 
                    pokemonInfo.name,
                    pokemonInfo.sprites.front_default,
                    pokemonInfo.sprites.back_default,
                    pokemonInfo.weight,
                    pokemonInfo.height,
                    pokemonInfo.types)}}/>
        </div>
    )
}


export default PokeCard;
