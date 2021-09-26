import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/state/types";
// Bootstrap components
import { Container, Row } from "react-bootstrap";
// Custom components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Progress from "./components/ProgressIndicator";
import View from "./view/view-entry";

function App(): JSX.Element {
	const SceneState = useSelector((state: RootState) => state.scene);

	const seceneSwitcher = () => {
		/* eslint-disable */
		switch (SceneState) {
			case 0:
				return <View.Option />;
			case 1:
				return <View.Form />;
			case 2:
				return <View.Check />;
			default:
				return <View.Option />;
		}
		/* eslint-enable */
	};

	return (
		<div className="wrapper">
			<Header />
			<Container className="container-sm">
				<Row>
					<Progress count="3" status={SceneState} />
					<View.Wrapper>{seceneSwitcher()}</View.Wrapper>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default App;
