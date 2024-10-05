import React from 'react';
import './App.css';
import Weather from './components/weather/weather';
import Header from './components/Header/header';
import Header2 from './components/Header2/header2';


function App() {

  return (
    <>
   
  <div className='app'>
    <Header2/>
  < Header />
    <Weather/>


  </div>
  </>
  );
}

export default App;
