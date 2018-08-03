import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const conversion = value => Math.round(value - 273);

class Details extends React.Component {
  render() {
    let cardId = this.props.match.params.cardId;
    const { data } = this.props;
    return (
      <div className="detailsContainer">
        <div className="detailsCard">
          <h1>Weather Details</h1>
          <p>Date and Time: {data[cardId].dt_txt}</p>
          <p>Maximum Temperature: {conversion(data[cardId].main.temp_max)}</p>
          <p>Minimum Temperature: {conversion(data[cardId].main.temp_min)}</p>
          <p>Rain: {data[cardId].weather[0].main}</p>
          <p>Rain Type: {data[cardId].weather[0].description}</p>
        </div>
        <Link to={`/`}>
          <button id="button_back"> Back </button>
        </Link>
      </div>
    );
  }
}

export default Details;
