import { useState } from 'react'

const Person = (props) => {
    const {name, height, gender, money, age, index, people, setPeople} = props
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

    const updateMoney = (index, moreMoney) => {
        const newPeople = [...people]
        if(moreMoney){
            newPeople[index].money++
        }   else {
            newPeople[index].money--
        }
        setPeople(newPeople)
    }

    const deletePerson = (personIndex) => {
        setPeople(people.filter((person, index) => personIndex !== index))
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
            <button className='moMoney' onClick={e=>updateMoney(index, true)}>Give {name} money</button>
            <button className='noMoney' onClick={e=>updateMoney(index, false)}>Take money from {name}</button>
            <button className='bye' onClick={e=>deletePerson(index)}>Delete {name}</button>
        </div>
    )
}

export default Person;