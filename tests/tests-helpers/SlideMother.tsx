export const SlideMother = {
	random(minWidth = 300, maxWidth = 500) {
		const width = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;

		return <div style={{ width: `${width}px`, height: "300px", background: "yellow" }}>slide</div>;
	},
	list(count = 5, minWidth = 300, maxWidth = 500) {
		return Array.from({ length: count }, () => this.random(minWidth, maxWidth));
	},
};
