import React from "react";
import Addcity from "./Addcity"
import DisplayWeather from './DisplayWeather';
import axios from "axios"
import {BrowserRouter, Route} from "react-router-dom"
import Details from './Details';

class Container extends React.Component{
	state={
		weather:null

	}

    getWeatherByCity=(cityname)=>{
    	axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname},in&APPID=0ed8935ec08da2ab5c2af86e5891c5a4`)
      	.then(response => {
      		this.setState({
      			weather:response.data.list
      		})
      	})
    }

    getWeatherByCoordinates= (lat, lon)=>{
    	axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=0ed8935ec08da2ab5c2af86e5891c5a4`)
      	.then(response => {
      		this.setState({
      			weather:response.data.list
      		})
      	})
    }

	render(){
		const {weather} = this.state;
		return(
			<BrowserRouter>
				<div className="container">
					<Route exact path='/' component={ ()=> <Addcity  city_name={this.getWeatherByCity} city_coordinates={this.getWeatherByCoordinates}/> }/>
					<Route exact path='/' component={ ()=> <DisplayWeather data={weather}/> }/>
					<Route exact path='/details/:cardId' component={(props)=> <Details {...props} data={weather}/> }/>
					{/*<Route exact path='/details/:cardId' component={Details}/>*/}
				</div>
				{/*<DisplayWeather data={this.state.weather}/>*/}
			</BrowserRouter>
		)
	}
}
export default Container;
