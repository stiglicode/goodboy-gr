import React, { useState } from "react";

const DataList = ({
	activeItem,
}: {
	activeItem: (cb: string) => void;
}): JSX.Element => {
	const [testState, setTestState] = useState([
		{
			id: 1,
			name: "Útulok pre psov - TEZAS",
		},
		{
			id: 2,
			name: "OZ Tuláčik Brezno",
		},
	]);
	const [currentID, setCurrentID] = useState("");

	const handleItemClick = (c: React.MouseEvent<HTMLElement>): void => {
		setCurrentID(
			c.currentTarget.dataset.count !== undefined
				? c.currentTarget.dataset.count
				: ""
		);
		return activeItem(
			c.currentTarget.dataset.value !== undefined
				? c.currentTarget.dataset.value
				: ""
		);
	};

	return (
		<div className="datalist">
			{testState.map((shelter, i): JSX.Element => {
				return (
					<span
						className={`datalist-item ${
							+currentID === +shelter.id ? "active" : ""
						}`}
						data-value={shelter.name}
						data-count={shelter.id}
						key={shelter.id || i}
						onClick={handleItemClick}
					>
						{shelter.name}
					</span>
				);
			})}
			<span
				className={"datalist-item empty"}
				data-value={""}
				onClick={handleItemClick}
			></span>
		</div>
	);
};

export default DataList;
