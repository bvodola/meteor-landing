import React , {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Main from './layouts/Main.jsx';
import Home from './components/Home.jsx';
import { LandingRoutes } from '../../landing/imports/client/ui/Landing.jsx';

const Routes = (
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path='/' component={Home} />
		</Route>
		<Route path='landing'>
			{ LandingRoutes }
		</Route>
	</Router>
);

class App extends Component {
	render() {
		return Routes;
	}
}

export default App;