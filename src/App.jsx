// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {
  return (
    <>
      {/* <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" /> */}
     <Header />
     <main>
        <Skills />
        <Projects />
     </main>
    </>
  )
}

export default App
