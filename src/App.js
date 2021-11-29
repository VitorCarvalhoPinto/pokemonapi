import { Component } from 'react';
import ListaPokemons from './components/tabela/ListaPokemons.jsx';
import './App.css';

class App extends Component{

  render(){
    return(
      <>
        <ListaPokemons/>
      </>
    );
  } 
}

export default App;
