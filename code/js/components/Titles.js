import React from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

export class Titles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.title = this.title.bind(this);
  }

  title() {
    return this.props.pages[this.props.pageID - 1].name;
  }

  render() {
    return (
      <div style={{ color: 'balck', fontSize: 20 }}>
        {this.title()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const  {pageID}  = state.active;
  return {
    pageID,
    pages: state.pages
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Titles);