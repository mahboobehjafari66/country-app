import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <div style={{ background: darkTheme ? '#333' : '#fff', color: darkTheme ? '#fff' : '#000', minHeight: '100vh' }}>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;