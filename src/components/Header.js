import React from 'react';

const Header = ({ toggleTheme }) => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: 'blue', color: 'white' }}>
      <h1>Country App</h1>
      <button onClick={toggleTheme} style={{ padding: '5px' }}>Toggle Theme</button>
    </header>
  );
};

export default Header;