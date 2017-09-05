import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TodoApp from 'TodoApp';

describe("TodoApp", () => {
    it('Should exist', () => {
        expect(TodoApp).toExist();
    })

    it('Should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text';

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos : []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe(todoText);

        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    })

    it('should toggle completed value when handleToggle called', () => {
        var todo = {
            id : 1,
            text : 'test',
            completed : false,
            createdAt : 0,
            completedAt : undefined
        }

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos : [todo]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(1);

        expect(todoApp.state.todos[0].completed).toBe(true);

        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    })

    it('should toggle todo from completed to incompleted', () => {
        var todo = {
            id : 1,
            text : 'test',
            completed : true,
            createAt : 0,
            completedAt : 123
        }

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos : [todo]});

        expect(todoApp.state.todos[0].completed).toBe(true);

        todoApp.handleToggle(1);

        expect(todoApp.state.todos[0].completed).toBe(false);

        expect(todoApp.state.todos[0].completedAt).toNotExist();
    })
})
