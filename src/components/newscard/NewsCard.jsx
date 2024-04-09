import React from 'react'
import './newscard.css'

function NewsCard() {
    return(
        <div className='newscard'>
            <div className='newscard__image'>
                <img className='newscard__image--content' src='/assets/gallery/image_1.png' alt='image_1' />
            </div>
            <div className='newscard__summary'>
                If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...
            </div>
            <div className='newscard__date'>
                01.09.2020
            </div>
        </div>
    )
}

export default NewsCard