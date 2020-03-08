import React, { Component } from 'react';
import Weather from './Weather';

class WeatherForm extends Component {

  state = {
    conditions: "Sunny",
    highF: 72,
    lowF: 23,
    list: [
      { conditions: "Rainy", high: 62, low: 55 },
      { conditions: "Cloudy", high: 52, low: 35 },
    ]
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
      high: this.state.highF,
      low: this.state.lowF
    };

    // return an object that gives new value (to set state)
    this.setState(prev => {
      const newList = prev.list.slice(0);
      newList.push(newItem);
      return {
        list: newList
      };

    });
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
        {this.state.list.map(data =>
          <Weather conditions={data.conditions} highF={data.high} lowF={data.low} />
        )}
      </div>
    );
  }
}

export default WeatherForm;