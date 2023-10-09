import {Routes, Route, useNavigate} from 'react-router-dom'

import Header from './components/header/Header'
import Homepage from './layouts/homepage/Homepage'
import Footer from './components/footer/Footer'

import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
