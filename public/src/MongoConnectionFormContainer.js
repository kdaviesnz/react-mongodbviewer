import React from 'react'
import MongoConnectionForm from './MongoConnectionForm'

const MongoConnectionFormContainer = (props) => {
    return (
        <MongoConnectionForm handleusercredentials={props.handleusercredentials} handlelogin={props.handlelogin}/>
    )
}

export default MongoConnectionFormContainer

