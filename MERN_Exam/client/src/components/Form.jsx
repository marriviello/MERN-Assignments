import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Form = (props) => {
    const {pet, setPet} = props

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")

    const [errors, setErrors] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/pet/create",{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }).then((result) => {
            navigate("/")
            console.log(result.data)
            setPet([...pet, result.data])
            setName("")
            setType("")
            setDescription("")
            setSkill1("")
            setSkill2("")
            setSkill3("")
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div class="p-5 w-50">
            <form onSubmit={ submitHandler }>
                <h1>Pet Shelter</h1><br/>
                <h3>Know a pet needing a home?</h3>
                <Link to={"/"}>Back to home</Link><br/>
                <div class="form-group">
                    <label>Pet Name: </label> 
                    <input class="form-control" type="text" name="name" value={name} onChange={ (e) => setName(e.target.value) } /> <br />
                    { errors.name ? <span style={{color: "red"}}>{errors.name.message}</span>: null}
                </div>
                <div class="form-group">
                    <label>Pet Type: </label> 
                    <input class="form-control" type="text" name="type" value={type} onChange={ (e) => setType(e.target.value) } /><br />
                    { errors.type ? <span style={{color: "red"}}>{errors.type.message}</span>: null}
                </div>
                <div class="form-group">
                    <label>Description: </label> 
                    <input class="form-control" type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value) } /> <br />
                    { errors.description ? <span style={{color: "red"}}>{errors.description.message}</span>: null}
                </div>
                <div class="form-group">
                    <label>Skill 1: </label> 
                    <input class="form-control" type="text" name="skill1" value={skill1} onChange={ (e) => setSkill1(e.target.value) } /> <br />
                </div>
                <div class="form-group">
                    <label>Skill 2: </label> 
                    <input class="form-control" type="text" name="skill2" value={skill2} onChange={ (e) => setSkill2(e.target.value) } /> <br />
                </div>
                <div class="form-group">
                    <label>Skill 3: </label> 
                    <input class="form-control" type="text" name="skill3" value={skill3} onChange={ (e) => setSkill3(e.target.value) } /> <br />
                </div>
                <button class="form-control btn btn-primary" type="submit" value="Add Pet">Add pet</button>
            </form>
        </div>
    );
}

export default Form;