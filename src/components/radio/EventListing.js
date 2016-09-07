import React, {PropTypes} from 'react';

import IconFacebook from '-!babel!svg-react!../../res/fb.svg';

const EventListing = props => {
  return (
    <div className="event-details-container">

      <div className="event-title">{props.event.title}</div>

      <div className="event-listing">
          {
            props.event.acts.map(function(act) {
              return (<div>{act.name} <span className="performance-type">({act.type})</span></div>);
            })
          }
      </div>

      <div className="event-details-specifics">

        <div>{props.event.day_time}</div>
        <div className="event-details-specifics-date">{props.event.date}</div>
        <div>{props.event.location}</div>

      </div>

      <div className="event-facebook">

        <a href={props.event.facebook_event_url}><IconFacebook /></a>

      </div>

    </div>
  );
};

EventListing.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventListing;
