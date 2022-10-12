import axios from 'axios'
import e from 'express'
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = () => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [rating, setRating] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState('')
    const [duration, setDuration] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    const submitHandler = () =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/addMovie',{
            title,
            director,
            rating,
            genre,
            releaseYear,
            duration,
            image
        }).then((res)=>{
            console.log(res)
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
    <div>
        <form onSubmit={submitHandler()}>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <label>Director</label>
            <input type="text" onChange={(e)=>setDirector(e.target.value)} value={director}/>
            <label>Rating</label>
            <select>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <input type="text" onChange={(e)=>setRating(e.target.value)} value={rating}/>
            <label>Genre</label>
            <input type="text" onChange={(e)=>setGenre(e.target.value)} value={genre}/>
            <label>Release Year</label>
            <input type="text" onChange={(e)=>setReleaseYear(e.target.value)} value={releaseYear}/>
            <label>Duration</label>
            <input type="text" onChange={(e)=>setDuration(e.target.value)} value={duration}/>
            <label>Image</label>
            <input type="text" onChange={(e)=>setImage(e.target.value)} value={image}/>
            <button type="submit">Create Movie</button>
        </form>
    </div>
    )
}

export default Form;
