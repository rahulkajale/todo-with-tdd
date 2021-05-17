import React, { useState } from 'react';
import "./TodoList.css";

function TodoList({ list }) {
    const [_, updateTodoList] = useState(list);

    const updateTodo = ({ target: { value } }, index) => {
        list[index].title = value;
    }

    const editTodo = (_, index) => {
        list[index].isEditing = Boolean(!list[index].isEditing);
        updateTodoList([...list]);
    }

    const toggleStatus = (_, index) => {
        list[index].completed = Boolean(!list[index].completed);
        updateTodoList([...list])
    }

    return (
        <React.Fragment>
            <ul >
                {list.map((item, index) => {
                    return (<div key={item.title + index}>
                        {!list[index].isEditing ?
                            <li className={`${list[index].completed ? "green" : "red"}`}>
                                {list[index].title}
                            </li> :
                            <li>
                                <input
                                    data-testid="input"
                                    style={{ display: 'block' }}
                                    onChange={(e) => updateTodo(e, index)}
                                />
                            </li>
                        }
                        <button onClick={(e) => editTodo(e, index)}>{list[index].isEditing ? 'Done' : 'Edit'}</button>
                        <button onClick={(e) => toggleStatus(e, index)}>{list[index].completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
                    </div>)
                }
                )}
            </ul>
        </React.Fragment>
    )
}

export default TodoList;
