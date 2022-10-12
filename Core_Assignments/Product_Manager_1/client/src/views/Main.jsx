import React, {useState} from 'react'
import Form from '../components/Form'
import ProductList from '../components/ProductList'

const Main = (props) => {

    const [product, setProduct] = useState([])

    return(
        <div>
            <Form product={product} setProduct={setProduct} />
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}

export default Main