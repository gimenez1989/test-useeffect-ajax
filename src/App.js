import React, { useState } from 'react';
import Personajes from './componentes/Personajes'
import Ficha from './componentes/Ficha'
import './App.css';


function App() {
  const[personajeId, setPersonajeId] = useState("")
  
  const seleccionarPersonaje = (id) => {
    console.log(personajeId)
    setPersonajeId(id)
  }
  
  return (
    <div className="App">
      <header className="App-header">
       <h1>Breaking Bad API</h1>
       <Personajes seleccionarPersonaje={seleccionarPersonaje}/>
      <Ficha id={personajeId}/>
      </header>
    </div>
  );
}

export default App;
