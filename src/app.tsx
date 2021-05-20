import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Auth, Legal, NoMatch } from './views';

const App = () => (
	<Suspense fallback="loading">
		<BrowserRouter basename="/Ace-Books-Frontend">
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/auth/:option(login|register)" component={Auth} />
				<Route exact path="/auth/:option?">
					<Redirect to="/auth/login" />
				</Route>

				
				<Route exact path="/legal/:option(faqs|terms-of-service|privacy-notice)" component={Legal} />
				<Route exact path="/legal/:option?">
					<Redirect to="/legal/faqs" />
				</Route>

				<Route path="*" component={NoMatch} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);

export default App;
