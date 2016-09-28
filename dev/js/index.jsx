import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import UpcomingFilms from './components/UpcomingFilms.jsx';


//Header and Footer
ReactDOM.render(
	<Header />,
	document.getElementById('header')
);
ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);



//Get URL
let path = window.location.pathname.split('/').filter(item => item); //Get path as array, remove empty items
if(!path) path.push('upcoming'); //If no path, use upcoming films as path

switch(path[0]){
	case 'film':
		ReactDOM.render(
			<h1 filmId={path[1]}>Film ID: {path[1]}</h1>,
			document.getElementById('body')
		);
		break;
	case 'upcoming':
	default:
		ReactDOM.render(
			<UpcomingFilms/>,
			document.getElementById('body')
		);
		break;
}
