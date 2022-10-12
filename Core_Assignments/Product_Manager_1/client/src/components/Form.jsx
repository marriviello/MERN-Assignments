import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description
        }).then((result) => {
            console.log(result.data)
            setTitle("")
            setDescription("")
            setPrice("")
        }).catch((err)=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={ submitHandler }>
                <h1>Product Manager:</h1>
                <div>
                    <label>Title: </label> 
                    <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value) } />
                </div>
                <div>
                    <label>Price: </label> 
                    <input type="text" name="price" value={price} onChange={ (e) => setPrice(e.target.value) } />
                </div>
                <div>
                    <label>Description: </label> 
                    <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value) } />
                </div>

                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Form;