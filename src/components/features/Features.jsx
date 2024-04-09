import React from 'react'
import './features.css'

function Features() {
    return(
        <div className='features'>
            <h2 className='features__header'>
                Featues
            </h2>
            <p className='features__description'>
                The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.
            </p>
            <div className='features__container'>
                <div className='features__container--cards'>
                    <div className='features__container--cards_image'>
                        <img className='features__container--cards_image-content' src='/assets/brands/image 16.png' alt='intel' />
                    </div>
                    <p className='features__container--cards_text'>
                        <b> Intel® Core™ i7 </b>
                        processor with the upmost computing power to bring you an unparalleled gaming experience.
                    </p>
                </div>

                <div className='features__container--cards'>
                    <div className='features__container--cards_image'>
                        <img className='features__container--cards_image-content' src='/assets/brands/image 17.png' alt='nvidia-rtx' />
                    </div>
                    <p className='features__container--cards_text'>
                        The new
                        <b> GeForce® RTX SUPER™ </b>
                        Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.
                    </p>
                </div>

                <div className='features__container--cards'>
                    <div className='features__container--cards_image'>
                        <img className='features__container--cards_image-content' src='/assets/brands/image 18.png' alt='ssd-tech' />
                    </div>
                    <p className='features__container--cards_text'>
                        Unleash the full potential with the latest
                        <b> SSD technology </b>
                        , the NVM Express. 6 times faster than traditional SATA SSD.
                    </p>
                </div>

                <div className='features__container--cards'>
                    <div className='features__container--cards_image'>
                        <img className='features__container--cards_image-content' src='/assets/brands/image 19.png' alt='ddr4' />
                    </div>
                    <p className='features__container--cards_text'>
                        Featuring the latest
                        <b> 10th Gen Intel® Core™ </b>
                        processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features