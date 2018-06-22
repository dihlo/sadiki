import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import { Card } from 'antd';
const { Meta } = Card;

class CardTeamplate extends React.Component {
    constructor(props) {
        super(props);
        /*this.state = {
          confirmDirty: false,
          autoCompleteResult: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
        this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
        this.validateToNextPassword = this.validateToNextPassword.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);*/
    }

  render() {
    return (
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="http://neobroker-styles.s3.amazonaws.com/img/6678/responsive-design-07.jpg" />}
        >
          <Meta
            title="Летний день"
          />
        </Card>
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

export default connect(mapStateToProps, matchDispatchToProps)(CardTeamplate);

