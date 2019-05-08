import React from "react";

describe('Panel', function() {
    it('Testing Panel component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/Panel.js')
        const Panel = temp.default

        const fD = ReactDOM.findDOMNode
        let panel = TestUtils.renderIntoDocument(
            <Panel></Panel>
        )

        done()
    })
})