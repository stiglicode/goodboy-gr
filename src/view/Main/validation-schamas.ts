import * as yup from "yup";

const optionScene = yup.object({
	donate: yup.string().required("Prosím vyberte čiastku príspevku"),
});

const max = [20, 30];
const min = [2, 2];

const max_sentence = "Miximálny počet znakov je";
const min_sentence = "Minimálny počet znakov je";

const formScene = yup.object({
	name: yup
		.string()
		.min(min[0], `${max_sentence} ${min[0]}`)
		.max(max[0], `${min_sentence} ${max[0]}`),
	last_name: yup
		.string()
		.min(min[1], `${max_sentence} ${min[1]}`)
		.max(max[1], `${min_sentence} ${max[1]}`)
		.required("Priezvisko je povinné"),
	email: yup
		.string()
		.email("Email nie je správny")
		.max(255)
		.required("Email je povinný"),
	phoneNumber: yup.string().required("Telefóne čislo je povinné"),
});

export const Schema = {
	optionScene,
	formScene,
};
