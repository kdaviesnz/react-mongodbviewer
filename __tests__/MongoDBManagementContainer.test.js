describe('MongoDBManagementContainer', function() {
    it('Testing MongoDBManagementContainer component', (done)=>{

        const TestUtils = require('react-dom/test-utils')
        const { createRenderer } = require('react-test-renderer/shallow')
        const React = require('react')
        const ReactDOM = require('react-dom')
        let temp = require('../public/src/MongoDBManagementContainer.js')
        const MongoDBManagementContainer = temp.default

        temp = require('../public/src/App.js')
        const App = temp.default

        const fD = ReactDOM.findDOMNode

        let mongoDBManagementContainer_logged_out = TestUtils.renderIntoDocument(
            <MongoDBManagementContainer
                logged_in_ok={false}
            />
        )

        let rules_logged_out = TestUtils.scryRenderedDOMComponentsWithTag(mongoDBManagementContainer_logged_out, 'div')
        expect(rules_logged_out.length).toBe(21)

        // Shallow rendering
        const mongoDBManagementContainer_logged_outRenderer = createRenderer()
        mongoDBManagementContainer_logged_outRenderer.render(<MongoDBManagementContainer />)
        let mongoDBManagementContainer_logged_out_shallow = mongoDBManagementContainer_logged_outRenderer.getRenderOutput()

        expect(mongoDBManagementContainer_logged_out_shallow.type).toBe('div')
        expect(mongoDBManagementContainer_logged_out_shallow.props.children.length).toBe(2)




        // Sign in link
        let app_logged_out = TestUtils.renderIntoDocument(
            <App />
        )
        let sign_in_link = TestUtils.findRenderedDOMComponentWithClass(app_logged_out, 'signin_link')
        TestUtils.Simulate.click(fD(sign_in_link))
        let text_boxes = TestUtils.scryRenderedDOMComponentsWithClass(app_logged_out, 'form-control')
        expect(text_boxes.length).toBe(5)
        let connect_button = TestUtils.findRenderedDOMComponentWithClass(app_logged_out, 'btn')




        // Logged in
        let mongoDBManagementContainer_logged_in = TestUtils.renderIntoDocument(
            <MongoDBManagementContainer
                logged_in_ok={true}
            />
        )


        let rules_logged_in = TestUtils.scryRenderedDOMComponentsWithTag(mongoDBManagementContainer_logged_in, 'div')
        expect(rules_logged_in.length).toBe(23)

        // Shallow rendering
        const mongoDBManagementContainer_logged_inRenderer = createRenderer()
        mongoDBManagementContainer_logged_inRenderer.render(<MongoDBManagementContainer />)
        let mongoDBManagementContainer_logged_in_shallow = mongoDBManagementContainer_logged_inRenderer.getRenderOutput()

        expect(mongoDBManagementContainer_logged_in_shallow.type).toBe('div')
        expect(mongoDBManagementContainer_logged_in_shallow.props.children.length).toBe(2)


        done()
    })

})