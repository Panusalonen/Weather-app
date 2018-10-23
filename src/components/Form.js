import React from "react";

class Form extends React.Component {
    render(){
        return(
            <form className="form" id="form" onSubmit={this.props.getWeather}>
                <input id="city" className="input" type="text" name="city" placeholder="City"/>
                <input id="country" className="input" type="text" name="country" placeholder="Country"/>
                <input className="button" type="submit" name="submit" value="Get Weather"/>
            </form>
        );
    }
};

export default Form;
