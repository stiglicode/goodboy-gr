import React from "react";

import sprite from "../../assets/svg/sprite.svg";
import "./style.scss";
const SVGSprite = (props: {
	link: string;
	className?: string;
}): JSX.Element => {
	const link = `${sprite}#${props.link}`;

	return (
		<div
			className={`icon-wrapper ${props.className ? props.className : ""}`}
		>
			<svg
				className={"svg" + " " + `svg--${props.link}`}
				role="presentation"
			>
				<use xlinkHref={link}></use>
			</svg>
		</div>
	);
};

export default SVGSprite;
