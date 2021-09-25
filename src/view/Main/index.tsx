import React, { ReactChildren } from "react";

// images
import dog_JPG from "../../assets/img/jpg/title_picture-min.jpg";
import dog_retina_JPG from "../../assets/img/jpg/title_picture@2-min.jpg";
import dog_WEBP from "../../assets/img/webp/title_picture-min.webp";
import dog_retina_WEBP from "../../assets/img/webp/title_picture@2-min.webp";

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
							srcSet={`${dog_WEBP} 1x, ${dog_retina_WEBP} 2x`}
							type="image/webp"
						/>
						<img
							src={dog_JPG}
							srcSet={`${dog_JPG} 1x, ${dog_retina_JPG} 2x`}
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
