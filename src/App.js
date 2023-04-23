import './index.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    console.log("Dark mode toggled!");
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Navbar
        isDarkMode={isDarkMode}
        handleDarkModeToggle={handleDarkModeToggle}
      />
      <Main/>
    </div>
  );
}

export default App;
