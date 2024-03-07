import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PricesPage from './pages/PricesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import FaqsPage from './pages/FaqsPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/prices' element={<PricesPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/faqs' element={<FaqsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
