import React from 'react';
import moment from 'moment';

import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';

import uuidv4 from 'uuid/v4';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {
    state = {
        showCompleted : false,
        searchText : '',
        todos : TodoAPI.getTodos()
    }

    handleSearch = (showCompleted, searchText) => {        
        this.setState({
            showCompleted,
            searchText : searchText.toLowerCase()
        })

    }

    handleAddTodo = (text) => {
        this.setState({
            todos : [...this.state.todos, {
                id : uuidv4(), 
                text : text, 
                completed : false,
                createdAt : moment().unix(),
                completedAt : undefined
            }]
        })
    }

    componentDidUpdate(prevProps, prevState) {
        TodoAPI.setTodos(this.state.todos);
    }

    handleToggle = (id) => {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed  = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : undefined;
            }
            return todo;
        });

        this.setState(updatedTodos);
    }

    render() {
        var {todos, showCompleted, searchText} = this.state;        
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="container">
                    <TodoSearch onSearch={this.handleSearch}/>
                    <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
                    <AddTodo onAddNewTodo={this.handleAddTodo}/>
                </div>
            </div>
        )
    }
}

module.exports = TodoApp;