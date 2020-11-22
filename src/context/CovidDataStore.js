import React, { useState, useEffect } from 'react';
import { getData } from '../api/covidData';

export const covidContext = React.createContext();

const CovidDataStore = ({ children }) => {
	const covidSourceURL = {
		confirmed: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`,
		recovered: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv`,
		deaths: `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv`,
	};

	const [country, setCountry] = useState('global');
	const [confirmed, setConfirmed] = useState({});
	const [recovered, setRecovered] = useState({});
	const [deaths, setDeaths] = useState({});
	const [countriesList, setCountriesList] = useState([]);
	const [dates, setDates] = useState([]);

	useEffect(() => {
		getData(covidSourceURL.confirmed, 'confirmed', (confirmedData) => {
			console.log(`>>>>>>>>>>>>>>>>Extracting dates<<<<<<<<<<<<<<`);
			setDates(confirmedData.header.dataDates);

			console.log(`>>>>>>>>>>>>>>>>Extracting countries<<<<<<<<<<<<<<`);
			setCountriesList(confirmedData.header.countryList);
			console.log(`raw list`, confirmedData.header.countryList);

			console.log(`>>>>>>>>>>>>>>>>Extracting confirmed cases<<<<<<<<<<<<<<`);
			let countriesConfirmed = confirmedData;
			delete countriesConfirmed.header;
			setConfirmed(countriesConfirmed);
		});

		getData(covidSourceURL.recovered, 'recovered', (recoveredData) => {
			console.log(`>>>>>>>>>>>>>>>>Extracting recovered cases<<<<<<<<<<<<<<`);
			let countriesRecovered = recoveredData;
			delete countriesRecovered.header;
			setRecovered(countriesRecovered);
		});

		getData(covidSourceURL.deaths, 'deaths', (deathsData) => {
			console.log(`>>>>>>>>>>>>>>>>Extracting fatal cases<<<<<<<<<<<<<<`);
			let countriesDeaths = deathsData;
			delete countriesDeaths.header;
			setDeaths(countriesDeaths);
		});
	}, [
		covidSourceURL.confirmed,
		covidSourceURL.deaths,
		covidSourceURL.recovered,
	]);
	return (
		<covidContext.Provider
			value={{
				country,
				setCountry,
				confirmed,
				setConfirmed,
				recovered,
				setRecovered,
				deaths,
				setDeaths,
				countriesList,
				setCountriesList,
				dates,
				setDates,
			}}
		>
			{children}
		</covidContext.Provider>
	);
};

export default CovidDataStore;
