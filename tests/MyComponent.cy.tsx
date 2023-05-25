import { MyComponent } from "../src/MyComponent";

describe("<MyComponent />", () => {
	it("renders", () => {
		cy.mount(<MyComponent title="My component" />);

		cy.findByText(/My component/i);
	});
});
