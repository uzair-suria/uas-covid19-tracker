import React from 'react';

// import { covidContext } from '../context/CovidDataStore';

import DashboardCard from './DashboardCard';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	card: {
		padding: 5,
		marginTop: 20,
	},
});

const Dashboard = () => {
	const classes = useStyles();
	return (
		<Paper>
			<div className={classes.card}>
				<Grid container spacing={1} alignItems="center" justify="space-evenly">
					<Grid item xs={12} sm={4} md={3}>
						<DashboardCard
							currCases={65135131}
							caseType={'Infected'}
							align="center"
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<DashboardCard
							currCases={65135131}
							caseType={'Recovered'}
							align="center"
						/>
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<DashboardCard
							currCases={65135131}
							caseType={'Deaths'}
							align="center"
						/>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
};

export default Dashboard;
