import React from 'react'
import './about.css'
import {Breadcrumb, Review, Services} from '../../components/index.js'

function About() {
    return(
        <div className='about'>
            <div className='about__breadcrumb'>
                <Breadcrumb />
            </div>

            <h2 className='about__header'> About us </h2>

            <div className='about__blocks'>
                <div className='about__blocks--container'>
                    <div className='about-information'>
                        <h1 className='about-h1'> A Family That Keeps On Growing </h1>
                        <p className='about-text'>
                            We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
                            <br />
                            Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
                        </p>
                    </div>

                    <div className='about-visual'>
                        <img className='about-images' src='/assets/gallery/Rectangle 54.png' alt='img-01' />
                    </div>
                </div>
            </div>

            <div className='about__blocks'>
                <div className='about__blocks--container'>
                    <div className='about-visual'>
                        <img className='about-images' src='/assets/gallery/Rectangle 11.png' alt='img-02' />
                    </div>

                    <div className='about-information'>
                        <h1 className='about-h1'>
                            <img className='about-symbol' src='/assets/icons/Frame 205.svg' />
                            Shop.com
                        </h1>
                        <p className='about-text'>
                            Shop.com is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.
                        </p>
                    </div>
                </div>
            </div>

            <div className='about__blocks'>
                <div className='about__blocks--container'>
                    <div className='about-information'>
                        <h1 className='about-h1'>
                            <img className='about-symbol' src='/assets/icons/Group 174.svg' />
                            Now You're In Safe Hands
                        </h1>
                        <p className='about-text'>
                            Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                            <br />
                            *Performance compared to i7-9700. Specs varies by model.
                        </p>
                    </div>

                    <div className='about-visual'>
                        <img className='about-images' src='/assets/gallery/Mask Group.png' alt='img-03' />
                    </div>
                </div>
            </div>

            <div className='about__blocks'>
                <div className='about__blocks--container'>
                    <div className='about-visual'>
                        <img className='about-images' src='/assets/gallery/Rectangle 13.png' alt='img-04' />
                    </div>

                    <div className='about-information'>
                        <h1 className='about-h1'>
                            <img className='about-symbol' src='/assets/icons/Group 175.svg' />
                            The Highest Quality of Products
                        </h1>
                        <p className='about-text'>
                            We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals.
                        </p>
                    </div>
                </div>
            </div>

            <div className='about__blocks'>
                <div className='about__blocks--container'>
                    <div className='about-information'>
                        <h1 className='about-h1'>
                            <img className='about-symbol' src='/assets/icons/Group 176.svg' />
                            We Deliver to Any Regions
                        </h1>
                        <p className='about-text'>
                            We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.
                        </p>
                    </div>

                    <div className='about-visual'>
                        <img className='about-images' src='/assets/gallery/Mask Group-1.png' alt='img-05' />
                    </div>
                </div>
            </div>

            <div className='about__review'>
                <Review />
            </div>

            <div className='about__services'>
                <Services />
            </div>
        </div>
    )
}

export default About