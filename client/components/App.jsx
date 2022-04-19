import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => (
  {
    username: state.list.currentUserID,
  }  
);

const App = (props) => {
  return (
    <div>
      <h1 id='sayHi'>HI!!!</h1>
      <h1 >{props.username}</h1>
    </div>
  )
};


export default connect(mapStateToProps, null)(App);

