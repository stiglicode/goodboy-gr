import React from "react";

import sprite from "../../assets/svg/sprite.svg";
import "./style.scss";
const SVGSprite = (props: {
	link: string;
	className?: string;
}): JSX.Element => {
	const link = `${sprite}#${props.link}`;

	return (
		<div className="icon-wrapper">
			<svg
				className={
					"svg" +
					" " +
					`svg--${!props.className ? props.link : props.className}`
				}
				role="presentation"
			>
				<use xlinkHref={link}></use>
			</svg>
		</div>
	);
};

export default SVGSprite;
