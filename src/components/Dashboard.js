import React from 'react';

import { covidContext } from '../context/CovidDataStore';

import DashboardCard from './DashboardCard';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
	card: {
		padding: 3,
		marginTop: 20,
	},
	loadingMessage: {
		color: grey['A700'],
		textAlign: 'center',
		backgroundColor: 'rgba(230, 230, 230, 0.6)',
	},
	title: {
		color: grey[700],
		textAlign: 'center',
	},
	paper: {
		margin: '15px 10px',
		padding: '10px 5px',
		backgroundColor: 'rgba(250, 250, 250, 0.8)',
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

		return (
			<Paper className={classes.paper}>
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
						<Grid item xs={12} sm={3}>
							<DashboardCard
								currCases={currConfirmedCases}
								increase={currConfirmedCases - prevConfirmedCases}
								caseType={'Infected'}
								align="center"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<DashboardCard
								currCases={currRecoveredCases}
								increase={currRecoveredCases - prevRecoveredCases}
								caseType={'Recovered'}
								align="center"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
							<DashboardCard
								currCases={
									currConfirmedCases - currRecoveredCases - currDeathsCases
								}
								increase={
									currConfirmedCases -
									currRecoveredCases -
									currDeathsCases -
									(prevConfirmedCases - prevRecoveredCases - prevDeathsCases)
									// prevConfirmedCases +
									// prevRecoveredCases
								}
								caseType={'Active'}
								align="center"
							/>
						</Grid>
						<Grid item xs={12} sm={3}>
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
			<>
				<Typography variant="h4" className={classes.loadingMessage}>
					Loading Dashboard. Please Wait...
				</Typography>
				<div style={{ textAlign: 'center', height: '100vh' }}>
					<CircularProgress />
				</div>
			</>
		);
	}
};

export default Dashboard;
