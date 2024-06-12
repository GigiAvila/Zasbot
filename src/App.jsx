import { useRef } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { AnimatePresence } from 'framer-motion'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
// import WhatsappButton from './components/WhatsappButton/WhatsappButton'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const containerRef = useRef(null)

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <AnimatePresence>
          <Header />
          <div
            className='app__container'
            data-scroll-container
            ref={containerRef}
          >
            <Main />
            <Footer />
            <ScrollToTop />
          </div>
        </AnimatePresence>
      </LocomotiveScrollProvider>
      {/* <WhatsappButton /> */}
    </>
  )
}

export default App
