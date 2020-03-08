import React from 'react';
import './App.css';
import Weather from './components/Weather';
import WeatherForm from './components/WeatherForm';
import Grade from './components/Grade';
import GradeForm from './components/GradeForm';
import Inbox from './components/Inbox/Inbox';
import TimeLog from './components/TimeLog/TimeLog';

function App() {
  return (
    <div className="App">
        <Inbox/>
      <TimeLog/>
      <WeatherForm/>
      <GradeForm/>
    
    </div>
  );
}

export default App;
