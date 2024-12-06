import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddTransaction from './components/AddTransaction';
import Goals from './components/Goals';
import Predictions from './components/Predictions';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTransaction />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
