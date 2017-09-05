import React from 'react';
import PropTypes from 'prop-types';

class TodoSearch extends React.Component {
    static propTypes = {
        onSearch : PropTypes.func.isRequired
    }

    handleSearch = () => {
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(showCompleted, searchText);
    }

    render() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder = "Search todo" onChange = {this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange = {this.handleSearch}/>Show completed todos
                    </label>
                </div>
            </div>
        )
    }
}

module.exports = TodoSearch;