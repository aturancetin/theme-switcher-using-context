
import './App.css';
import Header from './components/Header/Header';

import React, {useContext, useState} from 'react';
import {ThemeContext} from './ThemeContext';
import Info from './components/Info';


function App() {

  const [theme,setTheme] = useContext(ThemeContext);

  return (
    
      <div className={`App ${theme}`}>
          <Header />

          <Info />
      </div>
    
        

      
    
  );
}

export default App;
