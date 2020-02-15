import React from "react"
import {Link} from "react-router-dom";
class Login extends React.Component
{
    render()
    {
        return(
            <div className="box">
                <input type = "text"></input>
                <Link to="/dashboard">
                    <button>Login</button>
                </Link>
                <a href="/auth/google">Sign up with google</a>
            </div>
        )
    }
}

export default Login