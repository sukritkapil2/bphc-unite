import React from "react"
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
const Login = (props)=>{

    const renderContent = ()=>
    {
        switch(props.user){
            case null :
                return <a href="/">Loading</a>
            case false :
                return(
                    <Login/>
                )
            default :
                return(
                    <Dashboard/>
                )
        }
    }
    return(
        <div className="box">
            <input type = "text"></input>
            {/* <Link to="/dashboard">
                <button>Login</button>
            </Link> */}
            <a href="/auth/google">Sign up with google</a>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        user:state.auth
    }
}

export default connect(mapStateToProps)(Login);