import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

import { covidContext } from '../context/CovidDataStore';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 150,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const CountrySelector = () => {
	const { countriesList, country, setCountry } = useContext(covidContext);
	// console.log(countriesList);
	const classes = useStyles();

	const handleChange = (e) => {
		setCountry(e.target.value);
	};
	// console.log(`CountryList`, countriesList);
	return (
		<div>
			<>
				<FormControl className={classes.formControl}>
					<InputLabel id="country-selector">Select Country</InputLabel>
					<Select
						labelId="country-selector"
						id="country-selector"
						value={country}
						onChange={handleChange}
					>
						<MenuItem value={'global'}>{'Worldwide'}</MenuItem>
						<Divider />
						<Divider />
						<Divider />
						{countriesList.map((country, index) => (
							<MenuItem value={country} key={index}>
								{country}
							</MenuItem>
						))}
						{/* <MenuItem value={countriesList[0]}>{countriesList[0]}</MenuItem> */}
					</Select>
				</FormControl>
			</>
		</div>
	);
};

export default CountrySelector;
