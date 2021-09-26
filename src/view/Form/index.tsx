import React from "react";
import { Formik, Form, FormikHelpers } from "formik";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state/index";

import FormInput from "../../components/Input";
import { Schema } from "../Main/validation-schamas";

const FormView = (): JSX.Element => {
	const dispatch = useDispatch();

	const { nextScene, previousScene, formSceneData } = bindActionCreators(
		actions,
		dispatch
	);

	const formSubmitHandler = (
		values: {
			name: string;
			last_name: string;
			email: string;
			phoneNumber: string;
		},
		{
			setSubmitting,
		}: FormikHelpers<{
			name: string;
			last_name: string;
			email: string;
			phoneNumber: string;
		}>
	) => {
		let prefix = "+421";
		formSceneData({
			name: values.name,
			last_name: values.last_name,
			email: values.email,
			phoneNumber: (prefix += values.phoneNumber),
		});
		nextScene();
		setSubmitting(false);
	};

	return (
		<Formik
			initialValues={{
				name: "",
				last_name: "",
				email: "",
				phoneNumber: "",
			}}
			onSubmit={formSubmitHandler}
			validationSchema={Schema.formScene}
		>
			{({ errors, touched }) => (
				<Form>
					<div className="view-box_content--header">
						<h1>Potrebujeme od Vás zopár&nbsp;informácií</h1>
					</div>
					<div className="view-box_content--body">
						<div className="view-box_content--body_row"></div>
						<div className="view-box_content--body_row">
							<h2>O projekte</h2>
							<div className="form-inputs_wrapper">
								<FormInput
									title="Meno"
									placeholder="Zadajte Vaše meno"
									name="name"
									type="text"
									className="form-inputs_wrapper--item"
								/>
								<FormInput
									title="Priezvisko"
									placeholder="Zadajte Vaše priezvisko"
									name="last_name"
									type="text"
									className="form-inputs_wrapper--item"
								/>
								<FormInput
									title="E-mailová adresa"
									placeholder="Zadajte Váš e-mail"
									name="email"
									type="email"
									className="form-inputs_wrapper--item"
								/>
								<FormInput
									title="Telefónne číslo"
									placeholder="900 123 456"
									name="phoneNumber"
									className="form-inputs_wrapper--item form-inputs_wrapper--item_number prefix-SK phone-number"
									id="phone-number"
								/>
							</div>
						</div>
					</div>
					<div className="view-box_content--footer">
						<button
							type="button"
							onClick={() => previousScene()}
							className="custom-btn-light"
						>
							Späť
						</button>
						<button type="submit" className="custom-btn-gray">
							Pokračovať
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default FormView;
