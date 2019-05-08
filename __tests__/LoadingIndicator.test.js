import React from "react";

describe('LoadingIndicator', function() {
    it('Testing LoadingIndicator component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/LoadingIndicator.js')
        const LoadingIndicator = temp.default

        const fD = ReactDOM.findDOMNode
        let loadingIndicator = TestUtils.renderIntoDocument(
            <LoadingIndicator></LoadingIndicator>
        )

        done()
    })
})