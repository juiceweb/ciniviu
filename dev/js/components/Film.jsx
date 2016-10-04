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
		let backdrop = film.backdrop_path ? this.state.baseUrl+'w1280'+film.backdrop_path : false;

		console.log(film);

		return film ? (
			<div className="film-single" style={backdrop ? {backgroundImage: 'url('+backdrop+')'} : null}>
				<div className="container">
					<h1>{film.title}</h1>

					<div className="content">
						<div className="left">
							<div className="card nohover overview">
								<p className="subtitle">Description</p>
								<p>{film.overview}</p>

								<br />

								<p className="subtitle">Genres</p>
								<p>{film.genres.map((genre, i, a) => (
										<span>
											<a href={"/genre/"+genre.id}>{genre.name}</a>
											{i+1 != a.length ? ", " : null}
										</span>
								))}</p>
							</div>
						</div>

						<div className="right">
							<div className="card nohover poster">
								<img src={this.state.baseUrl+'w185'+film.poster_path} />
							</div>
						</div>
					</div>
				</div>
			</div>
		) : <Loader />;
	}
}
