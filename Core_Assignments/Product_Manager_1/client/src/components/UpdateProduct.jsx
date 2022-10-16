import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            }).catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/edit/${id}`, {
            title,
            price,
            description 
        }).then(res => {
                console.log(res)
                navigate("/")
        }).catch(err => console.log(err))
    }
    
    return (
        <div>
            <h1>Update the Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}
export default UpdateProduct;

