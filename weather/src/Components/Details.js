import React from "react"
import './styles.css'
import { Link } from "react-router-dom"

const conversion= value => Math.round(value - 273);

class Details extends React.Component{
	render(){
		console.log(this.props)
		let cardId=this.props.match.params.cardId;
		//console.log("cardId", cardId)
		//console.log("date",this.props.data[cardId].dt_txt)
		//console.log("data",this.props.data)
		return(
			<div className="detailsContainer">
				<div className="detailsCard">
					<h1>Weather Details</h1>
					<p>Date and Time: {this.props.data[cardId].dt_txt}</p>
					<p>Maximum Temperature: {conversion(this.props.data[cardId].main.temp_max)}</p>
					<p>Minimum Temperature: {conversion(this.props.data[cardId].main.temp_min)}</p>
					<p>Rain: {this.props.data[cardId].weather[0].main}</p>
					<p>Rain Type: {this.props.data[cardId].weather[0].description}</p>
	            </div>
	            <Link to={`/`} >
	            <button id="button_back"> back </button>
	            </Link>
	        </div>
		)
	}
}

export default Details;