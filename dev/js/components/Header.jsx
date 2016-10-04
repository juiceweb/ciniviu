import React from 'react';

export default class Header extends React.Component {
	render(){
		return(
			<div className="header">
				<div className="wrapper">
					{/*<h1>ciniviu</h1>*/}
					<img src="/img/logo-fill.png" className="logo" />
					{/*<br />
					<img src="/img/logo.png" className="logo" />*/}
				</div>
			</div>
		)
	}
}
