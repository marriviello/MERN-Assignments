import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPet = (props) => {
    const { id } = useParams()
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [description, setDescription] = useState()
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")

    const [errors, setErrors] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            }).catch(err => console.log(err))
    }, [id])

    const updatePet = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/edit/${id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }).then(res => {
                console.log(res)
                navigate("/")
        }).catch(err => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    
    return (
        <div class="p-5 w-50">
            <h1>Edit {name}</h1>
            <Link to={"/"}>Back to home</Link>
            <form onSubmit={updatePet}>
                <p class="form-group"> 
                    <label>Pet Name:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    { errors.name ? <span style={{color: "red"}}>{errors.name.message}</span>: null}
                </p>
                <p class="form-group">
                    <label>Pet Type:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                    { errors.type ? <span style={{color: "red"}}>{errors.type.message}</span>: null}
                </p>
                <p class="form-group">
                    <label>Description:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    { errors.description ? <span style={{color: "red"}}>{errors.description.message}</span>: null}
                </p>
                <p class="form-group">
                    <label>Skill 1:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="skill1"
                    value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p class="form-group">
                    <label>Skill 2:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="skill2"
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p class="form-group">
                    <label>Skill 3:</label><br />
                    <input type="text" 
                    class="form-control"
                    name="skill3"
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <input type="submit" value="Update" class="btn btn-primary"/>
            </form>
        </div>
    )
}
export default EditPet

