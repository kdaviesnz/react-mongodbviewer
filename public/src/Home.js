import React, {Component} from 'react'
import MongoDBManagementContainer from "./MongoDBManagementContainer"

const Home = (props) => {

        return (
            <MongoDBManagementContainer handleusercredentials={props.handleusercredentials} logged_in_ok={props.logged_in_ok} dbs={props.dbs} handlelogin={props.handlelogin}/>
        )

}


export default Home
