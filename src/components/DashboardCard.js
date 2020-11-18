import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { covidContext } from '../context/CovidDataStore';
import CountUp from 'react-countup';
import { red, indigo, green, grey /* orange*/ } from '@material-ui/core/colors';

import classNames from 'classnames';

const CardTheme = makeStyles({
	root: {
		backgroundColor: `rgba(245, 245, 245, 0.8)`,
	},
	infected: {
		borderBottom: `10px solid ${indigo[300]}`,
	},
	recovered: {
		borderBottom: `10px solid ${green[300]}`,
	},
	deaths: {
		borderBottom: `10px solid ${red[300]}`,
	},
	lastDay: {
		color: grey[600],
	},
});

const DashboardCard = ({ increase, currCases, caseType }) => {
	const cardClass = CardTheme();
	return (
		<>
			<Card
				className={classNames(
					cardClass.root,
					cardClass[caseType.toLowerCase()]
				)}
			>
				<CardContent>
					<Typography variant="body1">{caseType}</Typography>
					<Typography variant="h6">
						<CountUp start={0} end={currCases} separator="," />
					</Typography>
					<Typography variant="caption" className={cardClass.lastDay}>
						{increase >= 0 ? '+' : '-'}
						<CountUp start={0} end={increase} separator="," />
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default DashboardCard;
