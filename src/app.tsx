import React, { Suspense } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Auth, Legal, NoMatch } from './views';

const App = () => (
	<Suspense fallback="loading">
		<HashRouter basename="/Ace-Books-Frontend">
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/auth/:option(login|register|recovery)" component={Auth} />
				<Route exact path="/auth/:option?">
					<Redirect to="/auth/login" />
				</Route>

				
				<Route exact path="/legal/:option(faqs|terms-of-service|privacy-notice|cookies-notice)" component={Legal} />
				<Route exact path="/legal/:option?">
					<Redirect to="/legal/faqs" />
				</Route>

				<Route path="*" component={NoMatch} />
			</Switch>
		</HashRouter>
	</Suspense>
);

export default App;
