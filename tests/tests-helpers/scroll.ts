export function scrollPast(position: number): Cypress.Chainable {
	return cy.document().then((document) => {
		const slider = document.querySelector(".carousel__slider") as HTMLElement;
		slider.style.setProperty("scroll-behavior", "auto");
		slider.scrollLeft = position;
		slider.style.setProperty("scroll-behavior", "smooth");
	});
}
