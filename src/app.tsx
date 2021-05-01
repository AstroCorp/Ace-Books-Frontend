import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Auth, Legal, NoMatch } from './views';

const App = () => (
	<Suspense fallback="loading">
		<BrowserRouter basename="/Ace-Books-Frontend">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/auth/:option?" component={Auth} />
				<Route exact path="/legal/:option?" component={Legal} />
				<Route path="*" component={NoMatch} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);

export default App;
