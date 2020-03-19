import React from 'react';

const Todos = (props) =>{
    const {todos} = props;
    let {newTodoDelete} = props;
    const todoList = todos.map(todo=>{
        return (
            <div className="todo" key={todo.id}>
                <span>{todo.todoName}</span>
                <span>
                    <button onClick={() => {newTodoDelete(todo.id)}}>Delete Todo</button>
                </span>
            </div>
        )
    })

    return(
        <div className="todoList">
            {todoList}
        </div>
    )
}

export default Todos;