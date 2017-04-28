import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyCf27eNNWNW8qZP_LIV_QD2idGmAF0QxJA";

YTSearch({key: API_KEY, term: 'surfboards'}, function(responseData){
    console.log(responseData);
});

//create a new component. This component should produce some html
const App = function () {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

//Take this component's generated html and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));