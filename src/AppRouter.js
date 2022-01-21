import React, {  }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/auth';
import OtpVerifyScreen from './pages/auth/otpVerify';
import PositionScreen from './pages/positions';

const AppRouter = () => {

  return (
    <div className="main-router-page">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/otp-verify" element={<OtpVerifyScreen />} />
          <Route path="/position" element={<PositionScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
