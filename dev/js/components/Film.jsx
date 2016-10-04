import React from 'react';

import Loader from './includes/Loader.jsx';
import {
	buildUrl,
	locale,
	apiKey
} from './includes/config.js';

export default class Film extends React.Component {
	constructor(){
		super();
		this.state = {
			baseUrl: 'https://image.tmdb.org/t/p/',
			film: false
		};
	}

	componentDidMount(){
		let url = buildUrl('/movie/'+this.props.filmID, {
			api_key: apiKey,
			language: locale['language']
		});

		let self = this;

		fetch(url, {
				method: 'GET',
				cache: false,
				mode: 'cors'
		}).then(res => res.json()).then(json => {
			self.setState({
				film: json
			});
		}).catch(err => console.error(err));
	}

	render(){
		let film = this.state.film;
		let backdrop = film.backdrop_path ? this.state.baseUrl+'w1280'+film.backdrop_path : null;

		console.log(backdrop, film);
		
		return film ? (
			<div className="container" style={{backgroundImage: 'url('+backdrop+')'}}>
				<h1>{film.title}</h1>
			</div>
		) : <Loader />;
	}
}
