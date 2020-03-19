import React, {Component} from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo'


class App extends Component{
  state={
    todos: [
      {todoName: 'stay home', id:1},
      {todoName: 'read a book', id:2}
    ]
  }

  newTodoAdd = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]

    this.setState({
      todos: todos
    })
  }

  newTodoDelete = (id) =>{
    let todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  render(){
    return(
      <div className="list">
        <h1>Kasia's todo list</h1>
        <NewTodo newTodoAdd={this.newTodoAdd} />
        <Todos todos={this.state.todos} newTodoDelete={this.newTodoDelete}/>
      </div>

    )
  }
  
}

export default App;
