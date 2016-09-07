import React from 'react';

import EventListing from './EventListing';
import RadioPresentation from './RadioPresentation';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class RadioPage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    // TODO: The onAir and streamUrl should be retrieved from an api
    this.state = {
      paused:true,
      onAir:"DJ Nudge presenting Techtouch project",
      streamUrl:"http://centova.radio.com.pt:9034/stream",
      event:{
        title:"UPCOMING EVENT",
        acts:[
          {
            "name":"WLS",
            "type":"live"
          },
          {
            "name":"Samad",
            "type":"DJ set"
          },
          {
            "name":"Lorac",
            "type":"DJ set"
          },
          {
            "name":"Mar Tu",
            "type":"VJ"
          }
        ],
        day_time:"Sat 9am - 2am",
        date:"17-09-16",
        location:"Stage 3, Hackney Empire, London",
        facebook_event_url:"#"
      }
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

        <div className="background_left">
          &nbsp;
        </div>

        <div className="background_right">
          &nbsp;
        </div>

        <Grid className="radio-page">

          <Row className="show-grid">

            <Col xs={12} sm={6} md={6} lg={6} className="radio-grid">

              <RadioPresentation
                streamUrl={this.state.streamUrl}
                onPlay={this.onPlay}
                paused={this.state.paused}
                onAir={this.state.onAir}
                onStartClick={this.onStartClick}
                onPauseClick={this.onPauseClick} />

            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>

              <EventListing event={this.state.event} />

            </Col>

          </Row>

        </Grid>

      </div>
    );
  }
}

export default RadioPage;
