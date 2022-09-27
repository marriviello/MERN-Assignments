import './App.css';
import {useState, useEffect} from 'react' 

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.json())
    .then(response=> setPokemon(response.results))
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>807 Pokemon List:</h1>
      <ul>
      {pokemon.map((pokemon, index)=>{
        return (<li key={index}> {pokemon.name}</li>)
      })}
      </ul>
    </div>
  );
}

export default App;
