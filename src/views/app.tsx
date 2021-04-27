import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import Auth from './auth';
import NoMatch from './no_match';

const App = () => (
	<BrowserRouter basename="/Ace-Books-Frontend">
		<Switch>
			<Route exact path="/" component={Home} />

			<Route exact path="/auth/:mode?" component={Auth} />

			<Route path="*" component={NoMatch} />
		</Switch>
	</BrowserRouter>
);

export default App;
