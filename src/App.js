import React from 'react';
import './App.css';
import WeatherList from './components/WeatherList';
import Grade from './components/Grade';
import GradeForm from './components/GradeForm';
import Inbox from './components/Inbox/Inbox';
import TimeLog from './components/TimeLog/TimeLog';

function App() {
  return (
    <div className="App">
      <Inbox />
      <TimeLog />
      <WeatherList />
      <GradeForm />
      <Grade />


    </div>
  );
}

export default App;
