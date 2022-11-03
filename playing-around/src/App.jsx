import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [page, setPage] = useState("front");

  let component = <Front />;
  if (page === "about") {
    component = <About />;
  } else if (page === "contact") {
    component = <Contact />
  }

  return (
    <div className="App">
      <nav>
        <a href="#" onClick={() => setPage("front")}>Front</a>
        <a href="#" onClick={() => setPage("about")}>About</a>
        <a href="#" onClick={() => setPage("contact")}>Contact</a>

      {component}
      </nav>
    </div>
  )
}

function Front() {
  return (
    <>
    <h1>Front</h1>
    <p>Hello, it's the Front!</p>
    </>
  )
}

function About() {
  return (
    <>
    <h1>About</h1>
    <p>Hello, it's the About!</p>
    </>
  )
}

function Contact() {
  return (
    <>
    <h1>Contact</h1>
    <p>Hello, it's the Contact!</p>
    </>
  )
}

export default App
