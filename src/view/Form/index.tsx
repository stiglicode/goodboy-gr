import React from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state/index";

import FormInput from "../../components/Input";

const FormView = (): JSX.Element => {
	const dispatch = useDispatch();

	const { nextScene, previousScene } = bindActionCreators(actions, dispatch);

	return (
		<>
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
							name="clientName"
							type="text"
							className="form-inputs_wrapper--item"
						/>
						<FormInput
							title="Priezvisko"
							placeholder="Zadajte Vaše priezvisko"
							name="clientLastName"
							type="text"
							className="form-inputs_wrapper--item"
						/>
						<FormInput
							title="E-mailová adresa"
							placeholder="Zadajte Váš e-mail"
							name="clientEmail"
							type="email"
							className="form-inputs_wrapper--item"
						/>
						<FormInput
							title="Telefónne číslo"
							placeholder="900 123 456"
							name="clientTel"
							className="form-inputs_wrapper--item form-inputs_wrapper--item_number prefix-SK phone-number"
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
				<button
					type="button"
					onClick={() => nextScene()}
					className="custom-btn-gray"
				>
					Pokračovať
				</button>
			</div>
		</>
	);
};

export default FormView;
