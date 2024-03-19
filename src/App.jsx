import './App.css'
// import Projects from './components/Portfolio/Projects'
import Git from './components/Git/git'
import Home from './components/Home'
import About from './components/About/About'
import Contact from './components//Contact/Contact'
import MyJourney from './components/MyJourney/MyJourney'
import Skills from './components/Skillset/Skills'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Home/>
    <MyJourney/>
    <Skills/>
    {/* <Projects/> */}
    <Git/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
