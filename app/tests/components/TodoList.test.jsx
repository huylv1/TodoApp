import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TodoList from 'TodoList';

import Todo from 'Todo';
import $ from 'jquery';

describe("TodoList", () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    })

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id : 1,
                text : 'Do something'
            },
            {
                id : 2,
                text : 'Check mail'
            }
        ]

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(todos.length);
        
    })

    it('should render empty message if no todos', () => {
        var todos = []

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
        
    })
})
