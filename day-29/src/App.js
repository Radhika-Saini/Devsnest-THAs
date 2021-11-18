import React from 'react';
import './App.css';
import { Container, Card } from '@material-ui/core';
import Inputdata from './Inputdata';
import WeatherReport from './WeatherReport';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Card elevation={7} className="form">
          <Inputdata />
          <WeatherReport />
        </Card>
      </Container>
    </div>
  );
}


export default App;
