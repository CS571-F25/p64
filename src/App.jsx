import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Messages from './components/Messages'
import Faq from './components/FAQ'
import TryMe from './components/TryMe'
import AboutMeWorkDetail from './components/AboutMeWorkDetail'
import { ThemeProvider } from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import './App.css'

function App() {
  return <ThemeProvider>
    <HashRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/work/:id" element={<AboutMeWorkDetail />}></Route>
        <Route path="/messages" element={<Messages/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/tryme" element={<TryMe/>}></Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>
}

export default App;