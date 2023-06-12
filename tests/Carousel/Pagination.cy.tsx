import { CarouselMother } from "../tests-helpers/CarouselMother";
import { CarouselPageObject } from "../tests-helpers/CarouselPageObject";

describe("Carousel pagination", () => {
	it("next button should scroll until the first not visible slide is visible", () => {
		const slideWidth = 350;
		const visibleSlides = 2;
		const carouselWithThirdSlidePartiallyVisible = CarouselMother.random({
			carouselWidth: slideWidth * visibleSlides + slideWidth / 2,
			minSlideWidth: slideWidth,
			maxSlideWidth: slideWidth,
			slidesCount: visibleSlides + 1,
		});
		const partiallyVisibleSlide = 3;
		cy.mount(carouselWithThirdSlidePartiallyVisible);

		const carousel = new CarouselPageObject();

		carousel.verifySlideIsNotCompletelyVisible(partiallyVisibleSlide);

		carousel.clickNext();

		carousel.verifySlideIsCompletelyVisible(partiallyVisibleSlide);
	});

	it("next button should scroll until the first not visible slide after a visible slide becomes visible", () => {
		const slideWidth = 300;
		const randomCarousel = CarouselMother.random({
			carouselWidth: slideWidth * 3,
			minSlideWidth: slideWidth,
			maxSlideWidth: slideWidth,
		});
		const firstSlideNotVisibleIndex = 5;
		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.scrollPast(slideWidth);

		carousel.clickNext();

		carousel.verifySlideIsCompletelyVisible(firstSlideNotVisibleIndex);
	});

	it("next button should scroll back to initial position if there are no not visible slides after first visible slide", () => {
		const slideWidth = 300;
		const randomCarousel = CarouselMother.random({
			carouselWidth: slideWidth * 3,
			minSlideWidth: slideWidth,
			maxSlideWidth: slideWidth,
			slidesCount: 5,
		});
		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.scrollPast(slideWidth * 3);

		carousel.clickNext();

		carousel.verifyFirstSlideIsCompletelyVisible();
	});

	it("previous button should scroll until the first not visible slide is visible", () => {
		const slideWidth = 400;
		const randomCarousel = CarouselMother.random({
			carouselWidth: slideWidth * 2,
			minSlideWidth: slideWidth,
			maxSlideWidth: slideWidth,
		});

		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.scrollPast(slideWidth * 2).verifyFirstSlideIsNotCompletelyVisible();

		carousel.clickPrevious();

		carousel.verifyFirstSlideIsCompletelyVisible();
	});

	it("previous button should scroll to the end of the carousel when there are no slides before the first visible slide", () => {
		const randomCarousel = CarouselMother.random();
		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.clickPrevious();

		carousel.verifyLastSlideIsCompletelyVisible();
	});

	it("next button should scroll correctly with random slide widths", () => {
		const randomCarousel = CarouselMother.random();
		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.disableScrollTransition();

		const maxAttempts = 20;

		for (let i = 0; i < maxAttempts; i++) {
			carousel.clickNextIfLastSlideIsNotVisible();
		}

		carousel.verifyLastSlideIsCompletelyVisible();
	});

	it("previous button should scroll correctly with random slide widths", () => {
		const randomCarousel = CarouselMother.random();
		cy.mount(randomCarousel);

		const carousel = new CarouselPageObject();

		carousel.disableScrollTransition().scrollUntilTheEnd();

		const maxAttempts = 20;

		for (let i = 0; i < maxAttempts; i++) {
			carousel.clickPreviousIfFirstSlideIsNotVisible();
		}

		carousel.verifyFirstSlideIsCompletelyVisible();
	});
});
