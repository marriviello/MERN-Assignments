import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Other = (props) => {

    const {word, color, bgColor} = useParams()
    
    return (
        <div>
            {
                isNaN(word)?
                <p style=
                    {color?
                    {color:color, backgroundColor:bgColor}
                    :null
                }>
                This is a word: {word} </p>
                :
                <p>This is a number: {word}</p>
            }
            
            <Link to={"/home"}>Go to Home</Link>
        </div>
    )
}

export default Other