import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const SignInOrOutLink = (props) => {
    if (props.logged_in_ok) {
        return (
            <Link className="signout_link" to="/signout" style={props.styles}>
                Sign out
            </Link>
        )
    } else {
        return (
            <Link className="signin_link" to="/" style={props.styles}>
                Sign in
            </Link>
        )
    }
}

export default SignInOrOutLink
