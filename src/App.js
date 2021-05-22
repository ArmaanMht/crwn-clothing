import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(this.state.currentUser)

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (

      <div className="App">
        <Header currentuser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUp}></Route>

        </Switch>
      </div>
    )
  }
}

export default App;
