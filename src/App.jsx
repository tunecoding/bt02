import React from 'react'
import "./App.css";
import  Header  from './components/Header';
import Content from './components/Content';
import Aside from './components/Aside';
import Box from './components/Box';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div className="head">
      <Header />
      <div className='body'>
        <div className="body-left">
          <Content />
          <h1 className='text'>Big content</h1>
        </div>
        <div className="body-right">
          <Aside />
        </div>
      </div>
      <div className='boxx'>
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      <Footer />
    </div>
  )
}

export default App