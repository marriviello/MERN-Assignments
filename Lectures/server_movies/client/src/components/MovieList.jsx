import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const MovieList = () => {

    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allMovies')
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
    <div>
        <h1>Movie List</h1>
        {
            list.map((movie)=>{
                <div>
                    <img src={movie.boxArt} />
                    <h2>{movie.title}</h2>
                </div>
            })
        }
    </div>
    )
}

export default MovieList