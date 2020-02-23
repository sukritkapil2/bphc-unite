import React from "react"
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import signinButton from './images/signinButton.png'
import '../Stylesheets/login.css'
const Login = (props)=>{
    const bg = {
      backgroundImage: "url(/images/frontpage.png)",
      width: "1000px",
      height: "1000px"
    };
    return (
      <div className='bg'>
        <a href="/auth/google"><img className="signin" src={signinButton} /></a>
      </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps)(Login);