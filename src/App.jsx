import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Travelia</h1>
        <nav>
          <Link to="/" className="mx-2">בית</Link>
          <Link to="/deals" className="mx-2">דילים</Link>
          <Link to="/contact" className="mx-2">צור קשר</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;