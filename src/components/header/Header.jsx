import React from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import HeaderTitle from "./HeaderTitle";
const Header = () => {
	return (
		<header id="header__container">
			<HeaderTitle />
			<div id="header__links-container">
				<a
					href="https://hollinshollinshollins.bandcamp.com/releases"
					target="_blank" style={{'textDecoration': 'none'}}>
					<h2 className="custom-link">music</h2>
				</a>

				<HeaderLink path="/web" label="web" />
				<HeaderLink path="/stuff" label="stuff" />
				<HeaderLink path="/contact" label="contact" />
			</div>
		</header>
	);
};

export default Header;
