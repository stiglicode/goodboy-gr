import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/state/types";

const DataList = (props: { activeItem: (cb: string) => void }): JSX.Element => {
	const [currentID, setCurrentID] = useState("");
	const DropdonState = useSelector((state: RootState) => state._API.shelters);

	const handleItemClick = (c: React.MouseEvent<HTMLElement>): void => {
		setCurrentID(
			c.currentTarget.dataset.count !== undefined
				? c.currentTarget.dataset.count
				: ""
		);
		return props.activeItem(
			c.currentTarget.dataset.value !== undefined
				? c.currentTarget.dataset.value
				: ""
		);
	};

	return (
		<div className="datalist">
			{DropdonState.map((shelter, i): JSX.Element => {
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
						<input
							type="radio"
							name="sSelections"
							id={`drop-down-selection--${i + 1}`}
							value={shelter.name}
						/>
						<label htmlFor={`drop-down-selection--${i + 1}`}>
							{shelter.name}
						</label>
					</span>
				);
			})}
			<span
				className={"datalist-item empty"}
				data-value=""
				onClick={handleItemClick}
			>
				<input
					type="radio"
					name="shelterSelections"
					id="drop-down-selection--0"
					value=""
				/>
				<label htmlFor="drop-down-selection--0">Žiadny útolok</label>
			</span>
		</div>
	);
};

export default DataList;
