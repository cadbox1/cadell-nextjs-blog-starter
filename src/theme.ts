import { Theme } from "theme-ui";
import "typeface-source-sans-pro";

const theme: Theme = {
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
	fontSizes: [16, 18, 20, 24, 28, 36, 44],
	lineHeights: {
		// I want a line height of 32px for the body
		// because that's a nice number for incremental margings.
		// The font size for the body is 20px so 32/20 = 1.6
		body: 1.6,
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
			marginTop: 6,
			marginBottom: 2,
		},
		h2: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 4,
			marginTop: 6,
			marginBottom: 0,
		},
		h3: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 3,
		},
		p: {
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "body",
			fontSize: 2,
			marginTop: 3,
			marginBottom: 0,
		},
		a: {
			color: "primary",
			textDecoration: "none",
			":active, :hover": {
				textDecoration: "underline",
			},
		},
		ul: {
			fontSize: 2,
			marginTop: 3,
			marginBottom: 0,
			paddingLeft: 6,
			listStyleType: "disc",
			ul: {
				marginTop: 0,
			},
		},
		// not sure where the rest of these styles came from but they can stay
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
export default theme;
