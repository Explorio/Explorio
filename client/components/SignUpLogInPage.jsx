import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  currentUsername: state.list.currentUsername,
  userVisitedCountries: state.list.userVisitedCountries,
  userDestinationCountries: state.list.userDestinationCountries
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  updateUsername : (username) => dispatch(actions.updateUsernameActionCreator(username))
});

const SignUpLogInPage = (props) => {
  return (
    <div id='modalContainer'>
      <div id='logInModal'>
        <h2>Log In</h2>
        <div>
          <input
            className='modalInput' 
            placeholder='Username'
            onChange={(e) => { props.updateUsername(e.target.value) }}
            value={props.currentUsername}
          />
        </div>
        <div>
          <input 
            className='modalInput' 
            placeholder='Password'
          />
        </div>
        <button id='logInBtn'>Log In</button>
      </div>

      <div id='signUpModal'>
        <h2>Sign Up</h2>
        <div>
          <input
            className='modalInput' 
            placeholder='Username'
          />
        </div>
        <div>
          <input
            className='modalInput' 
            placeholder='Password'
          />
        </div>
        <div>
          <input
            className='modalInput'  
            placeholder='First Name'
          />
        </div>
        <div>
          <input
            className='modalInput'  
            placeholder='Last Name'
          />
        </div>
        <button id='signUpBtn'>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpLogInPage;
