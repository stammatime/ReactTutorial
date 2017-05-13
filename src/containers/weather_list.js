import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const country = cityData.city.country;
        const temps = cityData.list.map(weather =>weather.main.temp);
        const pressure = cityData.list.map(weather =>weather.main.pressure);
        const humidity = cityData.list.map(weather =>weather.main.humidity);
        console.log(temps);
        return(
            <tr key={name}>
                <td>{name}, {country}</td>
                <td>
                    <Sparklines data={temps} width={100} height={20}>
                        <SparklinesLine color="red"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={pressure} width={100} height={20}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines data={humidity} width={100} height={20}>
                        <SparklinesLine color="green"/>
                    </Sparklines></td>
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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