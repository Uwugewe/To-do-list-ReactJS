import React, {Component} from 'react';
import './TodoList.css';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    // displayX = (bool) => {
    //     if(bool == true) {
    //         return(this._closeButton.className='display')
    //     } else {
    //     return(this._closeButton.className='noDisplay')
    //     }
    // }

    render(){
    let tasksArr = this.props.tasksObj;

    let todoList = tasksArr.map( (task) => {
        return(<li onMouseEnter={ () => {this._closeButton.className='display';}} onMouseLeave={ () => {this._closeButton.className='noDisplay';}} key={task.id.toString()}>{task.taskContent}<span key={task.id.toString()} ref={(element => {this._closeButton = element;})} onClick={ () => {
            this.props.removeTask(task.id)
            }
        } className='noDisplay'>X</span> <input type='checkbox'></input></li>)
    });

    // let todoList = () => {
    //     console.log(tasksArr);
    //     let liElements = [];

    //     for(let element of tasksArr) {
    //         liElements.push(<li key={element.id}>{element.taskContent} <span ref={ (element => {this._closeButton = element;})} className='close-X'>X</span> <input type='checkbox'></input></li>);
    //     }

    //     return(liElements);
    // }

    return(
        <div className='TasksList'>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}
}

export default TodoList;