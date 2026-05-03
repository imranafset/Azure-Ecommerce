import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './components/Products';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to Ecommerce App</h2>
      <p>Click "View Products" above to see our catalog.</p>
      <p>Backend Status: <a href="http://api.ecommerce.local" target="_blank" rel="noreferrer">Check API Health</a></p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ background: '#282c34', padding: '15px', color: 'white' }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/products" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>View Products</Link>
        </nav>

        <header style={{ padding: '10px 20px' }}>
          <h1>Ecommerce Frontend</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;