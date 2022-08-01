import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home.jsx";
import Web from "./components/web/Web.jsx";
import Stuff from "./components/stuff/Stuff.jsx";
import Contact from "./components/contact/Contact.jsx";
import React from "react";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/web" element={<Web />} />
					<Route path="/stuff" element={<Stuff />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
