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
            <label name="add-todo" htmlFor="add-todo-input">Add Todo</label>
            <input id="add-todo-input" data-testid="add-input" onChange={newTodoChangeListener} value={todoData.title ? todoData.title : ""} type="text"></input>
            <button disabled={!todoData.title} onClick={addTodoListener}>Add</button>
        </div>
    )
}

export default Todo
