import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import "./App.css";
import Cart from './Cart';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
