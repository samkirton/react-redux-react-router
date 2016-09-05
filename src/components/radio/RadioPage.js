import React from 'react';

import RadioPlayer from './RadioPlayer';
import ControlButton from './ControlButton';

class RadioPage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    this.state = {
      paused:true
    };
  }

  onPlay() {
    console.log('play');
  }

  onStartClick() {
    this.setState({paused:false});
  }

  onPauseClick() {
    this.setState({paused:true});
  }

  render() {
    return (
      <div>
        <h1>Guarda, Rewind it</h1>

        <ControlButton
           onStartClick={this.onStartClick}
           onPauseClick={this.onPauseClick}
           paused={this.state.paused} />

        <RadioPlayer
          stream="http://centova.radio.com.pt:9034/stream"
          onPlay={this.onPlay}
          paused={this.state.paused}/>

      </div>
    );
  }
}

export default RadioPage;
