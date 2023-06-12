import "./Carousel.scss";

import { useRef } from "react";

import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { scrollSliderNext, scrollSliderPrevious } from "./core/scroll";

interface CarouselProps {
	children: JSX.Element[];
	prevAriaLabel?: string;
	nextAriaLabel?: string;
	prevButtonContent?: React.ReactNode;
	nextButtonContent?: React.ReactNode;
}

export function Carousel({
	children,
	prevAriaLabel = "Previous",
	nextAriaLabel = "Next",
	prevButtonContent = <ArrowLeft />,
	nextButtonContent = <ArrowRight />,
}: CarouselProps) {
	const slider = useRef<HTMLDivElement>(null);

	function getSliderOrThrow() {
		if (!slider.current) {
			throw new Error("Slider not found");
		}

		return slider.current;
	}

	function scrollNext() {
		const slider = getSliderOrThrow();

		scrollSliderNext(slider);
	}

	function scrollPrevious() {
		const slider = getSliderOrThrow();

		scrollSliderPrevious(slider);
	}

	return (
		<div className="carousel">
			<div ref={slider} className="carousel__slider">
				{children.map((child, index) => (
					<div key={index} className="carousel__slide">
						{child}
					</div>
				))}
			</div>
			<div className="carousel__nav">
				<button onClick={scrollPrevious} className="carousel__button" aria-label={prevAriaLabel}>
					{prevButtonContent}
				</button>
				<button onClick={scrollNext} className="carousel__button" aria-label={nextAriaLabel}>
					{nextButtonContent}
				</button>
			</div>
		</div>
	);
}
