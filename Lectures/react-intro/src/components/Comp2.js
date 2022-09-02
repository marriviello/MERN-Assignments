import React from 'react'

const Comp2 = (props) => {

    const myStyle={
        border: '2px solid black',
        backgroundColor: 'blue',
        padding:'10px'
    }

    const {newData, newMessage} = props

    return (
    <div style={{border: '2px solid blue', backgroundColor: 'yellow'}}>
        <h1>New comp</h1>
        <h2>Passed through from App.js: {newData}</h2>
        <h2>Passed through from App.js: {newMessage}</h2>
        <button style={myStyle}>Click here</button>
    </div>
    )
}

export default Comp2


//use rafce shortcut to start component 
