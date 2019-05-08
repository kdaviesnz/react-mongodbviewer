import React from 'react'

const LoadingIndicator = (props) => {

    const styles = {
        paddingLeft: 25,
        paddingBottom: 5,
        borderBottom: '1px solid gray'
    }
    const spinner_styles = {
        visibility: props.loading?'visible':'hidden'
    }

    const text = props.loading?"Loading...":"No activity."

    return (
        <div style={styles}  className="col-sm-12">
            <div className="d-flex align-items-center">
                <small>{text}</small>
                <div style={spinner_styles} className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    )
}

export default LoadingIndicator
