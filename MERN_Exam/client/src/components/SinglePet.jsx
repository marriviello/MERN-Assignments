import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'

const SinglePet = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [onePet, setOnePet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((result) => {
            setOnePet(result.data)
        }).catch((error) => console.log(error))
    }, [id])

    const deletePet = (id) => {
        axios.delete(`http://localhost:8000/api/pet/delete/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
    <div class="p-5 w-50">
        <h1>Pet Shelter</h1>
        <h3>Details about: {onePet.name}</h3>
        <Link to={"/"}>Back to home</Link>
        <div class="p-4 border border-secondary">
            <p>Pet type: {onePet.type}</p>
            <p>Description: {onePet.description}</p>
            <p>Skills: {onePet.skill1} {onePet.skill2} {onePet.skill3}</p>
        </div>
        <br/>
        <button class="btn btn-primary" onClick={(e)=>deletePet(onePet._id)}>Adopt Pet!</button> <br/>
    </div>

)
}

export default SinglePet