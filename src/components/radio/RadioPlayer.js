import React, {PropTypes} from 'react';

const RadioPlayer = props => {
  return (
    <audio
      className="react-audio-player"
      src="http://centova.radio.com.pt:9034/stream"
      autoPlay="false"
      onPlay={props.onPlay}
      onPause={props.onPause}/>
  );
};

RadioPlayer.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  play: PropTypes.bool.isRequired
};

export default RadioPlayer;
