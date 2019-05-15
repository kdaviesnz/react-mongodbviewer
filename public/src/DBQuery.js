import React from 'react'
import Button from "./Button";

const DBQuery = (props) => {

    return (
        <div className="row">
            <div className="col-md-9">
                <textarea onBlur={props.handlequerychange} name="mongoquery" style={{width:'100%'}}>{}</textarea>
            </div>
            <div className="col-md-3">
                <Button label="Query" type="button" onclick={props.handlequery}/>
            </div>
        </div>
    )
}

export default DBQuery

