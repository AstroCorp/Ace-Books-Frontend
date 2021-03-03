import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './home';
import NoMatch from './no_match';

const App = () => (
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="*">
				<NoMatch />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
