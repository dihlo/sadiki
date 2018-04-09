import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class Pages extends Component {
	showlist() {
		return this.props.pages.map((pages) => {
			return (
				<li onClick={() => this.props.select (car)} key={pages.id}>{pages.name}</li>
			);
		});
	}


	render () {
		return (
			<ol>
				{this.showlist()}
			</ol>
		);
	}
}

function mapStateToProps(state) {
	return {
		pages: state.pages
	};
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators ({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pages);