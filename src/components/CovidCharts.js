import React, { useContext, useState, useEffect } from 'react';
import { covidContext } from '../context/CovidDataStore';

const CovidCharts = () => {
	const [infectedData, setInfectedData] = useState([]);
	const [deathData, setDeathData] = useState([]);
	const [recoveredData, setRecoveredData] = useState([]);
	const {
		country,
		confirmed,
		recovered,
		deaths,
		setDeaths,
		dates,
	} = useContext(covidContext);
	useEffect(() => {
		// Use iterative methods to assign values to data variables. The data
		// format is as following:
		// [
		// 	{ x: x - value, y: y - value },
		// 	{ x: x - value, y: y - value },
		// 	{ x: x - value, y: y - value },
		// 	{ x: x - value, y: y - value },
		// ]
	}, [country, confirmed, recovered, deaths, setDeaths, dates]);
	return (
		<div>
			<>
				<></>
			</>
		</div>
	);
};

export default CovidCharts;
