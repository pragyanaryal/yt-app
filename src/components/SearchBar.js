import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''}

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search for a video</label>
                        <input
                            value={this.state.term}
                            type="text"
                            onChange={ e=> {this.setState({ term: e.target.value })}}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;