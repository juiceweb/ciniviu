import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import UpcomingFilms from './components/UpcomingFilms.jsx';

ReactDOM.render(
	<Header />,
	document.getElementById('header')
);

ReactDOM.render(
	<UpcomingFilms />,
	document.getElementById('body')
);
