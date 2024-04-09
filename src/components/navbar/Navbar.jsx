import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {CatalogMenu} from '../index.js'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__container--blocks'>
                    <Link className='navbar-logo' to='/'>
                        <img src='/assets/logo/logo.svg' alt='logo' className='navbar-logo__img' />
                    </Link>

                    <ul className='navbar-menu'>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            Laptops
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            Desktop PCs
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            Networking Devices
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            Printers & Scanners
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            PC Parts
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            All Other Products
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links' onMouseEnter={() => {
                            document.getElementById('catalogmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }} onClick={() => {
                            document.getElementById('catalogmenu').style.display = `none`
                        }}>
                            Repairs
                            <CatalogMenu />
                        </Link>
                        <Link to='/catalog' className='navbar-menu__links navbar-special'> Our Deals </Link>
                    </ul>
                </div>

                <div className='navbar__container--blocks'>
                    <span className='navbar-account'>
                        <button className='navbar-account__buttons'>
                            <img className='navbar-account__buttons--icons' src='/assets/icons/magnifier.svg' />
                        </button>
                        <Link to='/cart' className='navbar-account__buttons' onMouseEnter={() => {
                            document.getElementById('minicartmenu').style.display = `flex`
                        }} onMouseLeave={() => {
                            document.getElementById('minicartmenu').style.display = `none`
                        }}>
                            <img className='navbar-account__buttons--icons' src='/assets/icons/cart.svg' />

                            <div className='minicartmenu' id='minicartmenu'>
                                <div className='minicartmenu__blocks'>
                                    <h3 className='minicartmenu__blocks--h3'> My Cart </h3>
                                    <p className='minicartmenu__blocks--text'> 2 item in cart </p>
                                    <button className='minicartmenu__blocks--btn'> View or Edit Your Cart </button>
                                </div>

                                <div className='minicartmenu__blocks'>
                                    <p className='minicartmenu__blocks--count'>
                                        1x
                                    </p>
                                    <div className='minicartmenu__blocks--img'>
                                        <img className='minicartmenu__blocks--img_content' src='/assets/cart/image 42.png' alt='cart-01' />
                                    </div>
                                    <p className='minicartmenu__blocks--title'>
                                        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                                    </p>
                                    <div className='minicartmenu__blocks--buttons'>
                                        <img className='minicartmenu__blocks--buttons_btn' src='/assets/icons/Group 117.svg' />
                                        <img className='minicartmenu__blocks--buttons_btn' src='/assets/icons/Group 115.svg' />
                                    </div>
                                </div>
                                <div className='minicartmenu__blocks'>
                                    <p className='minicartmenu__blocks--count'>
                                        1x
                                    </p>
                                    <div className='minicartmenu__blocks--img'>
                                        <img className='minicartmenu__blocks--img_content' src='/assets/cart/image 42.png' alt='cart-01' />
                                    </div>
                                    <p className='minicartmenu__blocks--title'>
                                        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                                    </p>
                                    <div className='minicartmenu__blocks--buttons'>
                                        <img className='minicartmenu__blocks--buttons_btn' src='/assets/icons/Group 117.svg' />
                                        <img className='minicartmenu__blocks--buttons_btn' src='/assets/icons/Group 115.svg' />
                                    </div>
                                </div>

                                <div className='minicartmenu__blocks'>
                                    <p className='minicartmenu__blocks--price'> Subtotal: <strong>$499.00</strong> </p>
                                    <div className='minicartmenu__blocks--buttons2'>
                                        <button className='minicartmenu__blocks--buttons2_btn'>
                                            Go to Checkout
                                        </button>
                                        <button className='minicartmenu__blocks--buttons2_btn'>
                                            Check out with <img className='minicartmenu__blocks--buttons2_btn-icon' src='/assets/icons/paypal-logo.svg' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='navbar-counter'> 2 </div>
                        </Link>
                    </span>
                    <Link to='/account' className='navbar-profile' onMouseEnter={() => {
                        document.getElementById('accountmenu').style.display = `flex`
                    }} onMouseLeave={() => {
                        document.getElementById('accountmenu').style.display = `none`
                    }}>
                        <img className='navbar-profile__image' src='/assets/users/user_01.png' alt='user-unknown' />

                        <div className='accountmenu' id='accountmenu'>
                            <Link to='/account' className='accountmenu__links'> My  Account </Link>
                            <Link to='/cart' className='accountmenu__links'> My Wish List (0) </Link>
                            <Link to='/catalog' className='accountmenu__links'> Compare (0) </Link>
                            <Link to='/register' className='accountmenu__links'> Create an Account </Link>
                            <Link to='/register' className='accountmenu__links'> Sign In </Link>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar