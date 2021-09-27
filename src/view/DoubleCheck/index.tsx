import React from "react";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state/index";
import { RootState } from "../../app/state/types";

import ReadInput from "../../components/CheckInputs";
import { Schema } from "../Main/validation-schamas";

const DoubleCheck = (): JSX.Element => {
	const dispatch = useDispatch();
	const { previousScene } = bindActionCreators(actions, dispatch);

	const finalDATA = useSelector((state: RootState) => state);

	const formSubmitHandler = (
		values: {
			finalClientForm: string;
			finalClientShelter: string;
			finalClientDonate: string;
			finalClientName: string;
			finalClientEmail: string;
			finalClientPhone: string;
			finalClientPersonalData: boolean;
		},
		{
			setSubmitting,
		}: FormikHelpers<{
			finalClientForm: string;
			finalClientShelter: string;
			finalClientDonate: string;
			finalClientName: string;
			finalClientEmail: string;
			finalClientPhone: string;
			finalClientPersonalData: boolean;
		}>
	) => {
		console.log(values);
		setSubmitting(false);
	};

	return (
		<Formik
			initialValues={{
				finalClientForm: finalDATA.optionData.donateFormat,
				finalClientShelter: finalDATA.optionData.shelterSelection,
				finalClientDonate: `${finalDATA.optionData.donationValue}€`,
				finalClientName: `${finalDATA.formData.name} ${finalDATA.formData.last_name}`,
				finalClientEmail: finalDATA.formData.email,
				finalClientPhone: finalDATA.formData.phoneNumber,
				finalClientPersonalData: false,
			}}
			onSubmit={formSubmitHandler}
			validationSchema={Schema.doubleCheckScene}
		>
			{({ errors, touched }) => (
				<Form>
					<div className="view-box_content--header">
						<h1>Skontrolujte si zadané údaje</h1>
					</div>
					<div className="view-box_content--body">
						<div className="view-box_content--body_row">
							<h2>Skontrolujte si zadané údaje</h2>
							<div className="form-doublecheck">
								<ReadInput
									title="Akou formou chcem pomôcť"
									name="finalClientForm"
								/>
								<ReadInput
									title="Najviac mi záleží na útulku"
									name="finalClientShelter"
								/>
								<ReadInput
									title="Suma ktorou chcem pomôcť"
									name="finalClientDonate"
								/>
								<ReadInput
									title="Meno a priezvisko"
									name="finalClientName"
								/>
								<ReadInput
									title="E-mailová adresa"
									name="finalClientEmail"
								/>
								<ReadInput
									title="Telefónne číslo"
									name="finalClientPhone"
								/>
							</div>
							<div className="additional-inputs">
								<label className="additional-inputs_check-box">
									<Field
										type="checkbox"
										name="finalClientPersonalData"
									/>
									<span className="checkmark"></span>
									Súhlasím so spracovaním mojich osobných
									údajov
								</label>
							</div>
						</div>
					</div>
					<div className="view-box_content--footer">
						<button
							type="button"
							onClick={() => {
								previousScene();
							}}
							className="custom-btn-light"
						>
							Späť
						</button>
						<button type="submit" className="custom-btn-gray">
							Odoslať formulár
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default DoubleCheck;
