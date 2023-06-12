import { Carousel } from "../../src/Carousel";
import { isCompletelyVisible } from "../../src/core/isCompletelyVisible";

describe("isCompletelyVisible", () => {
	it("returns true if a slide is completely visible", () => {
		const carouselWithFirstSlideCompletelyVisible = (
			<div style={{ width: "900px" }}>
				<Carousel prevButtonContent="👈" nextButtonContent="👉">
					<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 2</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 3</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithFirstSlideCompletelyVisible);

		const completelyVisibleSlide = ".carousel__slide:first-child";

		cy.get(completelyVisibleSlide).should(($el) => {
			const htmlElement = $el.get(0);

			expect(isCompletelyVisible(htmlElement)).to.be.true;
		});
	});

	it("returns false if a slide is completely not visible", () => {
		const carouselWithLastSlideCompletelyNotVisible = (
			<div style={{ width: "900px" }}>
				<Carousel prevButtonContent="👈" nextButtonContent="👉">
					<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 2</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 3</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 4</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithLastSlideCompletelyNotVisible);

		const completelyNotVisibleSlide = ".carousel__slide:last-child";

		cy.get(completelyNotVisibleSlide).should(($el) => {
			const htmlElement = $el.get(0);

			expect(isCompletelyVisible(htmlElement)).to.be.false;
		});
	});

	it("returns false if a slide is partially visible", () => {
		const carouselWithLastSlidePartiallyVisible = (
			<div style={{ width: "960px" }}>
				<Carousel prevButtonContent="👈" nextButtonContent="👉">
					<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 2</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 3</div>
					<div style={{ width: "300px", background: "yellow" }}>slide 4</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithLastSlidePartiallyVisible);

		const partiallyVisibleSlide = ".carousel__slide:last-child";

		cy.get(partiallyVisibleSlide).should(($el) => {
			const htmlElement = $el.get(0);

			expect(isCompletelyVisible(htmlElement)).to.be.false;
		});
	});
});
