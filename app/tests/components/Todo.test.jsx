import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Todo from 'Todo';

describe("Todo", () => {
    it('Should exist', () => {
        expect(Todo).toExist();
    })

    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id : 1,
            text : 'Write todo.test.jsx test',
            completed : false
        };

        var spy = expect.createSpy();

        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle = {spy}/>);
        todo.refs.toggleCheckBox.checked = true;

        TestUtils.Simulate.change(todo.refs.toggleCheckBox);

        expect(spy).toHaveBeenCalledWith(1);
    })
})
