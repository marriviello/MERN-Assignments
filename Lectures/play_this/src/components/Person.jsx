import { useState } from 'react'

const Person = (props) => {
    const {name, height, gender, money, age} = props
    const [likes, setLikes] = useState(0)
    const [cardBackground, setCardBackground] = useState('')

    const likeMe = () => {
        setLikes(likes+1)
    }

    const changeColor = () => {
        setCardBackground('lightblue')
    }

    const resetColor = () => {
        setCardBackground('')
    }

    return (
        <div
        style={{backgroundColor: cardBackground}}
        onMouseOver={changeColor}
        onMouseOut={resetColor}
        >
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Gender: {gender}</p>
            <p>Money: {money}</p>
            <p>Age: {age}</p>
            <p>Likes: {likes}</p>
            <button onClick={likeMe}>I like {name}</button>
        </div>
    )
}

export default Person;