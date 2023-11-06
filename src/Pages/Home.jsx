import Layout from "../Layout";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "animate.css";

export default function Home() {
	return (
		<div>
			<Layout>
				<div className="home--div">
					{/* TODO maybe refactor and create utility classes for bottom and top bar */}
					<h1 className="home--name">
						<Link to="/" className="home--name">
							Pabil Adhikari
						</Link>
					</h1>

					<div className="home--middle">
						<Navbar />
					</div>
					<h2 className="home--title">Developer Portfolio</h2>
				</div>
			</Layout>
		</div>
	);
}
