import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { red, indigo, green, /*orange,*/ grey } from '@material-ui/core/colors';
import { covidContext } from '../context/CovidDataStore';
import CountUp from 'react-countup';

import classNames from 'classnames';

const baseCard = makeStyles({
	root: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		minWidth: 275,
		maxWidth: 350,
		margin: '10px 5px',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
});

const deathCard = makeStyles({
	root: {
		borderBottom: `10px solid ${red[500]}`,
	},
});

const infectedCard = makeStyles({
	root: {
		borderBottom: `10px solid ${indigo[500]}`,
	},
});

const recoveredCard = makeStyles({
	root: {
		borderBottom: `10px solid ${green[500]}`,
	},
});

// const activeCard = makeStyles({
// 	root: {
// 		borderBottom: `10px solid ${orange[200]}`,
// 	},
// });

const useStyles = makeStyles({
	title: {
		color: grey[700],
		textAlign: 'center',
	},
	paper: {
		backgroundColor: grey[100],
	},
	loadingMessage: {
		color: grey[900],
		textAlign: 'center',
	},
});

const Cards = () => {
	const baseClass = baseCard();
	const deathClass = deathCard();
	const infectedClass = infectedCard();
	const recoveredClass = recoveredCard();
	// const activeClass = activeCard();
	const classes = useStyles();

	const { country, confirmed, recovered, deaths, dates } = React.useContext(
		covidContext
	);

	// console.log(
	// 	`Selected country is ${country} and the data is`,
	// 	confirmed[country].confirmed
	// );

	if (confirmed[country] && recovered[country] && deaths[country]) {
		return (
			<Paper className={classes.paper}>
				<Typography variant="h5" className={classes.title}>
					{country === 'global' ? 'Worldwide' : country} Report
				</Typography>
				<hr />
				<div className={baseClass.container}>
					<Card className={classNames(baseClass.root, infectedClass.root)}>
						<CardContent>
							<Typography variant="body1">Infected</Typography>
							<Typography variant="h6">
								<CountUp
									start={0}
									end={confirmed[country].confirmed[dates.length - 1]}
									separator=","
								/>
							</Typography>
						</CardContent>
					</Card>
					<Card className={classNames(baseClass.root, recoveredClass.root)}>
						<CardContent>
							<Typography variant="body1">Recovered</Typography>
							<Typography variant="h6">
								<CountUp
									start={0}
									end={recovered[country].recovered[dates.length - 1]}
									separator=","
								/>
							</Typography>
						</CardContent>
					</Card>

					<Card className={classNames(baseClass.root, deathClass.root)}>
						<CardContent>
							<Typography variant="body1">Deaths</Typography>
							<Typography variant="h6">
								<CountUp
									start={0}
									end={deaths[country].deaths[dates.length - 1]}
									separator=","
								/>
							</Typography>
						</CardContent>
					</Card>
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

export default Cards;
