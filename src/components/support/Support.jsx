import React from 'react'
import './support.css'
import {Link} from 'react-router-dom'

function Support() {
    return(
        <div className='support'>
            <img className='support__cover' src='/assets/covers/group 37.png' alt='support' />

            <div className='support__container'>
                <button className='support__container--links'>
                    Product Support
                    <span className='support__container--links_icon'> → </span>
                </button>
                <Link to='/faq' className='support__container--links'>
                    FAQ
                    <span className='support__container--links_icon'> → </span>
                </Link>
                <button className='support__container--links'>
                    Our Buyer Guide
                    <span className='support__container--links_icon'> → </span>
                </button>
            </div>
        </div>
    )
}

export default Support