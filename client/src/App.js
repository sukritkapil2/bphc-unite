import React,{useEffect} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import CabPage from './Components/CabPage';
import {connect} from 'react-redux'
import {fetchUserAction} from './actions/myaction'

function App(props)
{
  useEffect(()=>{
    props.fetch_user()
  },[])
  return(
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component = {Dashboard}></Route>
      <Route exact path="/cabs" component={CabPage}></Route>
    </Router>
  )
}
const mapDispatchToProps = (dispatch)=>{
  return{
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}
export default connect(null,mapDispatchToProps)(App);
