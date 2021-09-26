import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../app/state/index";
import { RootState } from "../../app/state/types";

import ReadInput from "../../components/CheckInputs";

const DoubleCheck = (): JSX.Element => {
	const dispatch = useDispatch();
	const { previousScene } = bindActionCreators(actions, dispatch);

	const finalDATA = useSelector((state: RootState) => state);

	return (
		<>
			<div className="view-box_content--header">
				<h1>Skontrolujte si zadané údaje</h1>
			</div>
			<div className="view-box_content--body">
				<div className="view-box_content--body_row">
					<h2>Skontrolujte si zadané údaje</h2>
					<div className="form-doublecheck">
						<ReadInput
							title="Akou formou chcem pomôcť"
							value={finalDATA.optionData.donateFormat}
							name="finalClientForm"
						/>
						<ReadInput
							title="Najviac mi záleží na útulku"
							value={finalDATA.optionData.shelterSelection}
							name="finalClientShelter"
						/>
						<ReadInput
							title="Suma ktorou chcem pomôcť"
							value={`${finalDATA.optionData.donationValue}€`}
							name="finalClientDonate"
						/>
						<ReadInput
							title="Meno a priezvisko"
							value={`${finalDATA.formData.name} ${finalDATA.formData.last_name}`}
							name="finalClientName"
						/>
						<ReadInput
							title="E-mailová adresa"
							value={finalDATA.formData.email}
							name="finalClientEmail"
						/>
						<ReadInput
							title="Telefónne číslo"
							value={finalDATA.formData.phoneNumber}
							name="finalClientPhone"
						/>
					</div>
					<div className="additional-inputs">
						<label className="additional-inputs_check-box">
							<input type="checkbox" name="finalClientPersonal" />
							<span className="checkmark"></span>
							Súhlasím so spracovaním mojich osobných údajov
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
				<button type="button" className="custom-btn-gray">
					Odoslať formulár
				</button>
			</div>
		</>
	);
};

export default DoubleCheck;
