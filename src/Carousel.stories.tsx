import "./assets/docs.css";

import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./Carousel";

const meta = {
	title: "Carousel",
	component: Carousel,
	tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The carousel will automatically fit the width of its container, it's responsive by default and paginates according to the slides size, so there is no need to specify a number of slides per page or different breakpoints to make the carousel responsive. You can also scroll horizontally on mobile or trackpad (or pressing `shift` while scrolling with a mouse). You only need to import the `Carousel` component and each child will be considered a slide. Click the 'show code' below for a usage example.",
			},
		},
	},
	args: {
		children: [
			<figure className="defaultSlide">
				<img
					src="/img/georgi-kalaydzhiev-neF7gKk9708-unsplash.jpg"
					alt="a black building with a grass roof and a white steeple"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/neF7gKk9708?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Georgi Kalaydzhiev
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/josh-hild-zWCKJjPCl0s-unsplash.jpg"
					alt="a path in the middle of a forest surrounded by tall trees"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/zWCKJjPCl0s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Josh Hild
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/lena-polishko-EM_thLGU0yw-unsplash.jpg"
					alt="a pineapple, an egg and an orange on a table"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/EM_thLGU0yw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Lena Polishko
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/lena-polishko-EYrLkNNOyhM-unsplash.jpg"
					alt="a bike is parked in front of a building"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/EYrLkNNOyhM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Lena Polishko
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/luka-verc-2iBUuz4z3B8-unsplash.jpg"
					alt="a person standing in front of a huge storm"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/2iBUuz4z3B8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Luka Verč
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/nika-tchokhonelidze-Ojsyw6_5NDw-unsplash.jpg"
					alt="a man and a woman walking down a street"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/Ojsyw6_5NDw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						nika tchokhonelidze
					</a>
				</figcaption>
			</figure>,
			<figure className="defaultSlide">
				<img
					src="/img/yuliya-matuzava-28WVjNXuFV8-unsplash.jpg"
					alt="a towel, sunglasses, and flowers on the beach"
				/>
				<figcaption>
					Photo by{" "}
					<a href="https://unsplash.com/photos/28WVjNXuFV8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Yuliya Matuzava
					</a>
				</figcaption>
			</figure>,
		],
	},
	render: (args) => <Carousel {...args}></Carousel>,
};

export const VariableSlides: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The carousel supports any kind of content, as well as variable width and height for the slides.",
			},
		},
	},
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

export const WithGap: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"To add gap between slides, you must specify a `--slider-gap` custom property via CSS. You can specify it in a wrapping div (see 'show code' below for an example), or in any other parent element in your CSS. [Read more about CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).",
			},
		},
	},
	args: Default.args,
	render: (args) => (
		<div style={{ "--slider-gap": "1rem" } as React.CSSProperties}>
			<Carousel {...args}></Carousel>
		</div>
	),
};

export const WithCustomButtonContent: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"By default the buttons display an arrow SVG. With the `nextButtonContent` and `prevButtonContent` props you can pass any string, SVG or HTML to be placed inside the previous and next button. Keep in mind that this will be inside the `button` tag, so you should not pass another button. Passing `<button>Do not do this</button>` would be invalid.",
			},
		},
	},
	args: {
		prevButtonContent: <span style={{ fontSize: "2rem" }}>👈</span>,
		nextButtonContent: <span style={{ fontSize: "2rem" }}>👉</span>,
		...Default.args,
	},
};

export const WithCustomAriaLabels: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The buttons by default have a 'Previous' and 'Next' aria-label for accessibility. With the `nextAriaLabel` and `prevAriaLabel` props you can pass a custom one if for example your website is in another language. You can also pass an empty string if you already passed a buttonContent with accessible text.",
			},
		},
	},
	args: {
		prevAriaLabel: "Anterior",
		nextAriaLabel: "Siguiente",
		...Default.args,
	},
};

export const ButtonStyling: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"If passing a custom content is not enough, you can adjust the button style with CSS custom properties. You can adjust `--slider-button-width`, `--slider-button-height` and `--slider-button-padding`, as well as the buttons top margin with `--slider-nav-margin-top`. You can specify this variables in a wrapping div (see 'show code' below for an example), or in any other parent element in your CSS. If the variables are not enough, you can also style the carousel's classes. [Check the Readme for the full documentation](https://github.com/CodelyTV/react-carousel#readme).",
			},
		},
	},
	args: Default.args,
	render: (args) => (
		<div
			style={
				{
					"--slider-button-width": "5rem",
					"--slider-button-height": "8rem",
					"--slider-button-padding": "1rem",
					"--slider-nav-margin-top": "2rem",
				} as React.CSSProperties
			}
		>
			<Carousel {...args}></Carousel>
		</div>
	),
};
