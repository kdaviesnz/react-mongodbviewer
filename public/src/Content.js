import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'

const Content = (props) => {

    return(<BrowserRouter>
        <MainRouter handleusercredentials={props.handleusercredentials} logged_in_ok={props.logged_in_ok} dbs={props.dbs} handlelogin={props.handlelogin}/>
    </BrowserRouter>
    )
}

export default Content