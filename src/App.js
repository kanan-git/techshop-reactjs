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

// cd OneDrive/Desktop/techshop-reactjs
// npm start