import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        // runs before each test in this block
        localStorage.clear();
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    })

    describe('setTodos', () => {

        it('should set valid todos array', () => {
            var todos = [
                {
                    id: 1,
                    text: 'test',
                    completed: false
                }
            ]

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        })

        it('should not set invalid todos array', () => {
            var todos = {
                a: 'b'
            };

            TodoAPI.setTodos(todos);
            expect(localStorage.getItem('todos')).toBe(null);
        })
    })

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        })

        it('should return todo if valid array in localstorage', () => {
            var todos = [
                {
                    id: 1,
                    text: 'test',
                    completed: false
                }
            ]

            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoAPI.getTodos()).toEqual(todos);
        })

    })

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'Some text here',
                completed: true
            }, {
                id: 2,
                text: "Other text here",
                completed: false
            }, {
                id: 3,
                text: 'Some text here',
                completed: true
            }
        ]

        it('should return all item if showCompeted is true', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        })

        it('should return non-completed todos when showCompleted is false', () => {
            var filterTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filterTodos.length).toBe(1);
        })

        it('should sort by completed status', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
        })

        it('should filter by searchText', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filterTodos.length).toBe(2);
        })

        it('should return all todos if searchText is empty', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        })
    })
})
