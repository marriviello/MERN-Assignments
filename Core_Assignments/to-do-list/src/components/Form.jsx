import React, {useState} from 'react'

const Form = (props) => {
    //State for Form text
    const [toDoText, setToDoText] = useState('')

    //deconstruct props
    const {toDoList, setToDoList} = props

    //Submit function
    const submitHandler = (e) =>{
        e.preventDefault()
        setToDoList([...toDoList, {
            'content': toDoText,
            'markedDelete': false
        }])
        setToDoText('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={toDoText} onChange={(e)=> setToDoText(e.target.value)}/>
                <button>Add To Do</button>
            </form>
        </div>
)
}

export default Form