import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './layouts/Main.jsx';
import Home from './components/Home.jsx';
import { LandingRoutes, LandingApp } from '../../landing/imports/client/ui/Landing.jsx';

const AppRoutes = (
	<Route component={Main}>
		<Route path='/' component={Home} />
	</Route>
);

class App extends Component {
	render() {
		return(
			<Router history={browserHistory}>
				{ AppRoutes }
				<Route path='landing'>
					{ LandingRoutes }
				</Route>
			</Router>
		);
	}
}

export default App;