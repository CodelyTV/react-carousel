import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./Carousel";

const meta = {
	title: "Carousel",
	component: Carousel,
	tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariableSlides: Story = {
	args: {
		children: [
			<div style={{ width: "300px", background: "yellow" }}>A simple slide</div>,
			<div>
				<img src="https://placekitten.com/500/500" alt="a slide can contain anything" />
			</div>,
			<article
				style={{ width: "400px", height: "400px", background: "aliceBlue", padding: "2rem" }}
			>
				<h2>It can be any tag</h2>
				<p>and contain any number of items</p>
			</article>,
			<div>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/f2XGbg_3dRk"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			</div>,
		],
	},
};

const style = { width: "300px", height: "300px", background: "#fef878" };
export const WithGap: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"To add gap between slides, you must specify a `--slider-gap` custom property via CSS. You can specify it in a wrapping div (see 'show code' below for an example), or in any other parent element in your CSS. [Read more about CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).",
			},
		},
	},
	args: {
		children: [
			<div style={style}>slide 1</div>,
			<div style={style}>slide 2</div>,
			<div style={style}>slide 3</div>,
			<div style={style}>slide 4</div>,
			<div style={style}>slide 5</div>,
		],
	},
	render: (args) => (
		<div style={{ "--slider-gap": "1rem" } as React.CSSProperties}>
			<Carousel {...args}></Carousel>
		</div>
	),
};
