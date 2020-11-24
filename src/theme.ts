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
	colors: {
		text: "#000",
		background: "#fff",
		primary: "hsl(217, 95%, 50%)",
		muted: "hsl(0, 0%, 96%)",
		heading: "text",
		modes: {
			dark: {
				text: "#fff",
				background: "#000",
				primary: "hsl(187, 100%, 50%)",
				muted: "hsl(0, 0%, 10%)",
			},
		},
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
		root: {
			fontFamily: "body",
			lineHeight: "body",
			fontWeight: "body",
		},
		h1: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 5,
		},
		h2: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 4,
		},
		h3: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 3,
		},
		h4: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 2,
		},
		h5: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 1,
		},
		h6: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 0,
		},
		p: {
			color: "text",
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "body",
		},
		a: {
			color: "primary",
			textDecoration: "none",
			":active, :hover": {
				textDecoration: "underline",
			},
		},
		pre: {
			fontFamily: "monospace",
			overflowX: "auto",
			fontSize: 0,
			code: {
				color: "inherit",
			},
		},
		code: {
			fontFamily: "monospace",
			fontSize: "inherit",
		},
		table: {
			width: "100%",
			borderCollapse: "separate",
			borderSpacing: 0,
		},
		th: {
			textAlign: "left",
			borderBottomStyle: "solid",
		},
		td: {
			textAlign: "left",
			borderBottomStyle: "solid",
		},
		img: {
			maxWidth: "100%",
		},
	},
};
