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
        <div>
            <input
                value={this.state.term}
                onChange={(event) => this.setState({term: event.target.value})}/>
        </div>
        );
    }

    /*
    onInputChange(event){
        console.log(event.target.value);
    }
    */

}

export default SearchBar;