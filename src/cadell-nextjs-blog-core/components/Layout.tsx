import { Footer } from "./Footer";
import { Header } from "./Header";

export interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
}
