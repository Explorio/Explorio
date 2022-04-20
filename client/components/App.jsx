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

