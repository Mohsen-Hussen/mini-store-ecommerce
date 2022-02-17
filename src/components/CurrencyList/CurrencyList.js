import React, { useState, useEffect } from "react";
import axios from "axios";
import "./currencyList.css";

const CurrencyList = () => {
	const [currencySymbols, setCurrencySymbols] = useState([]);
	const [currencyLabels, setCurrencyLabels] = useState([]);

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
	const getCurrencyLabel = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/graphql?query={currencies{label}}"
			);
			const currencyLabels = response.data.data.currencies;
			console.log(currencyLabels);
			console.log(typeof currencyLabels);
			setCurrencyLabels(currencyLabels);
		} catch (error) {
			console.log("Can't get currency label", error);
		}
	};

	useEffect(() => {
		getCurrencySymbol();
		getCurrencyLabel();
	}, []);

	return (
		<ul className="ul-style">
			{currencyLabels.length
				? currencySymbols.map((currencySymbol, index) => {
						return (
							<li key={currencySymbol.symbol}>
								{currencySymbol.symbol} {currencyLabels[index].label}
							</li>
						);
				  })
				: null}
		</ul>
	);
};

export default CurrencyList;
