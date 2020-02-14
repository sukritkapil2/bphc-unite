import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import CabPage from './Components/CabPage';
class App extends React.Component
{
  render()
  {
    return(
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/cabs" component={CabPage}></Route>
      </Router>
    )
  }
}

export default App;
