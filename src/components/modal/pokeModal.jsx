import { Modal, Box } from "@mui/material"
import './style.css'
let style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 400,
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function abrirModal({open, aoFechar, pokemonInfo}){
    let pokeColor1 = pokemonInfo['types'][0].type.name + ' pokeType'
    let pokeColor2
    let pokeType = ''
    if(pokemonInfo['types'][1] !== undefined){
        pokeType = pokemonInfo['types'][1].type.name
        pokeColor2 = pokemonInfo['types'][1].type.name + ' pokeType'
    }
    let hp = pokemonInfo.stats[0]
    let attack = pokemonInfo.stats[1]
    let defense = pokemonInfo.stats[2]
    let special_attack = pokemonInfo.stats[3]
    let special_defense = pokemonInfo.stats[4]
    let velocity = pokemonInfo.stats[5]
    return(
        <Modal 
            open={open}
            onClose={aoFechar}        
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <div className={pokemonInfo['types'][0].type.name + ' modalTabela'}>
            <p>{pokemonInfo.id}</p>
            <p>{pokemonInfo.name}</p>
            <p><img src={pokemonInfo.sprites.front_default} alt=''/> </p>
            <p><img src={pokemonInfo.sprites.back_default} alt=''/></p>
            <ul>
                <li>peso:  {pokemonInfo.weight}</li>
                <li>altura: {pokemonInfo.height}</li>
                <li>{hp.stat.name}: {hp.base_stat}</li>
                <li>{attack.stat.name}: {attack.base_stat}</li>
                <li>{defense.stat.name}: {defense.base_stat}</li>
                <li>{special_attack.stat.name}: {special_attack.base_stat}</li>
                <li>{special_defense.stat.name}: {special_defense.base_stat}</li>
                <li>{velocity.stat.name}: {velocity.base_stat}</li>
            </ul>
            <i className={pokeColor1}>{pokemonInfo['types'][0].type.name}</i>
            <i className={pokeColor2}>{pokeType}</i>
            </div>
        </Box>
        </Modal>
    );
}

export default abrirModal;
