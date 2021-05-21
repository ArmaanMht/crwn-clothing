import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
