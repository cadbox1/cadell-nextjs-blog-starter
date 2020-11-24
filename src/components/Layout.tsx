import { Header } from "./Header";

export interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
