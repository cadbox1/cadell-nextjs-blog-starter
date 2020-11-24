import { ThemeProvider } from "theme-ui";
import { AppProps } from "next/app";

import theme from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
