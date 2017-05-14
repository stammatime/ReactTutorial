import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const country = cityData.city.country;
        const tempsF = _.map(cityData.list.map(weather =>weather.main.temp), kelv => {return kelv*(9/5)-459.67});
        const pressure = cityData.list.map(weather =>weather.main.pressure);
        const humidities = cityData.list.map(weather =>weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        //const lon = cityData.city.coord.lon;
        //const lat = cityData.city.coord.lat;

        //console.log(tempsF);
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={tempsF} color="orange" units="F"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%"/>
                </td>
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}
/*
function mapStateToProps(state){
    return {weather: state.weather}
} 
equivalent to below
*/

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);