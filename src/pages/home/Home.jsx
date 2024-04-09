import React from 'react'
import './home.css'
import {ProductCard, NewsCard, Services, CargoZip, Review} from '../../components/index.js'
import {Link} from 'react-router-dom'

function Home() {
    return(
        <div className='home'>
            <section className='home__sections home-section_1'>
                <button className='home-btn home-btn_prev' id='carousel_1_prev'> ◄ </button>
                <div className='home-carousel'>
                    <img className='home-carousel__images' src='/assets/carousel/carousel_01.png' alt='carousel_01' />
                </div>
                <button className='home-btn home-btn_next' id='carousel_1_next'> ► </button>
            </section>

            <section className='home__sections home-section_2'>
                <div className='home-container'>
                    <h3 className='header_h3'> New Products </h3>
                    <p className='header_link'> See All New Products </p>
                </div>

                <div className='home-container'>
                    <button className='home-container_btn cbtn_prev' id='container_prev'> ◄ </button>

                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />

                    <button className='home-container_btn cbtn_next' id='container_next'> ► </button>
                </div>
            </section>

            <section className='home__sections home-section_3'>
                <CargoZip />
            </section>

            <section className='home__sections home-section_4'>
                <div className='home-category_1'>
                    <img className='home-cover' src='/assets/covers/custom_builds.png' alt='custom-builds' />
                    {/* <h3 className='title'> Custom <br /> Builds </h3> */}
                    {/* <span className='seeall'> See All Products </span> */}
                </div>

                <div className='home-products_container'>
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                </div>
            </section>

            <section className='home__sections home-section_5'>
                <div className='home-selections'>
                    <span className='home-option' id='option_a1'> MSI GS Series </span>
                    <span className='home-option' id='option_a2'> MSI GT Series </span>
                    <span className='home-option' id='option_a3'> MSI GL Series </span>
                    <span className='home-option' id='option_a4'> MSI GE Series </span>
                </div>

                <div className='home-group'>
                    <div className='home-category_2'>
                        <img className='home-cover' src='/assets/covers/msi_laptops.png' alt='msi-laptops' />
                        {/* <h3 className='title'> MSI <br /> Laptops </h3> */}
                        {/* <span className='link'> See All Products </span> */}
                    </div>

                    <div className='home-products_container'>
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                    </div>
                </div>
            </section>

            <section className='home__sections home-section_5'>
                <div className='home-selections'>
                    <span className='home-option' id='option_b1'> MSI Infinute Series </span>
                    <span className='home-option' id='option_b2'> MSI Triden </span>
                    <span className='home-option' id='option_b3'> MSI GL Series </span>
                    <span className='home-option' id='option_b4'> MSI Nightblade </span>
                </div>

                <div className='home-group'>
                    <div className='home-category_3'>
                        <img className='home-cover' src='/assets/covers/desktops.png' alt='desktops' />
                        {/* <h3 className='title'> Desktops </h3> */}
                        {/* <span className='link'> See All Products </span> */}
                    </div>

                    <div className='home-products_container'>
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                        <ProductCard vType='grid-' />
                    </div>
                </div>
            </section>

            <section className='home__sections home-section_4'>
                <div className='home-category_4'>
                    <img className='home-cover' src='/assets/covers/gaming_monitors.png' alt='gaming-monitors' />
                    {/* <h3 className='title'> Gaming <br /> Monitors </h3> */}
                    {/* <span className='link'> See All Products </span> */}
                </div>

                <div className='home-products_container'>
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                </div>
            </section>

            <section className='home__sections home-section_6'>
                <img className='home-img-brands' src='/assets/brands/Frame22.svg' alt='roccat' />
                <img className='home-img-brands' src='/assets/brands/Frame23.svg' alt='msi' />
                <img className='home-img-brands' src='/assets/brands/Frame24.svg' alt='razer' />
                <img className='home-img-brands' src='/assets/brands/Frame25.svg' alt='thermaltake' />
                <img className='home-img-brands' src='/assets/brands/Frame26.svg' alt='adata' />
                <img className='home-img-brands' src='/assets/brands/Frame27.svg' alt='hewlett' />
                <img className='home-img-brands' src='/assets/brands/Frame34.svg' alt='gigabyte' />
            </section>

            <section className='home__sections'>
                <h3 className='home-s7_header'>
                    Follow us on Instagram for News, Offers & More
                </h3>

                <div className='home-news_container'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </section>

            <section className='home__sections home-section_8'>
                <Review />
            </section>

            <section className='home__services'>
                <Services />
            </section>
        </div>
    )
}

export default Home