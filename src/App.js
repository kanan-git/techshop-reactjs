import React from 'react'
import {Header, Navbar, NavButton, Footer} from './components/index.js'
import {About, Account, Cart, Catalog, Checkout, Contact, FAQ, Home, Product, Register} from './pages/index.js'
import './global.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavButton />

      <Header />
      <Navbar />

      <Routes>
          <Route path='/about' element={ <About /> } />
          <Route path='/account' element={ <Account /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/catalog' element={ <Catalog /> } />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/faq' element={ <FAQ /> } />
          <Route exact path='/' element={ <Home /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path='/register' element={ <Register /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App

// ---------------------------------------- LEFT TASKS ---------------------------------------- //

// header & navbar mobile version (mobile 320, 375, 425; tablet 768, 1024; desktop 1280, 1440, 1920)
// mobile menu button
// header search button transform function
// css responsivity of all component & pages (home catalog product cart checkout contact register account about faq)
// redux tlk, product & uniquie link ids, local storage
// json server / free api
// all rest of custom hooks & functions