<<<<<<< HEAD
import React from 'react';
import Map from './Map/Map.jsx';
import InputBar from './inputBar/inputBar.jsx';

const App = () => {
  return (
    <div>
      <Map />
      <InputBar />
    </div>
  );
};

export default App;
=======
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash.jsx';
import SignUpLogInPage from './SignUpLogInPage.jsx';

// const mapStateToProps = state => (
//   {
//     username: state.list.currentUsername,
//   }  
// );

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<SignUpLogInPage />} />
            <Route path='/SignUpLogIn' element={<SignUpLogInPage />} />
        </Routes>
    </Router>
  )
};

export default App;
// export default connect(mapStateToProps, null)(App);

>>>>>>> main
