import React from "react";

class Weather extends React.Component {
    render(){
        return(
            <div className="weather" id="weather" >
                {this.props.icon && <img className="icon" alt="" src={`https://openweathermap.org/img/w/${this.props.icon}.png`}></img>}
                {this.props.city && this.props.country && <p className="place"><b>Location:</b> {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p className="temp"><b>Temperature:</b> {this.props.temperature}℃</p>}
                {this.props.humidity && <p className="hum"><b>Humidity:</b> {this.props.humidity}%</p>}
                {this.props.description && <p className="cond"><b>Conditions:</b> {this.props.description}</p>}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
};

export default Weather;
