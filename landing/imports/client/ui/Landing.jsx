import { Meteor } from 'meteor/meteor';
import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'
import Loading from './layouts/Loading.jsx';
import Confirmation from './layouts/Confirmation.jsx';

import Page from './containers/Page.jsx';
import AddPage from './containers/admin/AddPage.jsx';
import AddTemplate from './components/admin/AddTemplate.jsx';

// ====================
// Main Pages Component
// ====================
class Landing extends Component {

	render() {
		return(
			<Page brand={this.props.params['brand']} slug={this.props.params['slug']} />
		);
	}
}

// ================
// Routes Component
// ================
const LandingRoutes = (
	<Route>
		<Route path='admin'>
			<Route path='add-page' component={AddPage} />
			<Route path='add-template' component={AddTemplate} />
		</Route>
		<Route path='page'>
			<Route path='confirmation' component={Confirmation} />
			<Route path='(:brand/:slug)' component={Landing} />
		</Route>
	</Route>
);

// =================
// Wrapper Component
// =================
class LandingApp extends Component {
	render() {
		return(
			<Router history={browserHistory}>
				{ LandingRoutes }
			</Router>
		);
	}
}

export { Landing, LandingRoutes, LandingApp };