import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
    </div>
  );
}

export default App;
