import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import About from "./Pages/About";

function App() {
	return (
		<Routes>
			<Route element={<Layout />} />
			<Route path="/" element={<Home />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/work" element={<Work />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
}

export default App;
