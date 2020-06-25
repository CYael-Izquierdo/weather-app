import React from "react";
import PropTypes from "prop-types";
import {kelvinsToCelsius} from "../helper";

const Weather = ({result}) => {

    const {name, main} = result;

    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The temperature in {name} is: </h2>
                <p className="temperature">{kelvinsToCelsius(main.temp).toFixed(2)} <span>&#x2103;</span></p>
                <p>Maximum temperature: {kelvinsToCelsius(main.temp_max).toFixed(2)}<span>&#x2103;</span></p>
                <p>Minimum temperature: {kelvinsToCelsius(main.temp_min).toFixed(2)}<span>&#x2103;</span></p>
            </div>
        </div>
    );
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
};


export default Weather;