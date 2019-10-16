import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// * COMPONENT IMPORTS
import Friends from './components/Friends';
import Form from './components/Form';

// * PRIVATE ROUTE
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* // * ROUTES
      */}

      <Router>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route path="/login" component={Form} />
          <Route component={Form} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
