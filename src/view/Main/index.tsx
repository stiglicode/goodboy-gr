import React, { ReactChildren } from "react";

const ViewWrapper = (props: { children: ReactChildren }): JSX.Element => {
	const testSubimt = (e: React.ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<div className="view-box">
			<div className="view-box_content">
				<form onSubmit={testSubimt}>
					{React.Children.map(props.children, child => {
						return child;
					})}
				</form>
			</div>
			<div className="view-box_image"></div>
		</div>
	);
};

export default ViewWrapper;
