import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    state={
        value:''
    }

    timeout = null;

    search = (e)=>{
        this.setState({value: e.target.value});
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.searchItems(this.state.value);
        }, 500);
    }
    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                <FontAwesomeIcon className="rmdb-fa-search" icon={faSearch} name="search" size="2x"/>
                <input
                type="text"
                className="rmdb-searchbar-input"
                onChange = {this.search}
                value={this.state.value}
                />
                </div>
            </div>
        );
    }
}

export default Search;