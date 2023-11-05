import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import Work from "./Pages/Work";
import About from "./Pages/About";

function App() {
	return (
		<>
			<Routes>
				<Route element={Layout}></Route>
				<Route path="/" element={Home}></Route>
				<Route path="/contact" element={Contact}></Route>
				<Route path="/work" element={Work}></Route>
				<Route path="/about" element={About}></Route>
			</Routes>
		</>
	);
}

export default App;
