import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {

  state = {
    conditions: "Sunny",
    highF: 72,
    lowF: 23,
  }



  handleChangeConditions = e => {
    this.setState({
      conditions: e.target.value
    });
  }

  handleChangeHighF = e => {
    this.setState({
      highF: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      conditions: this.state.conditions,
      highF: this.state.highF,
      lowF: this.state.lowF
    };
    console.log(this.props)
    this.props.onAdd(newItem);

    // this.setState({
    //   condtiions: "",
    //   high: 0,
    //   low: 0

    // });


   }

  render() {
    return (
      <div className="WeatherForm box">
        <Weather conditions={this.state.conditions}
          highF={this.state.highF}
          lowF={this.state.highF - 18} />
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Conditions</label>
            <input value={this.state.conditions}
              onChange={this.handleChangeConditions} />
          </p>
          <p>
            <label>High Temperature (F)</label>
            <input value={this.state.highF} type="number"
              onChange={this.handleChangeHighF} />
          </p>
          <p>
            <button type="submit">Add</button></p>
        </form>

      </div>
    );
  }
}

export default WeatherForm;