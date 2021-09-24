import React, { useState } from "react";
import FormInput from "../../components/Input";
import SVGSprite from "../../components/Sprtie";

const Options = (): JSX.Element => {
	const initFoucs = (e: React.ChangeEvent<any>): void => {
		return e.currentTarget.children[0].focus();
	};

	const [boxStatus, setBoxStatus] = useState([false, true]);

	const setActiveBox = (e: React.MouseEvent<HTMLElement>): void => {
		if (boxStatus[0] === false) {
			setBoxStatus([true, false]);
		} else {
			setBoxStatus([false, true]);
		}
	};
	return (
		<>
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
							<p>Chcem finančne prispieť konkrétnemu útulku</p>
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
							<p>Chcem finančne prispieť konkrétnemu útulku</p>
						</button>
					</div>
				</div>
				<div className="view-box_content--body_row">
					<h2>O projekte</h2>
					<FormInput
						placeholder="Vyberte útulok zo zoznamu"
						title="Útulok"
						className="type--dropdown"
						name="inputTest"
						required
					/>
				</div>
				<div className="view-box_content--body_row br-mt">
					<h2>Suma, ktorou chcem prispieť</h2>
					<div className="donate-box">
						{["5", "10", "20", "30", "50", "100"].map(
							(value, i) => {
								const id = i + 1;
								return (
									<div className="donate-box_item" key={id}>
										<input
											type="radio"
											name="donate-value"
											value={value}
											id={`donate-value--${id}`}
										/>
										<label htmlFor={`donate-value--${id}`}>
											{value}
										</label>
									</div>
								);
							}
						)}
						<div className="donate-box_item">
							<input
								type="radio"
								name="donate-value"
								value="0"
								id="donate-value--0"
							/>
							<label
								htmlFor="donate-value--0"
								className="donate-box_item-number"
								onClick={initFoucs}
							>
								<input type="number" min="0" />
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
		</>
	);
};

export default Options;
