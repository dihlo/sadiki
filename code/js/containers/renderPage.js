import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class Page extends Component {

	render () {
		if (!this.props.page){
			return(<p>Take auto</p>);
		}
		return (
			<div>
				<h2>{this.props.page.name}</h2>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		page: state.active
	};
}


export default connect(mapStateToProps)(Page);