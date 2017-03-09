import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import history from './history-instance';

import  AppWrapper from '../containers/app-wrapper'
import  HomeComponent from '../containers/home'

import  TestComponent from '../components/test-component'


const routes = (
    <Route path="/" component={ AppWrapper }> 
		<IndexRoute component={ HomeComponent } />
		<Route path="beer" component={ TestComponent } />	
	</Route>
);

const Routing = () : JSX.Element => <Router history={ history } routes={ routes } />;

export default Routing;
