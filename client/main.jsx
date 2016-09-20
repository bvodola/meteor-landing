import 'react-hot-loader/patch';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import { AppContainer } from 'react-hot-loader';

Meteor.startup(() => {
	render(<App />, document.getElementById('app'));
	// render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

	// if (module.hot) {
	// 	module.hot.accept('./containers/Root', () => {
	// 		const NextApp = require('../imports/ui/App.jsx').default;
	// 		render(
	// 			<AppContainer>
	// 				<NextApp />
	// 			</AppContainer>,
	// 			document.getElementById('app')
	// 		);
	// 	});
	// }
});