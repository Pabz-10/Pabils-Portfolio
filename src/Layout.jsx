import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<div className="page--container">
			<Navbar />
			<main className="page--content">{children}</main>
		</div>
	);
}
