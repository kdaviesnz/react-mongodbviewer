import React from 'react'
import FormGroup from './FormGroup'
import Button from './Button'

const MongoConnectionForm = (props) => {

    return (
        <form onSubmit={props.handlelogin}>
            <FormGroup handlechange={props.handleusercredentials} type="text" name="username" id="username" labelText="Username"
                       help="usernameHelp" helpText="Please enter your Mongo username"/>
            <FormGroup handlechange={props.handleusercredentials} type="password" name="password" id="password" labelText="Password"
                       help="passwordHelp" helpText="Please enter your Mongo password"/>
            <FormGroup defaultvalue="" handlechange={props.handleusercredentials} type="text" name="hostname" id="hostname" labelText="Hostname"
                       help="hostnameHelp" helpText="Please enter the hostname"/>
            <FormGroup defaultvalue="27017" handlechange={props.handleusercredentials} type="text" name="port" id="port" labelText="Port"
                       help="hostnameHelp" helpText="Please enter the port"/>
            <FormGroup defaultvalue={true} handlechange={props.handleusercredentials} type="checkbox" name="SRV" id="srv" labelText="SRV Record"
                       help="SRVHelp" helpText=""/>
            <Button label="Connect" type="submit"/>
        </form>
    )
}

export default MongoConnectionForm
