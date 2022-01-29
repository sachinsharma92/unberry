import React, {  }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogScreen from './pages/blog';
import HomeScreen from './pages/home';

const AppRouter = () => {
  return (
    <div className="main-router-page">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
