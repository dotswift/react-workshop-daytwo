import React, { Component } from 'react';
import Grade from './Grade';

class WeatherForm extends Component {

    state = {
        label: 'JavaScript Quiz',
        score: '3'
    }
    handleChangeLabel = e => {
        this.setState({
            label: e.target.value
        });
    }
    handleChangeScore = e => {
        this.setState({
            score: e.target.value,
        
        });
    }





    render() {
            let pass

            if (this.state.score >= 12){
                pass = true
            }


        return (

            <div className="WeatherForm">
                <Grade label={this.state.label} score={this.state.score} total={20} passing={pass}></Grade>
                <p>
                    <form>
                        <label>Label</label>
                        <input value={this.state.label} onChange={this.handleChangeLabel} ></input>
                        <label>Score</label>
                        <input value={this.state.score} onChange={this.handleChangeScore} type="number"></input>

                    </form>
                </p>
            </div>

            // <div>
            //     <h3>{this.state.label}</h3>
            //     <b>Score {this.state.score}  </b> of {this.state.total}
            //     <form>

            //         <p>  <label>Score</label>

            //         <p> <label>Percentage</label></p>
            //         <p><label>Passing?</label></p>
            //         <label> Label </label>
            //             <input value={this.state.label} onChange={this.handleChangeConditions}></input>
            //         <label> Score </label>
            //             <input value={this.state.score} onChange={this.handleChangeConditions}></input></p>
            //     </form>
            // </div >
        )
    }



} export default WeatherForm;