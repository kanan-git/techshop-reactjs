import React from 'react'
import './carousel.css'

function Carousel() {
    return(
        <div className='carouselcomp'>
            <img className='carouselcomp__image' src='/assets/covers/group 29.png' alt='intel-cpu' />

            <div className='carouselcomp__text'>
                <h1 className='carouselcomp__text--header'>
                    Outplay the Competittion
                </h1>
                <p className='carouselcomp__text--description'>
                    Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                    <br /> <br />
                    *Performance compared to i7-9700. Specs varies by model.
                </p>
            </div>

            <div className='carouselcomp__pagination'>
                <div className='carouselcomp__pagination--dots'></div>
                <div className='carouselcomp__pagination--dots'></div>
                <div className='carouselcomp__pagination--dots'></div>
            </div>
        </div>
    )
}

export default Carousel