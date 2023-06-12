import { Carousel } from "../../src/Carousel";

describe("Carousel button props", () => {
	it("sets next and previous button aria labels correctly", () => {
		cy.mount(
			<Carousel prevAriaLabel="Anterior" nextAriaLabel="Siguiente">
				<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
				<div style={{ width: "500px", height: "500px", background: "aliceBlue" }}>slide 2</div>
				<div style={{ width: "400px", height: "400px", background: "yellow" }}>slide 3</div>
				<div style={{ width: "560px", height: "315px", background: "aliceBlue" }}>slide 4</div>
			</Carousel>
		);

		cy.findByLabelText("Anterior").should("exist");
		cy.findByLabelText("Siguiente").should("exist");
	});

	it("sets next and previous button contents passed by props correctly", () => {
		cy.mount(
			<Carousel prevButtonContent="👈" nextButtonContent="👉">
				<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
				<div style={{ width: "500px", height: "500px", background: "aliceBlue" }}>slide 2</div>
				<div style={{ width: "400px", height: "400px", background: "yellow" }}>slide 3</div>
				<div style={{ width: "560px", height: "315px", background: "aliceBlue" }}>slide 4</div>
			</Carousel>
		);

		cy.findByText("👈").should("exist");
		cy.findByText("👉").should("exist");
	});
});
