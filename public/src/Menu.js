import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import Panel from './Panel'
import SignInOrOutLink from "./SignInOrOutLink";

const heading_styles = {
    borderBottom: '1px solid gray',
}
const menu_item_styles = {
    float: 'right',
    marginRight: 20
}

const logo_styles = {
    float: 'left',
}

const Menu = withRouter((props) => {


        return (
            <header style={heading_styles} component="Menu" className="row">
                <div className="col-sm-12">
                    <Panel>
                        <h1 style={logo_styles}>MongoDB  Viewer</h1>
                        <SignInOrOutLink logged_in_ok={props.logged_in_ok} styles={menu_item_styles}/>
                        <Link to="/about" style={menu_item_styles}>
                            About MongoDB Viewer
                        </Link>
                    </Panel>
                </div>
            </header>

        )
    }
)

export default Menu
