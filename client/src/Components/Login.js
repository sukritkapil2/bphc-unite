import React from "react"
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
const Login = (props)=>{

    // const renderContent = ()=>
    // {
    //     switch(props.user){
    //         case null :
    //             return(
    //                 <div>
    //                     <input type = "text"></input>
    //                     <a href="/auth/google">Sign up with google</a>
    //                 </div>
                    
    //             )
                
    //         case false :
    //             return(
    //                 <div>
    //                     <input type = "text"></input>
    //                     <a href="/auth/google">Sign up with google</a>
    //                 </div>
    //             )
    //         default :
    //                 return(
    //                     <Dashboard/>
    //                 )   
                
    //     }
    // }
    return(
        <div className="box">
            
            <input type = "text"></input>
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