import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state/index";

import { Formik, Form, FormikHelpers, Field } from "formik";

import FormInput from "../../components/Input";
import SVGSprite from "../../components/Sprtie";
import { Schema } from "../Main/validation-schamas";

const Options = (): JSX.Element => {
	const dispatch = useDispatch();
	const { nextScene, optionSceneData } = bindActionCreators(
		actions,
		dispatch
	);

	const initFoucs = (e: React.ChangeEvent<any>): void => {
		return e.currentTarget.children[0].focus();
	};

	const [boxStatus, setBoxStatus] = useState([false, true]);
	const [customValue, setCustomValue] = useState("");
	const [donationForm, setDonationForm] = useState(
		"Chcem finančne prispieť celej nadácii"
	);

	const setActiveBox = (e: any): void => {
		if (boxStatus[0] === false) {
			setBoxStatus([true, false]);
			return setDonationForm(
				"Chcem finančne prispieť konkrétnemu útulku"
			);
		} else {
			setBoxStatus([false, true]);
			return setDonationForm("Chcem finančne prispieť celej nadácii");
		}
	};

	const handleCustomDonate = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		return setCustomValue(e.target.value);
	};

	const formSubmitHandler = (
		value: { donate: string },
		{ setSubmitting }: FormikHelpers<{ donate: string }>
	) => {
		setTimeout(() => {
			const selectionValue = document.getElementsByName(
				"shelterSelection"
			)[0] as HTMLInputElement;
			const donateValue = value.donate;
			const donationFormValue = donationForm;

			optionSceneData({
				donateFormat: donationFormValue,
				shelterSelection:
					selectionValue.value === "" ? "---" : selectionValue.value,
				donationValue: donateValue,
			});
			nextScene();
			setSubmitting(false);
		}, 100);
	};

	return (
		<Formik
			initialValues={{
				donate: "",
			}}
			onSubmit={formSubmitHandler}
			validationSchema={Schema.optionScene}
		>
			{({ errors, touched }) => (
				<Form autoComplete="off">
					<div className="view-box_content--header">
						<h1>Vyberte si možnosť, ako chcete pomôcť</h1>
					</div>
					<div className="view-box_content--body">
						<div className="view-box_content--body_row">
							<div className="options-boxes">
								<button
									type="button"
									className={`options-boxes_item box-shadow ${
										boxStatus[0] === true ? "active" : ""
									}`}
									onClick={setActiveBox}
								>
									<div className="options-boxes_item--circle">
										<SVGSprite link="wallet" />
									</div>
									<p>
										Chcem finančne prispieť konkrétnemu
										útulku
									</p>
								</button>
								<button
									type="button"
									className={`options-boxes_item box-shadow ${
										boxStatus[1] === true ? "active" : ""
									}`}
									onClick={setActiveBox}
								>
									<div className="options-boxes_item--circle">
										<SVGSprite link="paw" />
									</div>
									<p>Chcem finančne prispieť celej nadácii</p>
								</button>
							</div>
						</div>
						<div className="view-box_content--body_row">
							<h2>O projekte</h2>
							<FormInput
								placeholder="Vyberte útulok zo zoznamu"
								title="Útulok"
								className="type--dropdown"
								required
								name="shelterSelection"
							/>
						</div>
						<div className="view-box_content--body_row br-mt">
							<h2>Suma, ktorou chcem prispieť</h2>
							<div className="donate-box">
								{["5", "10", "20", "30", "50", "100"].map(
									(value, i) => {
										const id = i + 1;
										return (
											<div
												className="donate-box_item"
												key={id}
											>
												<Field
													type="radio"
													name="donate"
													value={value}
													id={`donate-value--${id}`}
												/>
												<label
													htmlFor={`donate-value--${id}`}
												>
													{value}
												</label>
											</div>
										);
									}
								)}
								<div className="donate-box_item">
									<Field
										type="radio"
										name="donate"
										value={customValue}
										id="donate-value--0"
									/>
									<label
										htmlFor="donate-value--0"
										className="donate-box_item-number"
										onClick={initFoucs}
									>
										<input
											type="number"
											min="0"
											onChange={handleCustomDonate}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="view-box_content--footer">
						<div className="footer-placehodler"></div>
						<button type="submit" className="custom-btn-primary">
							Pokračovať
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default Options;
