import React from 'react';
// import image from '../images/plane.jpg';
import vid from '../images/bridge.mp4';
// const vid = require('./bridge.mp4');
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div id='splash-page'>
      {/* <video loop autoPlay muted id='myVideo'>
        <source
        src={vid}2
        type="video/mp4"
        />
      </video> */}
      <div id='signUpLogInBtn'>
        <button><Link to='/SignUpLogIn'>Sign Up / Log In</Link></button>
      </div>
      <div>
        <h1>Explorio</h1>
        <p>Where Will You Go Next?</p>
      </div>
    </div>
  );
}

export default Splash;