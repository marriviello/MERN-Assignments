import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App ()  {
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=>{setPokemon(response.data.results)})
      .catch(error=>console.log(error))
  }, [])

  return (
    <div>
      <h1>Axios Pokemon List:</h1>
      <ul>
        {pokemon.map((pokemon, index) =>(
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
