import React from 'react';
import CreateTodo from './create-todos';
import TodosList from './todos-list';

const todos = [
    {
        task: 'make React Tutorial',
        isCompleted: false
    },
    {
      task: 'eat dinner',
        isCompleted: true
    }
];

export default class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todos
        }
    }
    
    render(){
        return (
            <div>
                <h1>React ToDos App</h1>
                <CreateTodo
                    createTask={ this.createTask.bind(this) }/>
                <TodosList
                    todos={ this.state.todos }
                    toggleTask={ this.toggleTask.bind(this) }
                    saveTask={ this.saveTask.bind(this) } />
            </div>
        )
    }

    toggleTask(task) {

        const foundTodo = _.find(this.state.todos, todo => todo.task === task);

        //swap to opposit
        foundTodo.isCompleted = !foundTodo.isCompleted;

        //refresh th eapp
        this.setState({ todos: this.state.todos });
    }


    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask){
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }
}