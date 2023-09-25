import {Routes, Route, useNavigate} from 'react-router-dom'

import Header from './components/header/Header'
import Homepage from './layouts/homepage/Homepage'

import './App.scss'

function App() {

  return (
    <>
      <Header/>
      <Homepage/>
    </>
  )
}

export default App
