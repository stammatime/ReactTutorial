import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCf27eNNWNW8qZP_LIV_QD2idGmAF0QxJA";

YTSearch({key: API_KEY, term: 'surfboards'}, function(responseData){
    console.log(responseData);
});

//create a new component. This component should produce some html
class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({videos: videos});
    });

    }
    render(){
        return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}

//Take this component's generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));