import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
	},
	bar: {
		backgroundColor: 'rgba(35, 35, 35,0.6)',
		borderRadius: 5,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.bar}>
				<Toolbar className={classes.bar}>
					<Typography variant="h4" className={classes.title}>
						COVID-19 Tracker
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
