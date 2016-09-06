import React from 'react';

import RadioPlayer from './RadioPlayer';
import ControlButton from './ControlButton';
import OnAirLabel from './OnAirLabel';

import IconFacebook from '-!babel!svg-react!../../res/fb.svg';
import IconLogo from '-!babel!svg-react!../../res/logo.svg';
import IconPresent from '-!babel!svg-react!../../res/present.svg';

import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row'

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
    // TODO: show loading until this is called
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

        <div className="test">
                       r
        </div>

        <div className="test2">
          t
        </div>

        <Grid className="radio-page">
          <Row className="show-grid">
            <Col xs={12} sm={6} md={6} lg={6}>

              <div className="radio-player-container">

                <RadioPlayer
                  stream={this.state.streamUrl}
                  onPlay={this.onPlay}
                  paused={this.state.paused}/>

                <div className="guarda">
                  <IconLogo />
                </div>

                <div className="presents">
                  <IconPresent />
                </div>

                <OnAirLabel
                  onAir={this.state.onAir}/>

                <ControlButton
                  onStartClick={this.onStartClick}
                  onPauseClick={this.onPauseClick}
                  paused={this.state.paused} />

              </div>

            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>

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
                  <div className="event-details-specifics-date">17-09-16</div>
                  <div>Stage 3, Hackney Empire, London</div>

                </div>

                <div className="event-facebook">

                  <IconFacebook />

                </div>

              </div>

            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default RadioPage;
