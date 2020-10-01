import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import Login from './Login';
import Register from './Register';

import { useStateValue } from './StateProvider';
import './App.css';

const promise = loadStripe('pk_test_kY4Ep2C4DIQSoqr7UHaGfA8N');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //The user is or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
