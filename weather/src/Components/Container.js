import React from "react";
import Addcity from "./Addcity"
import DisplayWeather from './DisplayWeather';
import axios from "axios"

class Container extends React.Component{
	state={
		weather:null

	}

    getCityWeather=(cityname)=>{
    	axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityname},in&APPID=0ed8935ec08da2ab5c2af86e5891c5a4`)
      	.then(response => {

      		console.log(response)
      		this.setState({

      			weather:response.data.list
      		})
      	})
    	
    }

	render(){
		console.log(this.state.weather);
		return(

			<div  className="card-container">
				<Addcity  city_name={this.getCityWeather}/>
				<DisplayWeather data={this.state.weather}/>
				
			</div>
		)
	}
}
export default Container;