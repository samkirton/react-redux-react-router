import React from 'react';

import RadioPlayer from '../radio/RadioPlayer';

class HomePage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    this.state = {
      play:false
    }
  }

  onStartClick() {
    console.log("start!!");
  }

  onPauseClick() {
    console.log("pause!!");
  }

  onPlay() {
    console.log("play");
  }

  onPause() {
    console.log("pause");
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>Some admin functions</p>

        <div onClick={this.onStartClick}>
          Start
        </div>

        <div onClick={this.onPauseClick}>
          Pause
        </div>

        <RadioPlayer
          onPlay={this.onPlay}
          onPause={this.onPause}
          play={this.state.play}/>

      </div>
    );
  }
}

export default HomePage;
