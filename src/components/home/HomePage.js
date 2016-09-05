import React from 'react';

import RadioPlayer from '../radio/RadioPlayer';

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
    console.log("start!!");
    this.setState({paused:false});
  }

  onPauseClick() {
    console.log("pause!!");
    this.setState({paused:true});
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>Some admin functions</p>


        <div onClick={this.onStartClick} className={this.state.paused ? 'show' : 'hide'}>
          Play
        </div>

        <div onClick={this.onPauseClick} className={this.state.paused ? 'hide' : 'show'}>
          Pause
        </div>

        <RadioPlayer
          stream="http://centova.radio.com.pt:9034/stream"
          paused={this.state.paused}/>

      </div>
    );
  }
}

export default HomePage;
