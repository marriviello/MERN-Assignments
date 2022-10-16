import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'

const SingleProduct = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [oneProduct, setOneProduct] = useState({})

    // console.log(`This is my id ${id}`)
    // console.log(`Console logging oneProduct ${oneProduct}`)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((result) => {
            setOneProduct(result.data)
        }).catch((error) => console.log(error))
    }, [id])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
    <div>
        <h1>{oneProduct.title}</h1>
        <h3>Price: ${oneProduct.price}</h3>
        <h3>Description: {oneProduct.description}</h3>
        <Link to={"/"}>View All Products</Link><br/>
        <Link to={`/product/edit/${oneProduct._id}`}>Edit {oneProduct.title} </Link><br/>
        <button onClick={(e)=>deleteProduct(oneProduct._id)}>Delete Product</button>
    </div>

)
}

export default SingleProduct