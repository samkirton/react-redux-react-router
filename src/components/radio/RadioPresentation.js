import React, {PropTypes} from 'react';

import RadioPlayer from './RadioPlayer';
import ControlButton from './ControlButton';
import OnAirLabel from './OnAirLabel';

import IconLogo from '-!babel!svg-react!../../res/logo.svg';
import IconPresent from '-!babel!svg-react!../../res/present.svg';

const RadioPresentation = props => {
  return (
    <div className="radio-player-container">

      <RadioPlayer
        stream={props.streamUrl}
        onPlay={props.onPlay}
        paused={props.paused}/>

      <div className="guarda">
        <IconLogo />
      </div>

      <div className="presents">
        <IconPresent />
      </div>

      <OnAirLabel
        onAir={props.onAir}/>

      <ControlButton
        onStartClick={props.onStartClick}
        onPauseClick={props.onPauseClick}
        paused={props.paused} />

    </div>
  );
};

RadioPresentation.propTypes = {
  streamUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  onAir: PropTypes.string.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onPauseClick: PropTypes.func.isRequired
};

export default RadioPresentation;
