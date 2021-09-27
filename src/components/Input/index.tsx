import React, { useState, useEffect } from "react";
import DataList from "../DataList";
import SVGSprite from "../Sprtie";
import TelCountries from "../../app/phone-countries/countries.json";
import { Field } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state";

const FormInput = (
	props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
	const dispatch = useDispatch();

	const { prefixer } = bindActionCreators(actions, dispatch);

	const [dropDownValue, setDropDownValue] = useState("");
	const [preViewValue, setPreViewValue] = useState("");
	const [countryPrefix, setCountryPrefix] = useState(false);

	const cb_ActiveItem = (data: string): void => {
		return setDropDownValue(data);
	};

	const changedCountryPrefix = () => {
		if (countryPrefix === false) return setCountryPrefix(true);
		else return setCountryPrefix(false);
	};
	const SK_CZ_switcher = () => {
		if (countryPrefix === true) {
			return TelCountries.SK;
		} else {
			return TelCountries.CZ;
		}
	};

	useEffect(() => {
		prefixer(SK_CZ_switcher());
	}, [countryPrefix]);

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
				<>
					<button
						type="button"
						className="number-prefix"
						onClick={changedCountryPrefix}
						value={SK_CZ_switcher().prefix}
					>
						<SVGSprite
							link={SK_CZ_switcher().flag}
							className="number-prefix_icon"
						/>
						<span className="number-prefix_placeholder">
							{SK_CZ_switcher().prefix}
						</span>
					</button>
					<Field {...props} className="" type="number" required />
				</>
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
