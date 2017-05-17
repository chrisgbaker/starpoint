import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TestComponent from '../components/test-component'
import  Home from '../containers/home'

const Router = () => 
	<BrowserRouter>
		<div>
			<Route exact path="/" component={ Home } />
			<Route  path="/beer" component={ TestComponent } />
		</div>
	</BrowserRouter>;

export default Router;
