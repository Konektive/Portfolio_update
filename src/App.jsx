import './App.css'
import NavBar from './components/Nav/NavBar'
import Projects from './components/Portfolio/Projects'
import Home from './components/Home'
import About from './components/About/About'
import Contact from './components//Contact/Contact'
import MyJourney from './components/MyJourney/MyJourney'
import Skills from './components/Skillset/Skills'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <MyJourney/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
