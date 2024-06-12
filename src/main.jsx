import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading/Loading.jsx'
import Error404 from './pages/404/Error404.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const PricesPage = lazy(() => import('./pages/PricesPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const FaqsPage = lazy(() => import('./pages/FaqsPage.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/prices' element={<PricesPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/faqs' element={<FaqsPage />} />
              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
