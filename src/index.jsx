import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ListingsProvider } from './API/Listings'

import './assets/styles/main.scss'

import Footer from './components/Footer'
import Header from './components/Header'

import About from './pages/About'
import App from './pages/App'
import Error from './pages/Error'
import Home from './pages/Home'
import Listing from './pages/Listing'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ListingsProvider>
        <App>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="listing/:id" element={<Listing />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </App>
        <Footer />
      </ListingsProvider>
    </Router>
  </React.StrictMode>
)
