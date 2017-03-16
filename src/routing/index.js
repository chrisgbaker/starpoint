import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';
import history from './history-instance';

import  AppWrapper from '../containers/app-wrapper'
import  Home from '../containers/home'

import  TestComponent from '../components/test-component'


const routes = (
    <Route path="/" component={ AppWrapper }> 
		<IndexRoute component={ Home } />
		<Route path="beer" component={ TestComponent } />	
	</Route>
);

const Routing = () => <Router history={ history } routes={ routes } />;

export default Routing;
