import React from 'react'
import './services.css'

function Services() {
    return(
        <div className='services'>
            <div className='services-card'>
                <div className='services-card__circle'>
                    <img className='services-card__circle--icon' src='/assets/icons/headset.svg' />
                </div>
                <h4 className='services-card__title'>
                    Product Support
                </h4>
                <p className='services-card__description'>
                    Up to 3 years on-site warranty available for you peace of mind.
                </p>
            </div>

            <div className='services-card'>
                <div className='services-card__circle'>
                    <img className='services-card__circle--icon' src='/assets/icons/user.svg' />
                </div>
                <h4 className='services-card__title'>
                    Personal Account
                </h4>
                <p className='services-card__description'>
                    With big discounts, free delivery and a dedicated support specialist.
                </p>
            </div>

            <div className='services-card'>
                <div className='services-card__circle'>
                    <img className='services-card__circle--icon' src='/assets/icons/tag.svg' />
                </div>
                <h4 className='services-card__title'>
                    Amazing Savings
                </h4>
                <p className='services-card__description'>
                    Up to 70% off new Products, you can be sure of the best price.
                </p>
            </div>
        </div>
    )
}

export default Services