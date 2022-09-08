import React, {useState} from 'react'

const Person = (props) => {
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hair}</p>
            <button onClick={(e)=> setAge(age +1)}>Birthday Button for {props.firstName}</button>
        </div>
    )
}

export default Person;