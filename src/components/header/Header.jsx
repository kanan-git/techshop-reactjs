import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <span className='blocks' onMouseEnter={() => {
                    document.getElementById('shopinfomenu').style.display = `block`
                }}  onMouseLeave={() => {
                    document.getElementById('shopinfomenu').style.display = `none`
                }}>
                    <span className='text'> Mon-Thu: </span>
                    <span className='text light'> 9:00 AM - 5:30 PM </span>
                    <img className='icon' src='/assets/icons/chevron-down.svg' />

                    <div className='shopinfo' id='shopinfomenu'>
                        <div className='shopinfo__sections'>
                            <img className='shopinfo__sections--icon' src='/assets/icons/bx_bx-clock.svg' />
                            <div className='shopinfo__sections--container'>
                                <p className='shopinfo__sections--container_header'> We are open: </p>
                                <p className='shopinfo__sections--container_text'> Mon-Thu: <b>9:00 AM - 5:30 PM</b> </p>
                                <p className='shopinfo__sections--container_text'> Fr: <b>9:00 AM - 6:00 PM</b> </p>
                                <p className='shopinfo__sections--container_text'> Sat: <b>11:00 AM - 5:00 PM</b> </p>
                            </div>
                        </div>
                        <div className='shopinfo__sections'>
                            <img className='shopinfo__sections--icon' src='/assets/icons/bx_bx-location.svg' />
                            <div className='shopinfo__sections--container'>
                                Address: 1234 Street Adress, City Address, 1234
                            </div>
                        </div>
                        <div className='shopinfo__sections'>
                            <p className='shopinfo__sections--contacts'>
                                Phones: <b>(00) 1234 5678</b>
                            </p>
                            <p className='shopinfo__sections--contacts'>
                                E-mail: <b>shop@email.com</b>
                            </p>
                        </div>
                    </div>
                </span>

                <span className='blocks'>
                    <p className='text'> Visit our showroom in 1234 Street Address City Address, 1234 </p>
                    <Link to='/contact' className='text light link'> Contact Us </Link>
                </span>

                <span className='blocks'>
                    <p className='text light'> Call Us: (00) 1234 5678 </p>

                    <Link to='https://facebook.com/' className='btn'>
                        <img className='icon' src='/assets/icons/ant-design_facebook-filled.svg' alt='facebook' />
                    </Link>

                    <Link to='https://instagram.com/' className='btn'>
                        <img className='icon' src='/assets/icons/ant-design_instagram-filled.svg' alt='instagram' />
                    </Link>
                </span>
            </div>
        </header>
    )
}

export default Header