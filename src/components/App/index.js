import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fullscreen from "react-full-screen";
import { Navigation } from '../hoc';
import routes from './routes';

import './app.css';

class App extends Component {
	state = {
		isFull: false
	}

	goFull = () => {
    this.setState({
			isFull: true
		});
  }

	exitFull = () => {
    this.setState({
			isFull: false
		});
  }
	
	render() {
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
			
		const button = this.state.isFull ? (
				<div
					className="exit_full"
					onClick={this.exitFull}
				></div>
		) : (
				<div
					className="go_full"
					onClick={this.goFull}
				></div>
		)

		return (
			<Fullscreen
				enabled={this.state.isFull}
				onChange={isFull => this.setState({isFull})}
			>
				{button}
				<Router>
					<div className="app">
						
						{renderSwitch()}
					</div>
				</Router>
			</Fullscreen>
		);
	}
};

export default App;