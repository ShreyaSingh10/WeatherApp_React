import React from 'react';
import './styles.css'
import Card from './Card'



export default class DisplayWeather extends React.Component {
    render() {
		const {data}= this.props;
		console.log('data=', data);
		return (
			<div>
			{ data ?
				<div>
				{data.map(item => { 
					return <Card 
							date_time={item.dt_txt}
							temp_max={item.main.temp_max} 
							temp_min={item.main.temp_min} 
							rain={item.weather[0].main}
							description={item.weather[0].description}
							/>
				})}
			    </div> 
			:null}
			</div>
		);
	}
}
