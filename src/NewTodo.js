import React, {Component} from 'react';

class NewTodo extends Component{
    state = {
        todoName: null
    }

    handleChange = (e) =>{
        this.setState({
            todoName: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.newTodoAdd(this.state);
        this.setState({
            todoName: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="todo">Add new Todo</label> */}
                    <input type="text" id="todo" onChange={this.handleChange} placeholder="Add new todo" value={this.state.todoName}/>
                </form>
            </div>
        )
    }
}

export default NewTodo;