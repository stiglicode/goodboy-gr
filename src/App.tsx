import React from "react";
// Bootstrap components
import { Container, Row } from "react-bootstrap";
// Custom components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Progress from "./components/ProgressIndicator";
import View from "./view";

function App(): JSX.Element {
	return (
		<div className="wrapper">
			<Header />
			<Container>
				<Row>
					<Progress count="3" status="2" />
					<View.Wrapper>
						<View.Check />
						<View.Form />
						<View.Option />
					</View.Wrapper>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default App;
