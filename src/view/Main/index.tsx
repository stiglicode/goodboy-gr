import React, { ReactChildren } from "react";

const ViewWrapper = (props: { children: ReactChildren }): JSX.Element => {
	return (
		<div>
			{React.Children.map(props.children, child => {
				return child;
			})}
		</div>
	);
};

export default ViewWrapper;
