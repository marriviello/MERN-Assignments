import React, { useState } from  'react';
    
const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault()
        const newUser = { firstName, lastName, email, password, confirm }
        console.log("Welcome", newUser)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirm("")
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <h1>Form:</h1>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Your Form Data:</h2>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirm} </p>
            </div>
        </div>
    );
};
    
export default Form;
