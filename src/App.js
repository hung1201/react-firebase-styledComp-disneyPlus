import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
// ================================
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/details/:id" component={Details}>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
