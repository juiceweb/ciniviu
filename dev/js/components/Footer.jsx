import React from 'react';

import Icon from './includes/Icon.jsx';

export default class Header extends React.Component {
	render(){
		return(
			<div className="footer">
				<div className="wrapper">
					<p>Copyright &copy; 2016</p>
					<p>Made with <Icon name="favorite" /> by <a href="#">Juice</a></p>
				</div>
			</div>
		)
	}
}
