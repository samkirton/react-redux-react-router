import React from 'react';

import HomePresentation from './HomePresentation';
import RadioPresentation from './radio/RadioPresentation';
import EventPresentation from './event/EventPresentation';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class HomePage extends React.Component {

  constructor() {
    super();

    this.onStartClick = this.onStartClick.bind(this);
    this.onPauseClick = this.onPauseClick.bind(this);

    // TODO: This data should be retrieved from an api
    this.state = {
      showRadio:false,
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
        facebook_event_url:"https://www.facebook.com/events/1140162162688718/"
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

        <Grid className="home-radio-page">

          <Row className="show-grid">

            <Col xs={12} sm={6} md={6} lg={6} className="radio-grid">

              {
                this.state.showRadio && <RadioPresentation
                streamUrl={this.state.streamUrl}
                onPlay={this.onPlay}
                paused={this.state.paused}
                onAir={this.state.onAir}
                onStartClick={this.onStartClick}
                onPauseClick={this.onPauseClick} />
              }
              {
                !this.state.showRadio && <HomePresentation />
              }

            </Col>

            <Col xs={12} sm={6} md={6} lg={6}>

              <EventPresentation
                event={this.state.event} />

            </Col>

          </Row>

        </Grid>

      </div>
    );
  }
}

export default HomePage;
