import React, {Component} from 'react';
import TodoList from './TodoList';

import './Todo.css';

class Todo extends Component {
    constructor (props) {
        super (props);
        this.state = {
            todoArr: [],
        }
    }

    AddTask = (event) => {
        event.preventDefault();

        let newTask = {
            id: Date.now(),
            taskContent: this._inputName.value
        }

        this.setState((state) => {
            return({todoArr: state.todoArr.concat(newTask)})
        });

        this._inputName.value='';
    
    }

    removeTaskMethod = (taskID) => {
        this.setState((state) => {
            return({
                todoArr: state.todoArr.filter((task) => {
                    return(task.id!=taskID)
                })
            })
        })
    }

    render() {
        return(
            <div className='TodoList'>
                <form onSubmit={this.AddTask}>
                    <input ref={(element => {this._inputName = element;})} type='text' id='task' placeholder='Add task to do' />
                    <button type='submit'>Add task</button>
                </form>
                <TodoList tasksObj={this.state.todoArr} removeTask={this.removeTaskMethod}/>
            </div>
        )
    }
}

export default Todo;