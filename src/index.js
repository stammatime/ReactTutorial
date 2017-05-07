import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = "AIzaSyCf27eNNWNW8qZP_LIV_QD2idGmAF0QxJA";

//create a new component. This component should produce some html
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('cats');
}

videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    });
}

    render(){
        //returns new function that can only be called every 300ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
        return (
        <div>
            <SearchBar onSearchTermChange = {videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
        );
    }
}

//Take this component's generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));