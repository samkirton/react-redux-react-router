import React, {PropTypes} from 'react';

import Play from '-!babel!svg-react!../../res/play.svg';
import Pause from '-!babel!svg-react!../../res/pause.svg';

const ControlButton = props => {
  return (
    <div className="control-buttons">

      <div onClick={props.onStartClick} className={props.paused ? 'show' : 'hide'}>
        <Play />
        <div className="control-buttons-text">Play</div>
      </div>

      <div onClick={props.onPauseClick} className={props.paused ? 'hide' : 'show'}>
        <Pause />
        <div className="control-buttons-text">Pause</div>
      </div>

    </div>
  );
};

ControlButton.propTypes = {
  onStartClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired
};

export default ControlButton;
