import React, {PropTypes} from 'react';

const RadioPlayer = props => {
  return (
    <audio
      className="react-audio-player"
      src={props.stream}
      autoPlay="false"
      onPlay={props.onPlay}
      onPause={props.onPause}
      muted={props.paused}/>
  );
};

RadioPlayer.propTypes = {
  stream: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired
};

export default RadioPlayer;
