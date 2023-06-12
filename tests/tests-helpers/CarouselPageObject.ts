import { isCompletelyVisible } from "./visibility";

export class CarouselPageObject {
	nextButton: Cypress.Chainable<JQuery<HTMLElement>>;
	previousButton: Cypress.Chainable<JQuery<HTMLElement>>;

	constructor() {
		this.nextButton = cy.findByLabelText(/Next/i);
		this.previousButton = cy.findByLabelText(/Previous/i);
	}

	getSlide(index: number): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(`.carousel__slide:nth-child(${index})`);
	}

	getFirstSlide(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(".carousel__slide:first-child");
	}

	getLastSlide(): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(".carousel__slide:last-child");
	}

	clickNext(): CarouselPageObject {
		this.nextButton.click();

		return this;
	}

	clickPrevious(): CarouselPageObject {
		this.previousButton.click();

		return this;
	}

	clickNextIfLastSlideIsNotVisible(): CarouselPageObject {
		this.getLastSlide().then(($el: JQuery<HTMLElement>) => {
			const htmlElement = $el[0];

			if (!isCompletelyVisible(htmlElement)) {
				this.clickNext();
			}
		});

		return this;
	}

	clickPreviousIfFirstSlideIsNotVisible(): CarouselPageObject {
		this.getFirstSlide().then(($el: JQuery<HTMLElement>) => {
			const htmlElement = $el[0];

			if (!isCompletelyVisible(htmlElement)) {
				this.clickPrevious();
			}
		});

		return this;
	}

	verifyFirstSlideIsCompletelyVisible(): CarouselPageObject {
		this.verifyIsCompletelyVisible(this.getFirstSlide());

		return this;
	}

	verifyLastSlideIsCompletelyVisible(): CarouselPageObject {
		this.verifyIsCompletelyVisible(this.getLastSlide());

		return this;
	}

	verifyFirstSlideIsNotCompletelyVisible(): CarouselPageObject {
		this.verifyIsNotCompletelyVisible(this.getFirstSlide());

		return this;
	}

	verifyLastSlideIsNotCompletelyVisible(): CarouselPageObject {
		this.verifyIsNotCompletelyVisible(this.getLastSlide());

		return this;
	}

	verifySlideIsCompletelyVisible(index: number): CarouselPageObject {
		this.verifyIsCompletelyVisible(this.getSlide(index));

		return this;
	}

	verifySlideIsNotCompletelyVisible(index: number): CarouselPageObject {
		this.verifyIsNotCompletelyVisible(this.getSlide(index));

		return this;
	}

	scrollPast(position: number): CarouselPageObject {
		cy.document().then((document) => {
			const slider = document.querySelector(".carousel__slider") as HTMLElement;
			slider.style.setProperty("scroll-behavior", "auto");
			slider.scrollLeft = position;
			slider.style.setProperty("scroll-behavior", "smooth");
		});

		return this;
	}

	scrollUntilTheEnd(): CarouselPageObject {
		cy.document().then((document) => {
			const slider = document.querySelector(".carousel__slider") as HTMLElement;
			slider.scrollLeft = slider.scrollWidth;
		});

		return this;
	}

	disableScrollTransition(): CarouselPageObject {
		cy.document().then((document) => {
			const slider = document.querySelector(".carousel__slider") as HTMLElement;
			slider.style.setProperty("scroll-behavior", "auto");
		});

		return this;
	}

	enableScrollTransition(): CarouselPageObject {
		cy.document().then((document) => {
			const slider = document.querySelector(".carousel__slider") as HTMLElement;
			slider.style.setProperty("scroll-behavior", "smooth");
		});

		return this;
	}

	private verifyIsCompletelyVisible($el: Cypress.Chainable<JQuery<HTMLElement>>): void {
		$el.should(($element: JQuery<HTMLElement>) => {
			const htmlElement = $element.get(0);
			expect(isCompletelyVisible(htmlElement)).to.be.true;
		});
	}

	private verifyIsNotCompletelyVisible($el: Cypress.Chainable<JQuery<HTMLElement>>): void {
		$el.should(($element: JQuery<HTMLElement>) => {
			const htmlElement = $element.get(0);
			expect(isCompletelyVisible(htmlElement)).to.be.false;
		});
	}
}
