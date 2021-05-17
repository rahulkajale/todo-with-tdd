import React, { useState } from 'react'


function Todo({ newTodo }) {
    const [todoData, updateTodoData] = useState({});
    const addTodoListener = () => {
        newTodo(todoData)
        updateTodoData({})
    }

    const newTodoChangeListener = ({ target: { value } }) => {
        updateTodoData({
            title: value,
            completed: false,
            isEditing: false
        })
    }
    return (
        <div>
            <input data-testid="add-input" onChange={newTodoChangeListener} value={todoData.title ? todoData.title : ""} type="text"></input>
            <button disabled={!todoData.title} onClick={addTodoListener}>Add</button>
        </div>
    )
}

export default Todo
