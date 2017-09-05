import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    static propTypes = {
        onAddNewTodo : PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault();

        var text = this.refs.todoText.value;
        if (text.length > 0) {
            this.refs.todoText.value = "";
            this.props.onAddNewTodo(text);
        } else {
            this.refs.todoText.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit} ref="todoForm">
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add todo</button>
                </form>
            </div>
        )
    }
}

module.exports = AddTodo;