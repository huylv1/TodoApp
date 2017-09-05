import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import AddTodo from 'AddTodo';

describe("AddTodo", () => {
    it('Should exist', () => {
        expect(AddTodo).toExist();
    })

    it('Should call onAddNewTodo prop with valid data', () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo = {spy}/>);
        addTodo.refs.todoText.value = "Check mail";

        TestUtils.Simulate.submit(addTodo.refs.todoForm);

        expect(spy).toHaveBeenCalledWith("Check mail");
    })
    
    it('Should not call onAddNewTodo prop when invalid input', () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo = {spy}/>);
        addTodo.refs.todoText.value = "";

        TestUtils.Simulate.submit(addTodo.refs.todoForm);

        expect(spy).toNotHaveBeenCalled();
    })
})
