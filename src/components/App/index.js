import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from '../hoc';
import routes from './routes';

import './app.css';

const App = () => {
	const renderSwitch = () => (
		<Switch>
			{
				routes.map((route) => {
					const component = Navigation(route.component, route.path);

					return (
						<Route
							key={route.name}
							path={route.path}
							component={component}
							exact={route.exact}
						/>
					);
				})
			}
		</Switch>
	);

	return (
		<Router>
			<div className="app">
				{renderSwitch()}
			</div>
		</Router>
	);
};

export default App;