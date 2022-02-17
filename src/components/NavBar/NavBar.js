import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navStyle.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BiStore } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import CurrencyList from "../CurrencyList/CurrencyList";

const NavBar = () => {
	return (
		<>
			<Navbar bg="white" expand="lg" sticky="top" collapseOnSelect>
				<Container>
					<Navbar.Brand href="#home">
						<BiStore className="logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#women" className="underLine fontCust">
								Women
							</Nav.Link>
							<Nav.Link href="#men" className="fontCustAnother">
								Men
							</Nav.Link>
							<Nav.Link href="#kids" className="fontCustAnother">
								Kids
							</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<NavDropdown title="$" id="basic-nav-dropdown">
									<CurrencyList />
								{/* <NavDropdown.Item href="#action/3.1">
								</NavDropdown.Item> */}
							</NavDropdown>
							<Nav.Link href="#cart" className="fontCustAnother">
								<BsCart2 className="cartIcon" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
