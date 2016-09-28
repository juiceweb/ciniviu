import React from 'react';

import Loader from './includes/Loader.jsx';

import {buildUrl, locale} from './includes/config.js';

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
			'api_key': '088583b3c82b77eaf1d6cd0ea2aac19f',
			'language': locale['language']
		});

		fetch(url, {
			method: 'GET',
			cache: false,
			mode: 'cors'
		}).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			this.setState({
				film: data
			});
		});
	}

	render(){
		return this.state.film ? this.renderFilm() : <Loader />;
	}

	renderFilm(){
		return(
			<div className="film-single" style={{backgroundImage: 'url('+this.state.baseUrl+'w1280'+this.state.film.backdrop_path+')'}}>
				<div className="container">
					<h1>{this.state.film.title}</h1>

					<div className="content">
						<div className="left">
							<div className="card no-hover overview">
								<p className="subtitle">Description</p>
								<p>{this.state.film.overview}</p>

								<br />

								<p className="subtitle">Genre(s)</p>
								<p>{this.state.film.genres.map((genre, i, arr) => (
									<span key={i}>
										<a href={'/genre/'+genre.id}>
											{genre.name}
										</a>
										{i != arr.length-1 ? ', ' : null}
									</span>
								))}</p>
							</div>
						</div>

						<div className="right">
							<div className="card no-hover poster">
								<img src={this.state.baseUrl+'w500'+this.state.film.poster_path} />{/*
							*/}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
