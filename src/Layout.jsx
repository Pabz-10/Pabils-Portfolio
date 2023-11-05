export default function Layout({ children }) {
	return (
		<div className="page--container">
			<main className="page--content">{children}</main>
		</div>
	);
}
