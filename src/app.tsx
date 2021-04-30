import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/home';
import Auth from './views/auth';
import NoMatch from './views/no_match';

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
