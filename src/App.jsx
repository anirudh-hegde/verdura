import './App.css'
import React, { useState, useEffect } from 'react';
// import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Display from './components/Display.jsx'
import Heading from './components/Heading.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import bgImage from '/assets/classes-bg.png'
// import lightBgImage from '/assets/classes-bg.png';
// import darkBgImage from '/assets/classes-bg.png';

function App () {
  const styles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <main className='w-full h-screen dark:text-white' style={styles}>
      <Header />
      <div className='w-full xl:max-w-full text-white'>
        <Heading/>
        <Display />
        <Content />
        <About />
        <Footer />
      </div>
    </main>
  )
}

export default App
