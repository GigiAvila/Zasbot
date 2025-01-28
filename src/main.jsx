import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import App from './App.jsx'
import Error404 from './pages/404/Error404.jsx'
import Loading from './components/Loading/Loading.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
// const AIPage = lazy(() => import('./pages/AIPage.jsx'))
const PricesPage = lazy(() => import('./pages/PricesPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const FaqsPage = lazy(() => import('./pages/FaqsPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/'>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              {/* <Route path='/ai' element={<AIPage />} /> */}
              <Route path='/prices' element={<PricesPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/faqs' element={<FaqsPage />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/blog/:slug' element={<BlogPostPage />} />
              <Route path='*' element={<Error404 />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
