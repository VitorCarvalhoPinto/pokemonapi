import { useState, useEffect } from 'react';
import api from '../../api';
import "./style.css"
import PokeModal from '../modal/pokeModal';

function PokeCard({url}){
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
    const [pokemonInfo, setPokemonInfo] = useState();
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    useEffect(() =>{
        api
        .get(url)
        .then((response) => {
            setPokemonInfo(response.data)
        })
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        });
    },[url])

    if(pokemonInfo === undefined){
        return (
            <div>loading</div>
        )
    }

    function prefixo(numero){
        if(String(numero).length === 1)
                numero = '#000' + numero
        else if(String(numero).length === 2)
                numero = '#00' + numero
        else if(String(numero).length === 3)
                numero = '#0' + numero
        
        return numero
    }
    let idFormatado = prefixo(pokemonInfo.id)
    let pokeType1 = pokemonInfo['types'][0].type.name + ' pokeType'
    if(pokemonInfo['types'][1] !== undefined){
        let pokeType2 = pokemonInfo['types'][1].type.name + ' pokeType'
        return (        
            <div className='cardPokemon'>
                <div className='types'>
                <i className={pokeType1}>{pokemonInfo['types'][0].type.name}</i>
                <i className={pokeType2}>{pokemonInfo['types'][1].type.name}</i>
                </div>
                <h6 className='pokeNome'>{pokemonInfo.name}</h6>
                <p className="pokeId">{idFormatado}</p>
                <div className='testeimg'>
                    <img src={imgUrl + pokemonInfo.id + '.png'} alt="" 
                    onClick={() => handleOpen(true)} className='pokeImage'/>
                </div>
                <PokeModal open={open} aoFechar={handleClose} pokemonInfo={pokemonInfo}/>
            </div>
        );
    }


    return(
        <div className='cardPokemon'>
            <div className='types'>
            <i className={pokeType1}>{pokemonInfo['types'][0].type.name}</i>
            </div>
                <h6 className='pokeNome'>{pokemonInfo.name}</h6>
                <p className="pokeId">{idFormatado}</p>
                <div className='testeimg'>
                    <img src={imgUrl + pokemonInfo.id + '.png'} alt="" 
                    onClick={() => handleOpen(true)} className='pokeImage'/>
                </div>
            <PokeModal open={open} aoFechar={handleClose} pokemonInfo={pokemonInfo}/>
        </div>
    )
}


export default PokeCard;
