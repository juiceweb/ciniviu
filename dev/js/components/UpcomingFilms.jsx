import React from 'react';

import Icon from './includes/Icon.jsx';

export default class UpcomingFilms extends React.Component {
	constructor(){
		super();

		this.state = {
			baseUrl: 'https://image.tmdb.org/t/p/',
			films: [
				{
      				"poster_path": "\/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg",
      				"adult": false,
      				"overview": "A big screen remake of John Sturges' classic western The Magnificent Seven, itself a remake of Akira Kurosawa's Seven Samurai. Seven gun men in the old west gradually come together to help a poor village against savage thieves.",
      				"release_date": "2016-09-14",
      				"genre_ids": [28,12,37],
      				"id": 333484,
      				"original_title": "The Magnificent Seven",
      				"original_language": "en",
				    "title": "The Magnificent Seven",
				    "backdrop_path": "\/g54J9MnNLe7WJYVIvdWTeTIygAH.jpg",
				    "popularity": 30.498768,
				    "vote_count": 179,
				    "video": false,
				    "vote_average": 4.68
				},
				{
					"poster_path": "\/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg",
					"adult": false,
					"overview": "Arthur Bishop thought he had put his murderous past behind him when his most formidable foe kidnaps the love of his life. Now he is forced to travel the globe to complete three impossible assassinations, and do what he does best, make them look like accidents.",
					"release_date": "2016-08-25",
					"genre_ids": [28,80,53],
					"id": 278924,
					"original_title": "Mechanic: Resurrection",
					"original_language": "en",
					"title": "Mechanic: Resurrection",
					"backdrop_path": "\/6kMu4vECAyTpj2Z7n8viJ4RAaYh.jpg",
					"popularity": 16.546532,
					"vote_count": 352,
					"video": false,
					"vote_average": 4.23
				},
				{
					"poster_path": "\/lw0IqOSMsQcy1QnVIEIDppLmNwk.jpg",
					"adult": false,
					"overview": "A group of teens break into a blind man's home thinking they'll get away with the perfect crime. They're wrong.",
					"release_date": "2016-08-25",
					"genre_ids": [27,53],
					"id": 300669,
					"original_title": "Don't Breathe",
					"original_language": "en",
					"title": "Don't Breathe",
					"backdrop_path": "\/bCThHXQ3aLLDU3KFST0rC8mTan5.jpg",
					"popularity": 13.273912,
					"vote_count": 221,
					"video": false,
					"vote_average": 5.91
				},
				{
					"poster_path": "\/39jyxfevRRuLGbh88F5eIzRtOeo.jpg",
					"adult": false,
					"overview": "Husband and wife living in a dystopic future become trapped in a mysterious time loop \u2014 one that may have something to do with an ongoing battle between an omnipotent corporation and a ragtag band of rebels.",
					"release_date": "2016-09-16",
					"genre_ids": [53,878],
					"id": 410199,
					"original_title": "ARQ",
					"original_language": "en",
					"title": "ARQ",
					"backdrop_path": "\/q8kc6CzBfmIAHplBOVUWiAYrA56.jpg",
					"popularity": 9.421765,
					"vote_count": 55,
					"video": false,
					"vote_average": 6.39
				},
				{
					"poster_path": "\/43Gr00IiZtq2dOtYZQVOTwMf3kI.jpg",
					"adult": false,
					"overview": "On January 15, 2009, the world witnessed the \"Miracle on the Hudson\" when Captain \"Sully\" Sullenberger glided his disabled plane onto the frigid waters of the Hudson River, saving the lives of all 155 aboard. However, even as Sully was being heralded by the public and the media for his unprecedented feat of aviation skill, an investigation was unfolding that threatened to destroy his reputation and his career.",
					"release_date": "2016-09-08",
					"genre_ids": [18,36],
					"id": 363676,
					"original_title": "Sully",
					"original_language": "en",
					"title": "Sully",
					"backdrop_path": "\/vC9H1ZVdXi1KjH4aPfGB54mvDNh.jpg",
					"popularity": 8.301406,
					"vote_count": 110,
					"video": false,
					"vote_average": 5.46
				},
				{
					"poster_path": "\/a4qrfP2fVWqasbUUdKCwjDGCTTM.jpg",
					"adult": false,
					"overview": "Breaking up with Mark Darcy leaves Bridget Jones over 40 and single again. Feeling that she has everything under control, Jones decides to focus on her career as a top news producer. Suddenly, her love life comes back from the dead when she meets a dashing and handsome American named Jack. Things couldn't be better, until Bridget discovers that she is pregnant. Now, the befuddled mom-to-be must figure out if the proud papa is Mark or Jack.",
					"release_date": "2016-09-15",
					"genre_ids": [35,10749],
					"id": 95610,
					"original_title": "Bridget Jones's Baby",
					"original_language": "en",
					"title": "Bridget Jones's Baby",
					"backdrop_path": "\/u81y11sFzOIHdduSrrajeHOaCbU.jpg",
					"popularity": 7.269984,
					"vote_count": 74,
					"video": false,
					"vote_average": 5.61
				},
				{
					"poster_path": "\/5qVD5TD1CiALR5vUsMzh2BschVU.jpg",
					"adult": false,
					"overview": "Storks deliver babies\u2026or at least they used to. Now they deliver packages for a global internet retail giant. Junior, the company\u2019s top delivery stork, is about to be promoted when he accidentally activates the Baby Making Machine, producing an adorable and wholly unauthorized baby girl...",
					"release_date": "2016-09-22",
					"genre_ids": [16,35,10751],
					"id": 332210,
					"original_title": "Storks",
					"original_language": "en",
					"title": "Storks",
					"backdrop_path": "\/qvFYOUo072ZyhVoNSQdFqlq7uGD.jpg",
					"popularity": 5.641171,
					"vote_count": 15,
					"video": false,
					"vote_average": 5
				},
				{
					"poster_path": "\/kqmGs9q5WZkxKub60K6pU37GdvU.jpg",
					"adult": false,
					"overview": "Students on a camping trip discover something sinister is lurking beyond the trees.",
					"release_date": "2016-09-15",
					"genre_ids": [27,53],
					"id": 351211,
					"original_title": "Blair Witch",
					"original_language": "en",
					"title": "Blair Witch",
					"backdrop_path": "\/vgnhCfwo4VmDcDocSJ1tBPO3tX9.jpg",
					"popularity": 5.043778,
					"vote_count": 66,
					"video": false,
					"vote_average": 4.93
				},
				{
					"poster_path": "\/vR9YvUJCead23MOWwVzv9776eb1.jpg",
					"adult": false,
					"overview": "A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
					"release_date": "2016-09-29",
					"genre_ids": [14],
					"id": 283366,
					"original_title": "Miss Peregrine's Home for Peculiar Children",
					"original_language": "en",
					"title": "Miss Peregrine's Home for Peculiar Children",
					"backdrop_path": "\/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg",
					"popularity": 4.95798,
					"vote_count": 17,
					"video": false,
					"vote_average": 5.24
				},
				{
					"poster_path": "\/e5vQ0HztqucuLn2FK80QD2GSkfc.jpg",
					"adult": false,
					"overview": "CIA employee Edward Snowden leaks thousands of classified documents to the press.",
					"release_date": "2016-09-15",
					"genre_ids": [18,53],
					"id": 302401,
					"original_title": "Snowden",
					"original_language": "en",
					"title": "Snowden",
					"backdrop_path": "\/h9DKQUQmIN3r6SMKcvQ41jsXXxW.jpg",
					"popularity": 4.633782,
					"vote_count": 47,
					"video": false,
					"vote_average": 5.65
				},
				{
					"poster_path": "\/7D6hM7IR0TbQmNvSZVtEiPM3H5h.jpg",
					"adult": false,
					"overview": "A story set on the offshore drilling rig Deepwater Horizon, which exploded during April 2010 and created the worst oil spill in U.S. history.",
					"release_date": "2016-09-28",
					"genre_ids": [18],
					"id": 296524,
					"original_title": "Deepwater Horizon",
					"original_language": "en",
					"title": "Deepwater Horizon",
					"backdrop_path": "\/zjYdnBHbIOYBqKZxvBUsT5MevUA.jpg",
					"popularity": 4.529589,
					"vote_count": 27,
					"video": false,
					"vote_average": 2.98
				},
				{
					"poster_path": "\/46BJXoEkwu10dcZJ0psrLtCCBTP.jpg",
					"adult": false,
					"overview": "Mike Regan is a successful, self-made man who has it all: a gorgeous wife, a beautiful teenage daughter and a sleek, state-of-the-art \u201csmart home\u201d. But he soon finds himself in a deadly, high-stakes game of cat-and-mouse when his I.T. consultant, Ed, starts using his skills to stalk Mike\u2019s daughter and endanger his family, his business, and his life. In a world where there is no privacy, and personal secrets can go viral by the click of a mouse, Mike needs to rely on his old connections to defeat a new kind of nemesis.",
					"release_date": "2016-09-09",
					"genre_ids": [80,18,9648,53],
					"id": 340677,
					"original_title": "I.T.",
					"original_language": "en",
					"title": "I.T.",
					"backdrop_path": "\/yWsU33DMcwEVbpQugHicNxCHHuS.jpg",
					"popularity": 4.03536,
					"vote_count": 11,
					"video": false,
					"vote_average": 4.36
				},
				{
					"poster_path": "\/a7lziobzaFx9eeRjPWBMXhCOaL2.jpg",
					"adult": false,
					"overview": "Triggered by the mysterious phenomenon of the space probe \u2018Voyageur\u2019 returning to earth, Virginie meets her dead father on a train one night. She sets off with him on a metaphysical journey through Bulgaria, where her long-forgotten grief catches up with her. The young woman is confronted with feelings of transience, eternity and loss, brought on by the resurrection of her father.",
					"release_date": "2016-09-26",
					"genre_ids": [878],
					"id": 417964,
					"original_title": "Le Voyageur",
					"original_language": "en",
					"title": "The Voyager",
					"backdrop_path": null,
					"popularity": 4.0291,
					"vote_count": 0,
					"video": false,
					"vote_average": 0
				},
				{
					"poster_path": "\/ag6NsqD8tpDGgAcs4CnfdI3miSD.jpg",
					"adult": false,
					"overview": "Louis, a terminally ill writer, returns home after a long absence to tell his family that he is dying.",
					"release_date": "2016-09-01",
					"genre_ids": [18],
					"id": 338189,
					"original_title": "Juste la fin du monde",
					"original_language": "fr",
					"title": "It's Only the End of the World",
					"backdrop_path": "\/ngCkX82tbmMXQ2DhP9vqZbtSume.jpg",
					"popularity": 3.937585,
					"vote_count": 46,
					"video": false,
					"vote_average": 6.26
				},
				{
					"poster_path": "\/rpxbMjrq4CDPY30dTRbvdQsUcud.jpg",
					"adult": false,
					"overview": "Five people are kidnapped on the days leading up to Halloween and held hostage in a place called Murder World. While trapped, they must play a violent game called 31 where the mission is to survive 12 hours against a gang of evil clowns.",
					"release_date": "2016-09-15",
					"genre_ids": [27,53],
					"id": 284564,
					"original_title": "31",
					"original_language": "en",
					"title": "31",
					"backdrop_path": "\/mfsL6GHeg5nR5Q8pLqbkSykoXmb.jpg",
					"popularity": 3.745232,
					"vote_count": 23,
					"video": false,
					"vote_average": 4.91
				},
				{
					"poster_path": "\/x4x0Nj39oI2lO1R1GBojXqFV1rQ.jpg",
					"adult": false,
					"overview": "Lifelong friends Kate (Mamrie Hart), Evie (Grace Helbig) and Charlie (Hannah Hart) are in a rut. Kate spends her days at a middling job and her nights alone or on failed dates. Evie is married with the in-laws from hell, wandering from one charitable cause to the next. Charlie has the girl of her dreams but just can\u2019t seem to pull her business (or her act) together. On the eve of Kate\u2019s 30th birthday, she agrees to let Evie and Charlie throw her a party. But what\u2019s supposed to be a simple celebration becomes a wild who\u2019s who of past and present, and things quickly spiral out of control.",
					"release_date": "2016-09-23",
					"genre_ids": [10749,35],
					"id": 377492,
					"original_title": "Dirty 30",
					"original_language": "en",
					"title": "Dirty 30",
					"backdrop_path": "\/cA2WqnX48DRF2vniqOUzgFDiWH3.jpg",
					"popularity": 3.517809,
					"vote_count": 5,
					"video": false,
					"vote_average": 6.6
				},
				{
					"poster_path": "\/y7Qb7KVmr3i7OpsLm5n9ey8Ngqw.jpg",
					"adult": false,
					"overview": "A night guard at an armored car company in the Southern U.S. organizes one of the biggest bank heists in American history.",
					"release_date": "2016-09-30",
					"genre_ids": [35,28,80],
					"id": 213681,
					"original_title": "Masterminds",
					"original_language": "en",
					"title": "Masterminds",
					"backdrop_path": "\/hO1n3WFI099EB0fs5YJbd370mav.jpg",
					"popularity": 3.409695,
					"vote_count": 39,
					"video": false,
					"vote_average": 5.18
				},
				{
					"poster_path": "\/mPwHcyE0mG2NcIRRJvJjYL5NW0a.jpg",
					"adult": false,
					"overview": "Love for the same woman causes conflict between an over-achieving blind athlete and the brother who made him that way.",
					"release_date": "2016-09-23",
					"genre_ids": [35,18,10749],
					"id": 381040,
					"original_title": "My Blind Brother",
					"original_language": "en",
					"title": "My Blind Brother",
					"backdrop_path": "\/hEbD12inXMxAacjvw4lA9p4SUrA.jpg",
					"popularity": 3.404516,
					"vote_count": 4,
					"video": false,
					"vote_average": 8.5
				},
				{
					"poster_path": "\/j324TuN9jnuPiGIEbigybdlgel2.jpg",
					"adult": false,
					"overview": "Reeling from a terrifying assault, a nineteen year old enrolls into college with his brother and pledges the same fraternity. What happens there, in the name of 'brotherhood,' tests him and his loyalty in brutal ways.",
					"release_date": "2016-09-23",
					"genre_ids": [18],
					"id": 337874,
					"original_title": "Goat",
					"original_language": "en",
					"title": "Goat",
					"backdrop_path": "\/c0dlQQBuRT7BulATw9SxpXziKSA.jpg",
					"popularity": 3.394755,
					"vote_count": 6,
					"video": false,
					"vote_average": 7.5
				},
				{
					"poster_path": "\/595nj6lBNZqdkS2LsqHi0daSFC2.jpg",
					"adult": false,
					"overview": "A scientist and a teacher living in a dystopian future embark on a journey of survival with a special young girl named Melanie.",
					"release_date": "2016-09-23",
					"genre_ids": [878,18,53,27],
					"id": 375366,
					"original_title": "The Girl with All the Gifts",
					"original_language": "en",
					"title": "The Girl with All the Gifts",
					"backdrop_path": "\/k4pe70sGVvHlCwXH6td8Z3ZIRJf.jpg",
					"popularity": 3.390858,
					"vote_count": 18,
					"video": false,
					"vote_average": 4.92
				}
			]
		}
	}

	render(){
		return (
			<div className="container">
				<h2>Upcoming Films</h2>

				<div className="films">
					{this.renderFilms()}
					{this.renderSpacer()}
				</div>
			</div>
		)
	}

	renderFilms(){
		return(this.state.films.map(film => <Film key={film.id} film={film} baseUrl={this.state.baseUrl}/>) );
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
		return(
			<div className="card hover-actions film" style={{backgroundImage: 'url('+this.props.baseUrl+'w185'+this.props.film.poster_path+')'}}>
				<a className="posterlink" href={'./film/'+this.props.film.id} />
				<div className="card-actions">
					<a href="#" className="left icon bookmark" data-film={this.props.film.id} title="Bookmark">
						<Icon name="bookmark border" />
					</a>

					<a href={'./film/'+this.props.film.id} className="right">
						View
					</a>
				</div>
			</div>
		)
	}
}
