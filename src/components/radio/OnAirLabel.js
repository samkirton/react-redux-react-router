import React, {PropTypes} from 'react';

const OnAirLabel = props => {
  return (
    <div className="on-air">

      <div className="on-air-rewind-it-radio">
        Rewind It Radio
      </div>

      <div className="on-air-with">
        w/
      </div>

      <div className="on-air-guest">
        {props.onAir}
      </div>

    </div>
  );
};

OnAirLabel.propTypes = {
  onAir: PropTypes.string.isRequired
};

export default OnAirLabel;
