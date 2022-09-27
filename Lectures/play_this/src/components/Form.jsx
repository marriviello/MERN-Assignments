import React, {useState} from 'react'

const Form = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge] = useState('')
    const [city,setCity] = useState('')

    const obj={
        firstName,
        lastName,
        age,
        city
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(firstName && lastName && age && city){
            if(firstName.length >3){
            console.log(obj)
            }
        } else {
            setFirstName('')
            setLastName('')
            setAge('')
            setCity('')
        }
    }

    return (
        <div>
            <form className="form col-4 mx-auto" onSubmit={submitHandler}>
                <label className="form-label">First Name:</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} className="form-control"/>
                {
                    firstName && firstName.length < 3 ? <p className="text-danger">First name must be more than 3 characters!</p> : null
                }
                <label className="form-label">Last Name:</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} className="form-control"/>
                <label className="form-label"> Age:</label>
                <input type="text" onChange={(e)=>setAge(e.target.value)} className="form-control"/>
                <label className="form-label">City:</label>
                <input type="text" onChange={(e)=>setCity(e.target.value)} className="form-control"/>
                <button className="btn btn-primary mt-3 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Form