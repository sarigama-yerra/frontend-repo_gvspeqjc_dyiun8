import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import M5Home from './pages/M5Home'
import M5Gallery from './pages/M5Gallery'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/m5" element={<M5Home />} />
        <Route path="/m5/gallery" element={<M5Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
