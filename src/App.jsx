import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <ScrollToTop/>
        <Routes>
          <Route exact path='/' element={< Home />}/>
          <Route exact path='/netflix-show' element={<NetflixShow />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App