import React, { useState } from  'react';
    
const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [firstError, setFirstError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastError, setLastError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirm, setConfirm] = useState("")
    const [confirmError, setConfirmError] = useState("")
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault()
        const newUser = { firstName, lastName, email, password }
        console.log("Welcome", newUser)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }

    const checkFirst = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length<2){
            setFirstError("First name needs to be at least 2 characters.")
        } else {
            setFirstError("")
        }
    }

    const checkLast = (e) =>{
        setLastName(e.target.value);
        if(e.target.value.length<2){
            setLastError("Last name needs to be at least 2 characters.")
        } else {
            setLastError("")
        }
    }
    
    const checkEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value.length<2){
            setEmailError("Email needs to be at least 2 characters.")
        } else {
            setEmailError("")
        }
    }

    const checkPassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length<8){
            setPasswordError("Password needs to be at least 8 characters.")
        } else {
            setPasswordError("")
        }
    }

    const checkConfirm = (e) =>{
        setConfirm(e.target.value);
        if(e.target.value != password){
            setConfirmError("Passwords need to match.")
        } else {
            setConfirmError("")
        }
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                <h1>Form:</h1>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ checkFirst } />
                    {
                        firstError ?
                        <p>{firstError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ checkLast } />
                    {
                        lastError ?
                        <p>{lastError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ checkEmail } />
                    {
                        emailError ?
                        <p>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ checkPassword } />
                    {
                        passwordError ?
                        <p>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirm} onChange={ checkConfirm } />
                    {
                        confirmError ?
                        <p>{confirmError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default Form;
