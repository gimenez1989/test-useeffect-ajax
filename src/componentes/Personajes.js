import React, { useState, useEffect } from "react";

const Personajes = (props) => {
  const[ListaPersonajes, setListaPersonajes] = useState([])

  useEffect(() => {
    //Declaramos la función asíncrona para cargar nuestro estado
    const cargarDatos = async () => {
      const personajes = await cargarListaPersonajes()
      setListaPersonajes(personajes)
    }

    cargarDatos()
  
  }, [])
  

  const cargarListaPersonajes = async () => {
     try {
       const data = await fetch('https://breakingbadapi.com/api/characters')
       const personajes = await data.json()
       console.log(personajes)
       return personajes     
      } catch (err) {
        console.log(err)
      }
  }

  const seleccionar = (event) => {
    props.seleccionarPersonaje(event.target.value)
  }

  return (
    <select onChange={seleccionar}>
      {ListaPersonajes.map(e => <option key={e.char_id} value={e.char_id}>{e.name}</option>)}
    </select>
  )
}

export default Personajes