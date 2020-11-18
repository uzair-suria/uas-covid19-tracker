import React from 'react';

import './App.css';

import Dashboard from './components/Dashboard';
import CountrySelector from './components/CountrySelector';
import VictoryChartZoom from './examples/VictoryChartZoom';

function App() {
	// const {
	// 	country,
	// 	setCountry,
	// 	confirmed,
	// 	setConfirmed,
	// 	recovered,
	// 	setRecovered,
	// 	deaths,
	// 	setDeaths,
	// 	countriesList,
	// 	setCountriesList,
	// 	dates,
	// 	setDates,
	// } = useContext(covidContext);

	// console.log(`Using Context`, recovered['Antigua and Barbuda']);
	return (
		<div className="container">
			<CountrySelector />
			<Dashboard />
			<VictoryChartZoom />
		</div>
	);
}

export default App;
