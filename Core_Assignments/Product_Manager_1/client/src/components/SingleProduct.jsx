import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const SingleProduct = (props) => {
    const {id} = useParams()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((result) => setOneProduct(result.data))
        .catch((error) => console.log(error))
    }, [id])

    return (
    <div>
        {oneProduct.map((oneProduct, index) => {
            return (
            <body key = {index}>
            <h1>{oneProduct.title}</h1>
            <h3>Price: ${oneProduct.price}</h3>
            <h3>Description: {oneProduct.description}</h3>
            </body> )
        })
        }
    </div>

)
}

export default SingleProduct