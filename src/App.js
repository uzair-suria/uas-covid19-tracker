// Pure React imports
import React from 'react';

// CSS Import
import './App.css';

// React Component Imports
import Dashboard from './components/Dashboard';
import CountrySelector from './components/CountrySelector';
import CovidCharts from './components/CovidCharts';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

// Material-UI Imports
// import classNames from 'classnames';

function App() {
	return (
		<div className="App">
			<AppBar />
			<CountrySelector />
			<Dashboard />
			<CovidCharts />
			<Footer />
		</div>
	);
}

export default App;
