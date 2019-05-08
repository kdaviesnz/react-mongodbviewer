import React from 'react'
import Panel from './Panel'

const footer_styles = {
    borderTop: '1px solid gray'
}

const Footer = (props) => (
    <div className="col-sm-12" component="Footer" style={footer_styles}>
        <Panel minheight={100}>
            <footer>
                MongoDBViewer v.0.0.1
            </footer>
        </Panel>
    </div>
)

export default Footer