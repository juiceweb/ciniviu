import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
	render(){
		return (
			<div className="root">
				<h1>Hello, World!</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);
