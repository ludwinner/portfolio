import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/home'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import About from './pages/about/About'


function App() {

  return (
    <BrowserRouter>
    <Themes/>
      <Routes> 
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    <Navbar/>
    </BrowserRouter>
  )
}

export default App
