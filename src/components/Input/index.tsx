import React, { useState } from "react";
import DataList from "../DataList";
import SVGSprite from "../Sprtie";
import TelCountries from "../../app/phone-countries/countries.json";
import { Field } from "formik";

const FormInput = (
	props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
	const [dropDownValue, setDropDownValue] = useState("");
	const [preViewValue, setPreViewValue] = useState("");

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
				<input {...props} className="" value={dropDownValue} disabled />
			) : props.id === "phone-number" ? (
				<Field {...props} className="" type="number" required />
			) : (
				<Field {...props} className="" required />
			)}
			<label data-value={preViewValue} className="input-box_label">
				{props.title}
			</label>
			{props.className === "type--dropdown" && (
				<SVGSprite link="arrow-down" className="input-box_toggler" />
			)}
			<span className="input-value-preview">{preViewValue}</span>
		</button>
	);
};

export default FormInput;
