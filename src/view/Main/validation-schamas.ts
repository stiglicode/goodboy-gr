import * as yup from "yup";
import { string } from "yup/lib/locale";

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

const doubleCheckScene = yup.object({
	finalClientForm: yup.string().required(),
	finalClientShelter: yup.string(),
	finalClientDonate: yup.string().required(),
	finalClientName: yup.string().required(),
	finalClientEmail: yup.string().email().required(),
	finalClientPhone: yup.string().required(),
	finalClientPersonalData: yup
		.boolean()
		.oneOf([true], "Pre pokračovanie potvrdťe súhlas!"),
});

export const Schema = {
	optionScene,
	formScene,
	doubleCheckScene,
};
