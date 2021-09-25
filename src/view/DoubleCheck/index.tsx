import React from "react";
import ReadInput from "../../components/CheckInputs";

const DoubleCheck = (): JSX.Element => {
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
							value="Chcem finančne prispieť celej nadácii"
							title="Akou formou chcem pomôcť"
							name="finalClientForm"
						/>
						<ReadInput
							title="Najviac mi záleží na útulku"
							value="Mestský útulok, Žilina"
							name="finalClientShelter"
						/>
						<ReadInput
							title="Suma ktorou chcem pomôcť"
							value="50 €"
							name="finalClientDonate"
						/>
						<ReadInput
							title="Meno a priezvisko"
							value="Peter Reguli"
							name="finalClientName"
						/>
						<ReadInput
							title="E-mailová adresa"
							value="peter.reguli@goodrequest.com"
							name="finalClientEmail"
						/>
						<ReadInput
							title="Telefónne číslo"
							value="+421 902 237 207"
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
				<button type="button" className="custom-btn-light">
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
