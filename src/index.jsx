import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './assets/styles/main.scss'

import { ListingsProvider } from './API/Listings'

import Header from './components/Header'
import Footer from './components/Footer'

import App from './pages/App'
import Home from './pages/Home'
import About from './pages/About'
import Listing from './pages/Listing'
import Error from './pages/Error'

import reportWebVitals from './reportWebVitals'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
