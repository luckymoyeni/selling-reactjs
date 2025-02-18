import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
function App() {

  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/checkout">
             <Header />
             <Checkout />
           </Route>
           <Route path="/login">
             <Login />
           </Route>
           <Route path="/">
             <Header/>
             <Home />
           </Route>
        </Switch>
       </div>
    </Router>

  );
}
{
  /* we need react router */
}

{
        /* localhost.com */
}
{
        /* localhost.com/checkout */
}
      {/* localhost.com/login*/}
export default App;
