import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Signout from './Signout'


const MainRouter = (props) => {


    const mongo = JSON.parse(sessionStorage.getItem('mongo'))

    const dbs = props.dbs
    const handlelogin = props.handlelogin
    const logged_in_ok = props.logged_in_ok
    const handleusercredentials = props.handleusercredentials

    /*
    this.setState({
            status: mongo !== undefined && mongo !== null && mongo.logged_in_ok === true ? "logged_in" : "not_logged_in"
        }
    )
     */
    //  const status = mongo !== undefined && mongo !== null && mongo.logged_in_ok === true ? "logged_in" : "not_logged_in"
     // https://tylermcginnis.com/react-router-pass-props-to-components/
    return (
        <div component="MainRouter" className="col-sm-12">
            <Menu logged_in_ok={props.logged_in_ok}/>
            <Switch>
                <Route
                    exact path='/'
                    render={(props) => <Home {...props} handleusercredentials={handleusercredentials} logged_in_ok={logged_in_ok} dbs={dbs} handlelogin={handlelogin} />}
                />
                <Route path="/about" component={About}/>
                <Route path="/signout" component={Signout}/>
            </Switch>
        </div>
    )
}

export default MainRouter
