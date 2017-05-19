import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../containers/home'
import TestComponent from '../components/test-component'

const Router = () : JSX.Element => 
	(<BrowserRouter>
		<div>
			<Route exact path="/" component={ Home } />
			<Route  path="/beer" component={ TestComponent } />
		</div>
	</BrowserRouter>);

export default Router;
