import React, {  }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/auth';
import OtpVerifyScreen from './pages/auth/otpVerify';
import PositionScreen from './pages/positions';
import PositionDetailScreen from './pages/positions/details';
import NewPositionScreen from './pages/positions/newPosition';
import ProfileScreen from './pages/profile';

const AppRouter = () => {

  return (
    <div className="main-router-page">
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/otp-verify" element={<OtpVerifyScreen />} />
          <Route path="/position" element={<PositionScreen />} />
          <Route path="/position-details" element={<PositionDetailScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/add-new-position" element={<NewPositionScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
