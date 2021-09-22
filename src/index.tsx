// # Core
import React from "react";
import ReactDOM from "react-dom";
// # Components
import App from "./App";
// # Main styles
import "./style/style.scss";
// # Store
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
