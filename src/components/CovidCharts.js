// Pure React Imports
import React, { useContext } from 'react';
import { covidContext } from '../context/CovidDataStore';

// Material-UI Imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

// Charts Imports
import { Chart, Line, Slider, Tooltip, Legend } from 'bizcharts';

const useStyles = makeStyles({
	card: {
		padding: 5,
		marginTop: 20,
	},
	loadingMessage: {
		color: grey[600],
		textAlign: 'center',
	},
	title: {
		color: grey[700],
		textAlign: 'center',
	},
	paper: {
		margin: '15px 10px',
		padding: '10px',
		backgroundColor: 'rgba(250, 250, 250, 0.9)',
	},
});

const CovidCharts = () => {
	const { country, confirmed, recovered, deaths, dates } = useContext(
		covidContext
	);
	const classes = useStyles();

	if (
		confirmed[country] &&
		recovered[country] &&
		deaths[country] &&
		country &&
		dates
	) {
		let confirmedData = dates.map((date, index) => ({
			date: date,
			value: confirmed[country].confirmed[index],
			type: 'Confirmed',
		}));
		let recoveredData = dates.map((date, index) => ({
			date: date,
			value: recovered[country].recovered[index],
			type: 'Recovered',
		}));
		let activeData = dates.map((date, index) => ({
			date: date,
			value:
				confirmed[country].confirmed[index] -
				recovered[country].recovered[index],
			type: 'Active',
		}));
		let combinedData = confirmedData.concat(recoveredData, activeData);
		const strokeColorsSequence = ['#7986CB', '#81C784', '#ff7043'];
		// let flag = true;
		return (
			<Paper className={classes.paper}>
				<Typography variant="h6" className={classes.title}>
					COVID Cases Visualization
				</Typography>
				<div>
					<Chart
						padding={[10, 60, 100, 60]}
						autoFit
						height={500}
						data={combinedData}
						// scale={{ value: { min: 0 } }}
					>
						<Line
							shape="smooth"
							position="date*value"
							color={['type', strokeColorsSequence]}
							// label="value"
						/>
						<Tooltip shared showCrosshairs />
						<Slider height={30} />
						<Legend position="top" />
					</Chart>
				</div>
			</Paper>
		);
	} else {
		return null;
	}
};

export default CovidCharts;
