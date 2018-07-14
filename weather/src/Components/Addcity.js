import React from "react";
import './styles.css'

class Addcity extends React.Component{

    handleChange= e =>{
        const cityname = e.target.value;
    	this.setState(()=> ({
    		cityname
    	}))
    }

    handleSubmit= e =>{

    	this.props.city_name(this.state.cityname)
    }

	render(){
		return(
			<div className="entervalues">
				<input type="text" onChange={this.handleChange} placeholder="Enter the city name"></input>
				<button type="submit" onClick={this.handleSubmit}> Go!</button>
			</div>
		)
	}
}
export default Addcity;