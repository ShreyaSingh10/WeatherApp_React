import React from "react";
import './styles.css'



class Addcity extends React.Component{

	state={
		geolocationError:null,
		latitude:'',
		longitude:''
	}

    handleChange= e =>{
        const cityname = e.target.value;
    	this.setState(()=> ({
    		cityname
    	}))
    }

    handleSubmit= e =>{

    	this.props.city_name(this.state.cityname)
    }

    getLocation =()=> {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition((position)=>{
	            console.log(position)
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
				<input type="text" onChange={this.handleChange} placeholder="Enter the city name"></input>
				<button type="submit" onClick={this.handleSubmit}> Go!</button>
				<button type="submit" onClick={this.getLocation}>Get my location</button>
				<p id="demo"></p>
				{geolocationError?<div>{geolocationError}</div>:null}
			</div>
		)
	}
}
export default Addcity;