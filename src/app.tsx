import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Auth, Legal, NoMatch } from './views';

const App = () => (
	<BrowserRouter basename="/Ace-Books-Frontend">
		<Switch>
			<Route exact path="/" component={Home} />

			<Route exact path="/auth/:option?" component={Auth} />

			<Route exact path="/legal/:option?" component={Legal} />

			<Route path="*" component={NoMatch} />
		</Switch>
	</BrowserRouter>
);

export default App;
