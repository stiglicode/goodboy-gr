import React, { useState } from "react";
import DataList from "../DataList";
import SVGSprite from "../Sprtie";

const FormInput = (
	props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
	const [dropDownValue, setDropDownValue] = useState("");

	const cb_ActiveItem = (data: string): void => {
		return setDropDownValue(data);
	};

	return (
		<button
			type="button"
			className={`input-box ${props.className ? props.className : ""} ${
				dropDownValue !== "" ? "active" : ""
			} ${props.required ? "is-required" : ""}`}
		>
			{props.className === "type--dropdown" && (
				<DataList activeItem={cb_ActiveItem} />
			)}
			{props.className === "type--dropdown" ? (
				<input {...props} required value={dropDownValue} disabled />
			) : (
				<input {...props} required />
			)}
			<label>{props.title}</label>
			{props.className === "type--dropdown" && (
				<SVGSprite link="arrow-down" className="input-box_toggler" />
			)}
		</button>
	);
};

export default FormInput;
