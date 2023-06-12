import { CarouselMother } from "../tests-helpers/CarouselMother";

describe("Carousel button props", () => {
	it("sets next and previous button aria labels correctly", () => {
		const carousel = CarouselMother.random({
			props: {
				prevAriaLabel: "Anterior",
				nextAriaLabel: "Siguiente",
			},
		});
		cy.mount(carousel);

		cy.findByLabelText("Anterior").should("exist");
		cy.findByLabelText("Siguiente").should("exist");
	});

	it("sets next and previous button contents passed by props correctly", () => {
		const carousel = CarouselMother.random({
			props: {
				prevButtonContent: "👈",
				nextButtonContent: "👉",
			},
		});
		cy.mount(carousel);

		cy.findByText("👈").should("exist");
		cy.findByText("👉").should("exist");
	});
});
