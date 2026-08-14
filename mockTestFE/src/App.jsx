import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HomePage from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Tests from './pages/tests'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructionsA from './pages/instructions1'
import InstructionsB from './pages/instructions2'
import Testscreen from './pages/testScreen'
import Appraisal from './pages/appraisal'
import NoRightClick from './lib/NoRightClick'
import Dashboard from './pages/dashboard'
import Results from './pages/result'
import Pass from "./pages/Pass";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  

  return (
    <>
    <NoRightClick/>

     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/instructions1" element={<InstructionsA />} />
        <Route path="/instructions2" element={<InstructionsB />} />
        <Route path="/testscreen" element={<Testscreen />} />
        <Route path="/appraisal" element={<Appraisal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/result" element={<Results />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
     </Router>
    </>
  )
}

export default App
