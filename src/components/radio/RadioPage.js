import React from 'react';

import RadioPlayer from './RadioPlayer';
import ControlButton from './ControlButton';
import OnAirLabel from './OnAirLabel';

class RadioPage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    // TODO: The onAir and streamUrl should be retrieved from an api
    this.state = {
      paused:true,
      onAir:"DJ Nudge presenting Techtouch project",
      streamUrl:"http://centova.radio.com.pt:9034/stream"
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

        <div className="radio-player-container">

          <RadioPlayer
            stream={this.state.streamUrl}
            onPlay={this.onPlay}
            paused={this.state.paused}/>

          <div className="guarda">

          </div>

          <div className="presents">

          </div>

          <OnAirLabel
            onAir={this.state.onAir}/>

          <ControlButton
             onStartClick={this.onStartClick}
             onPauseClick={this.onPauseClick}
             paused={this.state.paused} />

        </div>

        <div className="event-details-container">

            <div className="event-title">UPCOMING EVENT</div>

            <div className="event-listing">
              <div >WLS <span className="performance-type">(live)</span></div>
              <div>Samad <span className="performance-type">(DJ set)</span></div>
              <div>Lorac <span className="performance-type">(DJ set)</span></div>
              <div>Mar Tu <span className="performance-type">(VJ)</span></div>
            </div>

            <div className="event-details-specifics">

              <div>Sat 9om - 2am</div>
              <div>17-09-16</div>
              <div>Stage 3, Hackney Empire</div>

            </div>

            <div className="event-facebook">

               <img src="fb.svg" alt="Facebook event" />

            </div>

        </div>

      </div>
    );
  }
}

export default RadioPage;
