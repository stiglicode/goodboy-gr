import React from "react";
import SVGSprite from "../Sprtie";
// import "./Header.component.scss";

const Header = (): JSX.Element => {
	return (
		<header className="header">
			<div className="header-box">
				<div className="header-box_item header-box_item--logotype">
					<a href="">Nadácia Good Boy</a>
				</div>
				<div className="header-box_item header-box_item--social">
					<a
						href="https://www.facebook.com"
						rel="noreferrer"
						target="_blank"
						title="Facebook - Good boy"
					>
						<SVGSprite link="facebook" />
					</a>
					<a
						href="https://www.instagram.com"
						rel="noreferrer"
						target="_blank"
						title="Instagram - Good boy"
					>
						<SVGSprite link="instagram" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
