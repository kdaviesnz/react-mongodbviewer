import React from 'react'

const Panel = (props) => {

    const styles = {
        border: '0px solid black',
        marginBottom: 0,
        padding: 10,
        float: 'left',
        width: '100%',
        borderRadius: 0,
        minHeight: props.minheight!==undefined?props.minheight:'default',
        background: 'white'
    }

    return (
        <div style={styles}>
            {props.children}
        </div>)
}


export default Panel