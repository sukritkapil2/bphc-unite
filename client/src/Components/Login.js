import React from "react"
import {connect} from 'react-redux';
import signinButton from './images/signinButton.png'
import '../Stylesheets/login.css'
const Login = (props)=>{
    return (
      <div className='bg'>
        <a href="/auth/google"><img className="signin" src={signinButton} alt="No Image"/></a>
      </div>
    );
}

const mapStateToProps = (state)=>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps)(Login);