import { Children } from "react";


export default function Layout() {
	return (
		<div className="page--container">
			<main className="page--content">{Children}</main>
		</div>
	);
}
