import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, withRouter, Switch} from 'react-router';
import './styles.css';
import Home from './components/Home';
import Food from './components/Food';
import Schedule from './components/Schedule';
import News from './components/News';

/*import App from './App';
import Home from './components/Home';
import Food from './components/Food';
import Schedule from './components/Schedule';
import News from './components/News';
import Profile from './components/Profile';
import Quit from './components/Quit';*/

/*ReactDOM.render(
	<Router history={hashHistory}>
		<IndexRoute path="/"  component={Home} />
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/Food" component={Food}/>
			<Route path="/Schedule" component={Schedule}/>	
			<Route path="/News" component={News}/>
			<Route path="/Profile" component={Profile}/>
			<Route path="/Quit" component={Quit}/>
		</Route>
	</Router>, 
	document.getElementById('root'));*/


				/*<Switch>
					<Route path="/closepart" component={Home}>
						<Route path="/closepart/home" component={Home}/>
					</Route>
					<Route path="/closepart/home" component={Home}/>
				</Switch>*/


/*export default withRouter(connect(mapStateToProps, {})(Closepart));*/

class Closepart extends React.Component {

	render() {
		return(
			<div>
				<Switch>
					<Route path="/closepart/home" component={Home} />
					<Route path="/closepart/food" component={Food} />
					<Route path="/closepart/schedule" component={Schedule} />
					<Route path="/closepart/news" component={News}/>
				</Switch>
			</div>	
		);
	}

}


export default Closepart;
