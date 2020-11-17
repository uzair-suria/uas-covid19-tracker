import { readRemoteFile } from 'react-papaparse';

/**
 * getData function takes two arguments required to fetch the COVID-19 CSV data and one more argument to consume the data from the calling component. The data is taken from 'COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University'
 * @param {string} url - url to the time series CSV
 * @param {string} caseType - Type of data expected (confirmed, recovered, deaths)
 * @param {function} callback - use this callback to consume data on component side
 */
export const getData = (url, caseType, callback) => {
	const cleanData = (data, caseType) => {
		console.log('... creating new data object to be returned');

		let filteredData = {};
		let cumData = []; // to be used for fragmented countries

		console.log('... initiating data cleaning');
		for (let i = 0; i < data.length; i++) {
			if (i === 0) {
				console.log(
					`... ... extracting data dates from the raw data and adding it to header property of object being returned`
				);
				filteredData = {
					header: {
						dataDates: data[i]
							.slice(4, data[i].length)
							.map((date) => new Date(date).toDateString().slice(4)),
					},
				};
			} else if (data[i][1] === data[i - 1][1]) {
				console.log(
					`... ... encountered fragmented country: ${data[i][1]}. Integrating it to a single data property`
				);
				let currArray = data[i].slice(4, data[i].length);
				let prevArray = filteredData[data[i][1]][caseType];

				cumData = prevArray.map((num, index) => num + currArray[index]);
				filteredData = {
					...filteredData,
					[data[i][1]]: {
						[caseType]: cumData,
					},
				};
			} else {
				filteredData = {
					...filteredData,
					[data[i][1]]: {
						[caseType]: data[i].slice(4, data[i].length),
					},
				};
			}
		}
		console.log(`... deleting any undefined property`);
		delete filteredData.undefined;
		console.log(`... adding list of countries to the header property`);
		const countryList = Object.keys(filteredData).filter(
			(key) => key !== 'header'
		);
		filteredData.header.countryList = countryList;
		console.log('... now evaluating global values');
		countryList.forEach((country) => {
			if (!filteredData.global) {
				console.log(`Adding global property`);
				filteredData.global = filteredData[country];
			} else {
				const cumValues = filteredData.global;
				const currValues = filteredData[country];
				const newGlobal = {
					[caseType]: currValues[caseType].map(
						(v, k) => v + cumValues[caseType][k]
					),
				};
				filteredData.global = newGlobal;
				// console.log(newGlobal.slice(-10));
			}
			// console.log(filteredData);
		});
		return filteredData;
	};

	readRemoteFile(url, {
		dynamicTyping: true,
		complete: (results) => {
			console.log(`Cleaning data...`);
			const filteredData = cleanData(results.data, caseType);
			console.log(`Data cleaned!`);
			callback(filteredData);
		},
	});
};
