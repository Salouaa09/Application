// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';


import CamerasPage from './pages/CamerasPage';
import TestVideoPage from './pages/TestVideoPage';
import NotificationsPage from './pages/NotificationsPage';
import HistoriquePage from './pages/HistoriquePage';
import AdminDashboard from './pages/AdminDashboard';


//les liens vers les pages quon. vas utiliser dans le dashboard
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cameras" element={<CamerasPage />} />
        <Route path="/test-video" element={<TestVideoPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/historique" element={<HistoriquePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
