import React from "react";
import './styles.css';

class Addcity extends React.Component{

	state={
		geolocationError:null,
		latitude:'',
		longitude:''
	}

    handleChange= e =>{
        const cityname = e.target.value;
    	this.setState({
    		cityname
    	})
    }

    handleSubmit= e =>{
    	this.props.city_name(this.state.cityname)
    }

    getLocation =()=> {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition((position)=>{

	        	this.setState({
	        		latitude:position.coords.latitude,
	        		longitude:position.coords.longitude
	        	},()=>this.props.city_coordinates(this.state.latitude,this.state.longitude)
	        		)
	        });
	    } else {
	        this.setState({
	        	geolocationError:"Geolocation is not supported by this browser."
	        });
	    }
	}




	render(){
        console.log("state" , this.state)
		const { geolocationError } = this.state;
		return(

			<div className="entervalues">
			    <h1> Whats with the weather?</h1>
				<input type="text" onChange={this.handleChange} placeholder="Enter the city name"></input>
				<button id="button_go" type="submit" onClick={this.handleSubmit}> Go!</button>
				<input type="image" id="button_location" alt="submit" src="https://www.enisa.europa.eu/topics/trainings-for-cybersecurity-specialists/online-training-material/images/whitakergroupgooglelocationicon.png/image"
				onClick={this.getLocation}></input>
				<p id="demo"></p>
				{geolocationError?<div>{geolocationError}</div>:null}
			</div>
		)
	}
}
export default Addcity;
