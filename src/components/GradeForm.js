import React, { Component } from 'react';
import Grade from './Grade';

class GradeForm extends Component {

    state = {
        label: 'JavaScript Quiz',
        score: '3',
        grades: [
            { label: 'Important Test', score: 20 },
            { label: 'Nuclear Energy Exam', score: 1 }
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

    render() {
        let pass

        if (this.state.score >= 12) {
            pass = true
        }

        return (
            <div className="GradeForm">
                <Grade label={this.state.label} score={this.state.score} total={20} passing={pass}></Grade>
                <p>
                    <form>
                        <label>Label</label>
                        <input value={this.state.label} onChange={this.handleChangeLabel} ></input>
                        <label>Score</label>
                        <input value={this.state.score} onChange={this.handleChangeScore} type="range" id="points" name="points" min="0" max="20"></input>

                    </form>
                </p>

                {this.state.grades.map(data => <Grade label={data.label} score={data.score} total={20} /> )}

            </div>
        )
    }
} export default GradeForm;