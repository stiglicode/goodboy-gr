import DoubleCheck from "./DoubleCheck";
import Options from "./Options";
import FormView from "./Form";

import ViewWrapper from "./Main";

const View: {
	Option: () => JSX.Element;
	Form: () => JSX.Element;
	Check: () => JSX.Element;
	Wrapper: (props: any) => JSX.Element;
} = {
	Option: Options,
	Form: FormView,
	Check: DoubleCheck,
	Wrapper: ViewWrapper,
};

export default View;
