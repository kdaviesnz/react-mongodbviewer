import React from 'react'

const FormGroup = (props) =>
    (
        <div className="form-group row">
            <label className="col-sm-3 col-form-label" htmlFor={props.name}>{props.labelText}</label>
            <div className="col-sm-9">
                <input defaultValue={props.defaultvalue} onChange={props.handlechange} name={props.name} type={props.type} className={"form-control"} id={props.id} aria-describedby={props.help}></input>
            </div>
            <div className="col">
                <small id={props.help} className="form-text text-muted">{props.helpText}</small>
            </div>
        </div>
    )

export default FormGroup
