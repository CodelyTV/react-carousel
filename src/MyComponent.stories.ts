import type { Meta, StoryObj } from "@storybook/react";

import { MyComponent } from "./MyComponent";

const meta = {
	title: "MyComponent",
	component: MyComponent,
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "My Component",
	},
};
