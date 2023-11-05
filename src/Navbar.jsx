import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar--div">
			<ul className="navbar--list">
				<li className="navbar--items">
					<Link to="/about">About</Link>
				</li>
				<li className="navbar--items">
					<Link to="/contact">
						<span className="slash"></span> Contact{" "}
						<span className="slash"></span>
					</Link>
				</li>
				<li className="navbar--items">
					<Link to="/work">Works</Link>
				</li>
			</ul>
		</div>
	);
}
