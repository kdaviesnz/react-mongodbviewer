describe('App', function() {
    it('Testing App component', (done)=>{
        const TestUtils = require('react-dom/test-utils')
        const { createRenderer } = require('react-test-renderer/shallow')
        const React = require('react')
        const ReactDOM = require('react-dom')
        const temp = require('../public/src/App.js')
        const App = temp.default

        const fD = ReactDOM.findDOMNode


        let app = TestUtils.renderIntoDocument(
            <App />
        )

        let footers = TestUtils.scryRenderedDOMComponentsWithTag(app, 'footer')
        expect(footers.length).toBe(1)

        let headers = TestUtils.scryRenderedDOMComponentsWithTag(app, 'header')
        expect(headers.length).toBe(1)

        // Shallow rendering
        const appRenderer = createRenderer()
        appRenderer.render(<App/>)
        let app_shallow = appRenderer.getRenderOutput()

        expect(app_shallow.type).toBe('div')
        expect(app_shallow.props.children.length).toBe(2)

        done()
    })

})