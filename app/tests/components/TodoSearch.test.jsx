import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import TodoSearch from 'TodoSearch';

describe("TodoSearch", () => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    })

    it('Should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    })

    it('Should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    })
})
