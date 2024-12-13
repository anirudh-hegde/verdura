import './App.css'
// import Body from './components/Body.jsx'
import Header from './components/Header.jsx'
import Display from './components/Display.jsx'
import Heading from './components/Heading.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'

function App () {
  return (
    <main className='w-full h-screen text-white'>
      <Header />
      <div className='w-full xl:max-w-full'>
        <Heading />
        <Display />
        <Content />
        <About />
        <Footer />
      </div>
    </main>
  )
}

export default App
