import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Messages from './components/Messages'
import Faq from './components/FAQ'
import TryMe from './components/TryMe'
import './App.css'

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutme" element={<AboutMe/>}></Route>
      <Route path="/messages" element={<Messages/>}></Route>
      <Route path="/faq" element={<Faq/>}></Route>
      <Route path="/tryme" element={<TryMe/>}></Route>  
    </Routes>
  </HashRouter>
}

export default App
