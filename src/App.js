import React from 'react';
import './App.css';
// import { covidContext } from './context/CovidDataStore';
import Cards from './components/Cards';
import CountrySelector from './components/CountrySelector';

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
			<Cards />
		</div>
	);
}

export default App;
