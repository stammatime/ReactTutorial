//search bar for user to search for videos
import React, {Component} from 'react';

class SearchBar extends Component {
    //gives access to all functionality that React.Component class has
    constructor(props){
        super(props);
        this.state = {term: 'starting value'};
    }


    //all components must have a render function
    render(){
        return (
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
        </div>
        );
    }

    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    

}

export default SearchBar;