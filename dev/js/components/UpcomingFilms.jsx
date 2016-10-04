import React from 'react';

import Icon from './includes/Icon.jsx';
import Loader from './includes/Loader.jsx';
import {buildUrl, locale, apiKey} from './includes/config.js';

export default class UpcomingFilms extends React.Component {
	constructor(){
		super();

		console.log(apiKey, locale);

		this.state = {
			baseUrl: 'https://image.tmdb.org/t/p/',
			films: false
		}
	}

	componentDidMount() {
		let url = buildUrl('/movie/now_playing', {
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
				films: json.results
			});
		}).catch(err => console.error(err));
	}

	render(){
		console.log('Films: ', this.state.films);
		return (
			<div className="container">
				<h2>Upcoming Films</h2>

				<div className="films">
					{this.state.films ? [this.renderFilms(), this.renderSpacer()] : this.renderLoader()}
				</div>
			</div>
		);
	}

	renderLoader(){
		return <Loader />
	}

	renderFilms(){
		return(this.state.films.map(film => <Film key={film.id} film={film} baseUrl={this.state.baseUrl}/>));
	}

	renderSpacer(){
		let spacers = [];
		for(let i = 0; i < 8; i++){
			spacers.push( <div className="card film" key={'spacer-'+i} /> );
		}
		return spacers;
	}
}

class Film extends React.Component {
	render(){
		return this.props.film.poster_path ? (
			<div className="card hover-actions film" style={{backgroundImage: 'url('+this.props.baseUrl+'w185'+this.props.film.poster_path+')'}}>
				<a className="posterlink" href={'/film/'+this.props.film.id} />
				<div className="card-actions">
					<a href="#" className="left icon bookmark" data-film={this.props.film.id} title="Bookmark">
						<Icon name="bookmark border" />
					</a>

					<a href={'/film/'+this.props.film.id} className="right">
						View
					</a>
				</div>
			</div>
		) : null;
	}
}
