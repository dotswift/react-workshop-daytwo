import React, { Component } from 'react';
import Grade from './Grade';

class GradeForm extends Component {

    state = {
        label: 'JavaScript Quiz',
        score: '3',
        grades: [
            { label: 'Important Test', score: 20, total: 20, passing: true },
            { label: 'Nuclear Energy Exam', score: 1, total: 20, passing: false }
        ]

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
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
          label: this.state.label,
          score: this.state.score
        };
    
        // return an object that gives new value (to set state)
        this.setState(prev => {
          const newList = prev.grades.slice(0);
          newList.push(newItem);
          return {
            grades: newList
          };
    
        });
      }


    render() {
        let pass

        if (this.state.score >= 12) {
            pass = true
        }

        return (
            <div className="GradeForm">
                <Grade label={this.state.label} score={this.state.score} total={20} passing={pass}></Grade>
                <p>
                    <form onSubmit={this.handleSubmit}>
                        <label>Label</label>
                        <input value={this.state.label} onChange={this.handleChangeLabel} ></input>
                        <label>Score</label>
                        <input value={this.state.score} onChange={this.handleChangeScore} type="range" id="points" name="points" min="0" max="20"></input>
                    <p><button type="submit">Add</button></p>
                    </form>
                    
                </p>
                
                {this.state.grades.map(data => <Grade label={data.label} score={data.score} total={20} /> )}

            </div>
        )
    }
} export default GradeForm;