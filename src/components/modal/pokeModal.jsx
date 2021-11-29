import { Modal, Box } from "@mui/material"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function abrirModal({open, aoFechar, pokemonInfo}){
    let pokeType = ''
    if(pokemonInfo['types'][1] !== undefined){
        pokeType = pokemonInfo['types'][1].type.name
    }

    return(
        <Modal 
            open={open}
            onClose={aoFechar}        
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <p>{pokemonInfo.id}</p>
            <p>{pokemonInfo.name}</p>
            <p><img src={pokemonInfo.sprites.front_default} alt=''/> </p>
            <p><img src={pokemonInfo.sprites.back_default} alt=''/></p>
            <p>{pokemonInfo.weight}</p>
            <p>{pokemonInfo.height}</p>
            <p>{pokemonInfo['types'][0].type.name}</p>
            <p>{pokeType}</p>
        </Box>
        </Modal>
    );
}

export default abrirModal;
