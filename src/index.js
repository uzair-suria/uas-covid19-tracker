import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CovidDataStore from './context/CovidDataStore';

ReactDOM.render(
	<CovidDataStore>
		<App />
	</CovidDataStore>,
	document.getElementById('root')
);
