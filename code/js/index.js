import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const store = createStore (allReducers, applyMiddleware(thunk));
const customHistory = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={customHistory}>
			<WebPage/>
		</Router>
	</Provider>
,
  document.getElementById('fieldToShow')
);
