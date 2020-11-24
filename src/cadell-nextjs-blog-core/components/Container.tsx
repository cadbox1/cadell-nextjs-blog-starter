export interface ContainerProps {
	children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
	return <div className="container mx-auto px-5">{children}</div>;
}
