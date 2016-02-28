TestUtils = React.addons.TestUtils;
Simulate = TestUtils.Simulate;

function renderComponent(comp, props) {
	return TestUtils.renderIntoDocument(React.createElement(comp, props));
}

function simulateClickOn(element) {
	Simulate.click(element[0]);
}

function getElementByComponent(component) {
	return ReactDOM.findDOMNode(component);
}
