import React, {PropTypes} from 'react';

const RadioPlayer = props => {
  return (
    <audio
      className="react-audio-player"
      src={props.stream}
      autoPlay="false"
      muted={props.paused}/>
  );
};

RadioPlayer.propTypes = {
  stream: PropTypes.string.isRequired,
  paused: PropTypes.bool.isRequired
};

export default RadioPlayer;
