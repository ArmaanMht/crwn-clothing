import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import ShopPage from './pages/shop/shoppage.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user)
      // console.log(this.state.currentUser)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>{
          console.log(snapShot.data())

          })
        })
      } else {
        this.setState({ currentUser: userAuth });
      }

      console.log(this.state)

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
