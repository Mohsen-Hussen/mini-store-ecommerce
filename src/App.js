import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CardItem from "./components/Card/CardItem";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
	return (
		<>
			<NavBar />
			<Container className="App">
				<CardItem />
			</Container>
		</>
	);
};

export default App;
