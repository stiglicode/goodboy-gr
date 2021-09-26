import React, { ReactChildren } from "react";

// images
import { dog } from "./images-url";

const ViewWrapper = (props: { children: ReactChildren }): JSX.Element => {
	const testSubimt = (e: React.ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<div className="view-box">
			<div className="view-box_content">
				<form onSubmit={testSubimt} autoComplete="off">
					{React.Children.map(props.children, child => {
						return child;
					})}
				</form>
			</div>
			<div className="view-box_image">
				<div className="image-wrapper">
					<picture className="image-wrapper image-wrapper--364-by-730">
						<source
							srcSet={`${dog.WEBP} 1x, ${dog.retinaWEBP} 2x`}
							type="image/webp"
						/>
						<img
							src={dog.JPG}
							srcSet={`${dog.JPG} 1x, ${dog.retinaJPG} 2x`}
							alt="Dog"
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
		</div>
	);
};

export default ViewWrapper;
