import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom'

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
