import React from 'react'
import DocumentLink from "./DocumentLink";

const DBDocumentList = (props) => {

    return (
        <div>{undefined===props.documents?"":props.documents.map(
            (document, i) => <DocumentLink handledocumentclick={props.handledocumentclick} key={i} content={JSON.stringify(document)} label={(JSON.stringify(document)).substr(0, 50)+'...'}/>
        )}</div>
    )
}

export default DBDocumentList

