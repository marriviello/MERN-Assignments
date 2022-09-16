import React, {useState} from 'react'


const List = (props) => {

    //Deconstruct props
    const {toDoList, setToDoList} = props

    const handleCompleted = (todo) => {
        todo.markedDelete = true
        let updateToDo = [...toDoList]
        setToDoList(updateToDo)
    }

    const styled = (markedDelete) =>{
        if(markedDelete == true){
            return "completed"
        } else{
            return "notCompleted"
        }
    }

    const deleteToDo = (contentFromClick) =>{
        setToDoList(toDoList.filter((todo, index)=> todo.content !== contentFromClick))
    }

    return (
    <div>
        {
            toDoList.map((todo, index) =>(
                <div className={styled(todo.markedDelete)} key={index}>
                    <p>{todo.content}</p>
                    <input type="checkbox" onChange={(e)=> handleCompleted(todo)}/>
                    <button onClick={(e)=>deleteToDo(todo.content)}>Delete</button>
                </div>
            ))
        }
    </div>
    )
}

export default List