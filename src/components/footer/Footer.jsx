import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__container--blocks'>
                    <div className='aside'>
                        <h1 className='header_1'> Sign Up To Our Newsletter. </h1>
                        <p className='paragraph'> Be the first to hear about the latest offers. </p>
                    </div>

                    <form className='subscription' action='post'>
                        <input className='subscription_email' type='email' placeholder='Your Email' />
                        <input className='subscription_submit' type='submit' value='Subscribe' />
                    </form>
                </div>

                <div className='footer__container--blocks'>
                    <ul className='columns'>
                        <h4 className='header_4'> Information </h4>
                        <Link to='/about' className='links'> About Us </Link>
                        <Link to='/' className='links'> About Zip </Link>
                        <Link to='/' className='links'> Privacy Policy </Link>
                        <Link to='/' className='links'> Search </Link>
                        <Link to='/' className='links'> Terms </Link>
                        <Link to='/' className='links'> Orders and Returns </Link>
                        <Link to='/contact' className='links'> Contact Us </Link>
                        <Link to='/' className='links'> Advanced Search </Link>
                        <Link to='/' className='links'> Newsletter Subscription </Link>
                    </ul>

                    <ul className='columns'>
                        <h4 className='header_4'> PC Parts </h4>
                        <Link to='/catalog' className='links'> CPUs </Link>
                        <Link to='/catalog' className='links'> Add On Cards </Link>
                        <Link to='/catalog' className='links'> Hard Drivers (Internal) </Link>
                        <Link to='/catalog' className='links'> Graphic Cards </Link>
                        <Link to='/catalog' className='links'> Keyboards / Mice </Link>
                        <Link to='/catalog' className='links'> Cases / Power Supplies / Cooling </Link>
                        <Link to='/catalog' className='links'> RAM (Memory) </Link>
                        <Link to='/catalog' className='links'> Software </Link>
                        <Link to='/catalog' className='links'> Speakers / Headsets </Link>
                        <Link to='/catalog' className='links'> Motherboard </Link>
                    </ul>

                    <ul className='columns'>
                        <h4 className='header_4'> Desktop PCs </h4>
                        <Link to='/catalog' className='links'> Custom PCs </Link>
                        <Link to='/catalog' className='links'> Servers </Link>
                        <Link to='/catalog' className='links'> MSI All-In-One PCs </Link>
                        <Link to='/catalog' className='links'> HP / Compaq PCs </Link>
                        <Link to='/catalog' className='links'> ASUS PCs </Link>
                        <Link to='/catalog' className='links'> Tecs PCs </Link>
                    </ul>

                    <ul className='columns'>
                        <h4 className='header_4'> Laptops </h4>
                        <Link to='/catalog' className='links'> Everyday Use Notebooks </Link>
                        <Link to='/catalog' className='links'> MSI Workstation Series </Link>
                        <Link to='/catalog' className='links'> MSI Prestige Series </Link>
                        <Link to='/catalog' className='links'> Tablets and Pads </Link>
                        <Link to='/catalog' className='links'> Notebooks </Link>
                        <Link to='/catalog' className='links'> Infinity Gaming Notebooks </Link>
                    </ul>

                    <ul className='columns'>
                        <h4 className='header_4'> Address </h4>
                        <li className='info'> Address: 1234 Street Address City Address, 1234 </li>
                        <li className='info'> Phones: <span className='linked'> (00) 1234 5678 </span> </li>
                        <li className='info'> We are open: Monday-Thursday: 9:00 AM - 5:30 PM </li>
                        <li className='info'> Friday: 9:00 AM - 6:00 PM </li>
                        <li className='info'> Saturday: 11:00 AM - 5:00 PM </li>
                        <li className='info'> Email: <span className='linked'> shop@email.com </span> </li>
                    </ul>
                </div>

                <div className='footer__container--blocks'>
                    <span className='smedia'>
                        <Link to='https://facebook.com/' className='smedia__btn'>
                            <img className='icons' src='/assets/icons/ant-design_facebook-filled.svg' alt='facebook' />
                        </Link>
                        <Link to='https://instagram.com/' className='smedia__btn'>
                            <img className='icons' src='/assets/icons/ant-design_instagram-filled.svg' alt='instagram' />
                        </Link>
                    </span>

                    <span className='payment_methods'>
                        <img className='cards' src='/assets/icons/paypal.svg' alt='paypal' />
                        <img className='cards' src='/assets/icons/visa.svg' alt='visa' />
                        <img className='cards' src='/assets/icons/maestro.svg' alt='maestro' />
                        <img className='cards' src='/assets/icons/discover.svg' alt='discover' />
                        <img className='cards' src='/assets/icons/american-express.svg' alt='american-express' />
                    </span>

                    <span className='copyrights'> Copyright © 2020 Shop Pty. Ltd. </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer