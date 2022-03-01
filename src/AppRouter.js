import React, {  }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogScreen from './pages/blog';
import BlogDetail from './pages/blogDetail';
import HomeScreen from './pages/home';

const AppRouter = () => {
  return (
    <div className="main-router-page">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/blog" element={<BlogScreen />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
