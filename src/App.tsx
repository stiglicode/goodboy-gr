import React from "react";
// Bootstrap components
import { Container, Row } from "react-bootstrap";
// Custom components
import Footer from "./components/Footer";
import Header from "./components/Header";

function App(): JSX.Element {
	return (
		<div className="wrapper">
			<Header />
			<Container>
				<Row></Row>
				<Row>
					<Footer />
				</Row>
			</Container>
		</div>
	);
}

export default App;
