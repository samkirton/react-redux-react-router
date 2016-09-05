import React from 'react';

import RadioPlayer from '../radio/RadioPlayer';
import ControlButton from '../radio/ControlButton';

class HomePage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    this.state = {
      paused:true
    };
  }

  onStartClick() {
    this.setState({paused:false});
  }

  onPauseClick() {
    this.setState({paused:true});
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>Some admin functions</p>

        <ControlButton
           onStartClick={this.onStartClick}
           onPauseClick={this.onPauseClick}
           paused={this.state.paused} />

        <RadioPlayer
          stream="http://centova.radio.com.pt:9034/stream"
          paused={this.state.paused}/>

      </div>
    );
  }
}

export default HomePage;
