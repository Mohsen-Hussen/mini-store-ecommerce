import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardStyle.css";

import cardImg from "../../assets/logo-store.png";
import { Card, Row, Col } from "react-bootstrap";

const CardItem = () => {
	const [productCardImgs, setProductCardImgs] = useState([]);
	const [productNames, setProductNames] = useState([]);
	const [productPrices, setProductPrices] = useState([]);
	const [currencySymbols, setCurrencySymbols] = useState([]);
	const getCardImg = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/graphql?query={categories{products{gallery}}}"
			);
			console.log(response);
			// const productCardImgs = response.data.categories.products.gallery;
			const cardImgs = response.data.data.categories;
			const productCardImgs = cardImgs.map((product) => {
				return product.products;
			});
			console.log(productCardImgs);
			console.log(typeof productCardImgs);
			setProductCardImgs(productCardImgs);
		} catch (error) {
			console.log("Can't get image product", error);
		}
	};

	const getProductName = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/graphql?query={categories{products{name}}}"
			);
			const productNames = response.data.categories.products.name;
			console.log(productNames);
			console.log(typeof productNames);
			setProductNames(productNames);
		} catch (error) {
			console.log("Can't get image name", error);
		}
	};

	const getProductPrice = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/graphql?query={categories{products{prices{amount}}}}"
			);
			const productPrices = response.data.categories.products.prices.amount;
			console.log(productPrices);
			console.log(typeof productPrices);
			setProductPrices(productPrices);
		} catch (error) {
			console.log("Can't get image price", error);
		}
	};

	const getCurrencySymbol = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/graphql?query={currencies{symbol}}"
			);
			const currencySymbols = response.data.data.currencies;
			console.log(currencySymbols);
			console.log(typeof currencySymbols);
			setCurrencySymbols(currencySymbols);
		} catch (error) {
			console.log("Can't get currency symbol", error);
		}
	};

	useEffect(() => {
		getCardImg();
		getProductName();
		getProductPrice();
		getCurrencySymbol();
	}, []);

	return (
		<>
			<Row>
				<Col sm={12} md={4}>
					<Card style={{ maxWidth: "100%" }}>
						<Card.Img variant="top" src={cardImg} />
						<Card.Body>
							<Card.Text>Appollo Running Short</Card.Text>
							<Card.Title>$50.00</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CardItem;
