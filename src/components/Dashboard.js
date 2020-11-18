import React from 'react';

import { covidContext } from '../context/CovidDataStore';

import DashboardCard from './DashboardCard';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

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
});

const Dashboard = () => {
	const { country, confirmed, recovered, deaths, dates } = React.useContext(
		covidContext
	);
	const classes = useStyles();

	if (confirmed[country] && recovered[country] && deaths[country]) {
		const currConfirmedCases = confirmed[country].confirmed[dates.length - 1];
		const currRecoveredCases = recovered[country].recovered[dates.length - 1];
		const currDeathsCases = deaths[country].deaths[dates.length - 1];

		const prevConfirmedCases = confirmed[country].confirmed[dates.length - 2];
		const prevRecoveredCases = recovered[country].recovered[dates.length - 2];
		const prevDeathsCases = deaths[country].deaths[dates.length - 2];

		console.log(currConfirmedCases, currRecoveredCases, currDeathsCases);
		return (
			<Paper>
				<Typography variant="h5" className={classes.title}>
					{country === 'global'
						? 'Worldwide'
						: country === 'US'
						? 'United States'
						: country}{' '}
					Report
				</Typography>
				<hr />
				<div className={classes.card}>
					<Grid
						container
						spacing={1}
						alignItems="center"
						justify="space-evenly"
					>
						<Grid item xs={12} sm={4} md={3}>
							<DashboardCard
								currCases={currConfirmedCases}
								increase={currConfirmedCases - prevConfirmedCases}
								caseType={'Infected'}
								align="center"
							/>
						</Grid>
						<Grid item xs={12} sm={4} md={3}>
							<DashboardCard
								currCases={currRecoveredCases}
								increase={currRecoveredCases - prevRecoveredCases}
								caseType={'Recovered'}
								align="center"
							/>
						</Grid>
						<Grid item xs={12} sm={4} md={3}>
							<DashboardCard
								currCases={currDeathsCases}
								increase={currDeathsCases - prevDeathsCases}
								caseType={'Deaths'}
								align="center"
							/>
						</Grid>
					</Grid>
				</div>
			</Paper>
		);
	} else {
		return (
			<Typography variant="h4" className={classes.loadingMessage}>
				Loading Dashboard. Please Wait...
			</Typography>
		);
	}
};

export default Dashboard;
