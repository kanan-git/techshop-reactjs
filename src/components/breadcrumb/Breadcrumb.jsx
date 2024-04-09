import React from 'react'
import './breadcrumb.css'
import {Link} from 'react-router-dom'

function Breadcrumb() {
    return (
        <div className='breadcrumb'>
            <span className='breadcrumb__blocks'> {/* default if breadcrumb is active*/}
                <Link to='/' className='breadcrumb__blocks--links'> Home </Link>
            </span>

            <span className='breadcrumb__blocks'> {/* additional if breadcrumb is active & there is nested links */}
                <span className='breadcrumb__blocks--icons'> ► </span>
                <Link to='/' className='breadcrumb__blocks--links'> Laptops </Link>
            </span>

            <span className='breadcrumb__blocks'> {/* additional if breadcrumb is active & there is nested links */}
                <span className='breadcrumb__blocks--icons'> ► </span>
                <Link to='/' className='breadcrumb__blocks--links'> Everyday use Notebooks </Link>
            </span>

            <span className='breadcrumb__blocks'> {/* additional if breadcrumb is active & there is nested links */}
                <span className='breadcrumb__blocks--icons'> ► </span>
                <Link to='/' className='breadcrumb__blocks--links'> MSI Prestige Series </Link>
            </span>

            <span className='breadcrumb__blocks'> {/* additional if breadcrumb is active & there is nested links */}
                <span className='breadcrumb__blocks--icons'> ► </span>
                <Link to='/' className='breadcrumb__blocks--links'> MSI WS Series </Link>
            </span>
        </div>
    )
}

export default Breadcrumb