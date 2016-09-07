import React, {PropTypes} from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import IconLogo from '-!babel!svg-react!../res/logo.svg';

const HomePresentation = () => {
  return (
    <div className="home-blurb-container">

      <IconLogo />

      <div className="home-guarda-records">
        Records
      </div>

      <div className="home-guarda-blurb">
        East London immersive vibrations... Smooth, bassy, juicy beats!
      </div>

      <div className="home-guarda-social">

        social

      </div>

    </div>
  );
};

export default HomePresentation;
