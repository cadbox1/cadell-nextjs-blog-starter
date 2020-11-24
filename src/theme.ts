import "typeface-source-sans-pro";

export default {
	useColorSchemeMediaQuery: true,
	fonts: {
		body:
			'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
		heading:
			'"source sans pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
		monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
	},
	space: [0, 4, 8, 12, 16, 24, 32, 64, 96, 128],
	sizes: {
		container: 850,
	},
	fontSizes: [16, 18, 21, 24, 32, 36, 44],
	lineHeights: {
		body: 1.7,
		heading: 1.2,
	},
	fontWeights: {
		body: 400,
		heading: 600,
		bold: 600,
	},
	styles: {
		a: {
			textDecoration: "none",
			":active, :hover": {
				textDecoration: "underline",
			},
		},
		pre: {
			fontSize: 0,
		},
	},
};
