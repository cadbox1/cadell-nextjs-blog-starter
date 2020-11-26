import { ThemeProvider } from "theme-ui";
import { AppProps } from "next/app";

import theme from "../theme";

// so we can use it again for the mdx provider.
export interface AppThemeProvider {
	children: React.ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProvider) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppThemeProvider>
			<Component {...pageProps} />
		</AppThemeProvider>
	);
}
