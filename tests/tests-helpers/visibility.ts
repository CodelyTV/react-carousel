export function isCompletelyVisible(element: HTMLElement): boolean {
	if (!element.parentElement) {
		throw new Error("not a carousel slide");
	}

	const elementBoundingRect = element.getBoundingClientRect();
	const sliderBoundingRect = element.parentElement.getBoundingClientRect();
	const sliderWidth = sliderBoundingRect.width;

	const positionLeft = elementBoundingRect.left - sliderBoundingRect.left;
	const positionRight = positionLeft + elementBoundingRect.width;

	return positionLeft >= 0 && positionRight <= sliderWidth;
}

export const beNotVisible = ($el: JQuery<HTMLElement>): void => {
	const htmlElement = $el.get(0);
	expect(isCompletelyVisible(htmlElement)).to.be.false;
};

export const beVisible = ($el: JQuery<HTMLElement>): void => {
	const htmlElement = $el.get(0);
	expect(isCompletelyVisible(htmlElement)).to.be.true;
};
