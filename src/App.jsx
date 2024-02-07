import About from './components/about/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

function App() {
  return (
    <>
     <Header />
     <main>
        <Skills />
        <Projects />
        <About />
     </main>
     <Footer />
    </>
  )
}

export default App
