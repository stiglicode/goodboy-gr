import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import companyLogo from "../../assets/img/logo/logo-gb.png";

const ListItem = (props: { title: string; link: string }): JSX.Element => {
	return (
		<li className="footer-box_content--list-item">
			<a href={props.link} target="_blank" rel="noreferrer">
				{props.title}
			</a>
		</li>
	);
};

const Footer = (): JSX.Element => {
	return (
		<footer className="footer">
			<div className="footer-box">
				<Row>
					<Col md="3">
						<a href="/" className="footer-box_logo">
							<Image src={companyLogo} loading="lazy" />
						</a>
					</Col>
					<Col md="3">
						<div className="footer-box_content">
							<h2>Nadácia Good boy</h2>
							<ul className="footer-box_content--list">
								<ListItem title="O projekte" link="#" />
								<ListItem title="Ako na to" link="#" />
								<ListItem title="Kontakt" link="#" />
							</ul>
						</div>
					</Col>
					<Col md="3">
						<div className="footer-box_content">
							<h2>Nadácia Good boy</h2>
							<ul className="footer-box_content--list">
								<ListItem title="Lorem ipsum dolor" link="#" />
								<ListItem
									title="consectetur adipiscing"
									link="#"
								/>
								<ListItem title="Vivamus in" link="#" />
							</ul>
						</div>
					</Col>
					<Col md="3">
						<div className="footer-box_content">
							<h2>Nadácia Good boy</h2>
							<ul className="footer-box_content--list">
								<ListItem title="Lorem ipsum dolor" link="#" />
								<ListItem
									title="consectetur adipiscing"
									link="#"
								/>
								<ListItem title="Vivamus in" link="#" />
							</ul>
						</div>
					</Col>
				</Row>
			</div>
		</footer>
	);
};

export default Footer;
