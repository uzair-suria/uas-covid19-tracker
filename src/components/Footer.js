// Pure React Imports
import React from 'react';

// Material-UI Imports
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
	paper: {
		margin: '15px 10px',
		padding: '10px',
		backgroundColor: 'rgba(35, 35, 35, 0.9)',
		color: '#aaaaaa',
	},
	author: { textAlign: 'center' },
});

const Footer = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Typography variant="h6">Attributions</Typography>
			<Typography variant="body2">
				Background Image by{' '}
				<Link href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4959447">
					Gerd Altmann{' '}
				</Link>
				from{' '}
				<Link href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4959447">
					Pixabay
				</Link>
			</Typography>
			<Typography variant="body2">
				<Link href="https://icons8.com/icons/set/virus">Virus icon </Link>
				by <Link href="https://icons8.com">Icons8</Link>
			</Typography>
			<hr />
			<Typography variant="body1" className={classes.author}>
				Website by Uzair Aziz Suria
			</Typography>
		</Paper>
	);
};

export default Footer;
