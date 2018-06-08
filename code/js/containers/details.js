import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions';

class Details extends Component {
	/*showlist() {
		return this.props.cars.map((car) => {
			return (
				<li onClick={() => this.props.select (car)} key={car.id}>{car.name}</li>
			);
		});
	}*/


	render () {
		if (!this.props.car){
			return(<p>Take auto</p>);
		}
		return (
			<div>
				<h2>{this.props.car.name}</h2>
				<img src={this.props.car.img}/><br/>
				<p>{this.props.car.desc}</p>
				<p>Speed: {this.props.car.desc}, weight: {this.props.car.weight}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		car: state.active
	};
}

/*function matchDispatchToProps (dispatch) {
	return bindActionCreators ({select: select}, dispatch)
}*/

export default connect(mapStateToProps)(Details);