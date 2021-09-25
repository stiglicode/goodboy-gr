import React, { useState } from "react";
import DataList from "../DataList";
import SVGSprite from "../Sprtie";
import TelCountries from "../../app/phone-countries/countries.json";

const FormInput = (
	props: React.InputHTMLAttributes<HTMLInputElement>
): JSX.Element => {
	const [dropDownValue, setDropDownValue] = useState("");
	const [preViewValue, setPreViewValue] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [typingPermissions, setTypingPermissions] = useState(true);

	const cb_ActiveItem = (data: string): void => {
		return setDropDownValue(data);
	};

	const typingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const classNames = props.className?.split(" ");
		const output = e.target.value;
		let phoneValidator;

		classNames?.map(className => {
			if (className === "phone-number") return (phoneValidator = true);
		});

		if (phoneValidator) {
			if (typingPermissions) {
				const values = e.target.value;

				let formated: string = TelCountries.SK.pattern;
				let patternLength: string | number = TelCountries.SK.pattern;

				for (let i = 0; i < patternLength.length; i++) {
					patternLength = patternLength.replace("-", "");
				}

				for (let i = 0; i < TelCountries.SK.pattern.length; i++) {
					formated = formated.replace("-", " ");
				}

				for (let i = 0; i < values.length; i++) {
					const value = values[i];
					formated = formated.replace("x", value);
				}
				if (values.length <= TelCountries.SK.pattern.length) {
					if (values.length === patternLength.length) {
						e.target.value = formated;
						return setPreViewValue("+421 " + e.target.value);
					} else {
						e.target.value = values;
					}
				} else {
					return (e.target.value = inputValue);
				}
			} else {
				return (e.target.value = inputValue);
			}
		} else {
			return setPreViewValue(output);
		}
		e.target.value;
	};

	const keyHandler = (k: any): void => {
		let phoneValidator;
		const classNames = props.className?.split(" ");

		classNames?.map(className => {
			if (className === "phone-number") return (phoneValidator = true);
		});

		const numberPattern = /\d+/g;
		if (phoneValidator) {
			if (k.key.match(numberPattern)) {
				setTypingPermissions(true);
				setInputValue(k.target.value);
			} else if (k.keyCode === 8) {
				k.target.value = "";
				setPreViewValue(k.target.value);
			} else {
				setTypingPermissions(false);
			}
		}
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
				<input
					{...props}
					className=""
					required
					value={dropDownValue}
					disabled
				/>
			) : (
				<input
					{...props}
					className=""
					onChange={typingHandler}
					onKeyDown={keyHandler}
					required
				/>
			)}
			<label data-value={preViewValue}>{props.title}</label>
			{props.className === "type--dropdown" && (
				<SVGSprite link="arrow-down" className="input-box_toggler" />
			)}
			<span className="input-value-preview">{preViewValue}</span>
		</button>
	);
};

export default FormInput;
