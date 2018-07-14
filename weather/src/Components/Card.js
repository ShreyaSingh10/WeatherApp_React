import React from "react"
import './styles.css'

const conversion= value => Math.round(value - 273);
	
class Card extends React.Component{
	render(){
		return(
			<div className="card">
			    <div>Date and Time:{this.props.date_time}</div>
				<br/>
				<div>Max temp:{conversion(this.props.temp_max)}</div>
				<br/>
				<div>Min temp:{conversion(this.props.temp_min)}</div>
				<br/>
				<div>Rain:{this.props.rain}</div>
				<br/>
				<div>Rain:{this.props.description}</div>
            </div>
		)
	}
}
export default Card;