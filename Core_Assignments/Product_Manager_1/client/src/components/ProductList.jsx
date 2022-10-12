import React, {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const {product, setProduct} = props

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
        .then((result) => setProduct(result.data))
        .catch((error) => console.log(error))
    }, [setProduct])

    return (
        <div>
            <h2>All Products:</h2>
            {
                product.map((product, index) => {
                    return <p key={index}>
                        <Link to ={`product/${product._id}`}>
                        {product.title} 
                        </Link>
                        </p>
                })
            }
        </div>
    )
}

export default ProductList