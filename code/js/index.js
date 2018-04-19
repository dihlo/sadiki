import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import WebPage from './components/WebPage';
import thunk from 'redux-thunk';

const store = createStore (allReducers, applyMiddleware(thunk));

ReactDOM.render(
		<Provider store={store}>
			<WebPage/>
		</Provider>
,
  document.getElementById('fieldToShow')
);
