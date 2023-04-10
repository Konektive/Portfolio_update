import './App.css'
import NavBar from './components/Nav/NavBar'
import Work from './components/Work'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyJourney from './components/MyJourney/MyJourney'
import Skills from './components/Skillset/Skills'

function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <MyJourney/>
    <Skills/>
    <Work/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
