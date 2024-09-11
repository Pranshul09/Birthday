import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SpinnerPageOne from './SpinnerPageOne';
import SpinnerPage from './SpinnerPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spinner" element={<SpinnerPage />} />
        <Route path="/spinnerPage" element={<SpinnerPageOne />} />
      </Routes>
    </Router>
  );
}
export default App;