import React, {useState} from 'react'
import axios from 'axios'

const Form = (props) => {
    const {product, setProduct} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/products",{
            title,
            price,
            description
        }).then((result) => {
            console.log(`this is my result data ${result.data}`)
            setProduct([...product, result.data])
            setTitle("")
            setDescription("")
            setPrice("")
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <form onSubmit={ submitHandler }>
                <h1>Product Manager:</h1>
                <div>
                    <label>Title: </label> 
                    <input type="text" name="title" value={title} onChange={ (e) => setTitle(e.target.value) } /> <br />
                    { errors.title ? <span style={{color: "red"}}>{errors.title.message}</span>: null}
                </div>
                <div>
                    <label>Price: </label> 
                    <input type="text" name="price" value={price} onChange={ (e) => setPrice(e.target.value) } /><br />
                    { errors.price ? <span style={{color: "red"}}>{errors.price.message}</span>: null}
                </div>
                <div>
                    <label>Description: </label> 
                    <input type="text" name="description" value={description} onChange={ (e) => setDescription(e.target.value) } /> <br />
                    { errors.description ? <span style={{color: "red"}}>{errors.description.message}</span>: null}
                </div>

                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Form;