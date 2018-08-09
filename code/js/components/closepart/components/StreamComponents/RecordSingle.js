import React from 'react';
import { Player, BigPlayButton } from 'video-react';

/*<a href="/" className="record-title">{props.date}, {props.timeStart}-{props.timeFinish}</a> */

class RecordSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }  
  };
  render () {
  return (
      <div className="record-single">
          <div className="record-video">
              <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                <BigPlayButton position="center" />
              </Player>
              <a href="/" className="record-title">{this.props.date}, {this.props.timeStart}-{this.props.timeFinish}</a> 
          </div>
      </div>
  );
  }
}

export default RecordSingle;