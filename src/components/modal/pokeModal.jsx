import { Modal, Box } from "@mui/material"
import './style.css'
let style = {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 500,
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};


function abrirModal({open, aoFechar, pokemonInfo}){

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
            <p><img src={pokemonInfo.sprites.front_default} alt=''/></p>
            <div className="TitleName">
                <i className="PokeMainColor">{pokemonInfo.name}</i>
                <i className="pokeId">#{pokemonInfo.id}</i>
            </div>
            <table className="atrPrincipal">
                <thead>
                    <tr>
                        <td>peso:  </td>
                        <td>altura:</td>
                        <td>XP Base:</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemonInfo.weight}</td>
                        <td>{pokemonInfo.height}</td>
                        <td>{pokemonInfo.base_experience}</td>
                    </tr>
                </tbody>
            </table>

            <h6 className="title">Stats</h6>
            <table className="atrStat">
                <thead>
                    <tr>
                        <td>{hp.stat.name}: {hp.base_stat}</td>
                        <td>{attack.stat.name}: {attack.base_stat}</td>

                        <td>{special_attack.stat.name}: {special_attack.base_stat}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{defense.stat.name}: {defense.base_stat}</td>
                        <td>{special_defense.stat.name}: {special_defense.base_stat}</td>
                        <td>{velocity.stat.name}: {velocity.base_stat}</td>
                    </tr>
                </tbody>
            </table>
        </Box>
        </Modal>
    );
}

export default abrirModal;
