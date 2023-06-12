import { Carousel, CarouselProps } from "../../src/Carousel";
import { SlideMother } from "./SlideMother";

type CarouselPropsWithoutChildren = Omit<CarouselProps, "children">;

export const CarouselMother = {
	random({
		carouselWidth = 900,
		slidesCount = 5,
		minSlideWidth = 300,
		maxSlideWidth = 500,
		props,
	}: {
		carouselWidth?: number;
		slidesCount?: number;
		minSlideWidth?: number;
		maxSlideWidth?: number;
		props?: CarouselPropsWithoutChildren;
	} = {}) {
		const slides = SlideMother.list(slidesCount, minSlideWidth, maxSlideWidth);

		return (
			<div style={{ width: `${carouselWidth}px`, margin: "0 auto" }}>
				<Carousel {...props}>{slides}</Carousel>
			</div>
		);
	},
};
