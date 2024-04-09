import React from 'react'
import './product.css'
import {Support, Features, Carousel, Breadcrumb, CargoZip, Services} from '../../components/index.js'

function Product() {
    return(
        <div className='product'>
            <div className='product__upper'>
                <span className='product__upper--selection'>
                    <button className='product__upper--selection_options' onClick={(e) => {
                        document.getElementById('about').style.display = `block`
                        document.getElementById('details').style.display = `none`
                        document.getElementById('specs').style.display = `none`
                        
                        e.target.style.color = `#000000`
                        e.target.style.padding = `2px 0px`
                        e.target.style.borderBottom = `3px solid #0156ff`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.borderBottom = `none`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.borderBottom = `none`
                    }}> About Product </button>
                    <button className='product__upper--selection_options' onClick={(e) => {
                        document.getElementById('about').style.display = `none`
                        document.getElementById('details').style.display = `block`
                        document.getElementById('specs').style.display = `none`

                        document.getElementsByClassName('product__upper--selection_options')[0].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[0].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[0].style.borderBottom = `none`
                        e.target.style.color = `#000000`
                        e.target.style.padding = `2px 0px`
                        e.target.style.borderBottom = `3px solid #0156ff`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[2].style.borderBottom = `none`
                    }}> Details </button>
                    <button className='product__upper--selection_options' onClick={(e) => {
                        document.getElementById('about').style.display = `none`
                        document.getElementById('details').style.display = `none`
                        document.getElementById('specs').style.display = `block`

                        document.getElementsByClassName('product__upper--selection_options')[0].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[0].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[0].style.borderBottom = `none`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.color = `#666666`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.padding = `0`
                        document.getElementsByClassName('product__upper--selection_options')[1].style.borderBottom = `none`
                        e.target.style.color = `#000000`
                        e.target.style.padding = `2px 0px`
                        e.target.style.borderBottom = `3px solid #0156ff`
                    }}> Specs </button>
                </span>

                <span className='product__upper--buy'>
                    <span className='product__upper--buy_price'> One Sale From $ 3,299.00 </span>

                    <span className='product__upper--buy_quantity'>
                        <input className='product__upper--buy_quantity-input' type='number' defaultValue='1' min='1' max='999' />

                        <div className='product__upper--buy_quantity-buttons'>
                            <button className='product__upper--buy_quantity-buttons__btn' id='increase'> ▲ </button>
                            <button className='product__upper--buy_quantity-buttons__btn' id='decrease'> ▼ </button>
                        </div>
                    </span>

                    <button className='product__upper--buy_add2cart'> Add To Cart </button>

                    <button className='product__upper--buy_purchase'>
                        <img className='product__upper--buy_purchase-icon' src='/assets/icons/paypal-logo.svg' alt='paypal' />
                    </button>
                </span>
            </div>

            <div className='product__lower'>
                <div className='product__lower--information'>
                    <div className='product__lower--information_breadcrumb'> <Breadcrumb /> </div>
                    <h1 className='product__lower--information_title'> MSI MPG Trident 3 </h1>
                    <p className='product__lower--information_review'> Be the first to review this product </p>

                    <div className='product__lower--information_about' id='about'>
                        <p className='product__lower--information_about-fullname'>
                            MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop
                        </p>
                        <div className='product__lower--information_about-colors'>
                            <div className='product__lower--information_about-colors__dots'></div>
                            <div className='product__lower--information_about-colors__dots'></div>
                            <div className='product__lower--information_about-colors__dots'></div>
                        </div>
                    </div>
                    <ul className='product__lower--information_details' id='details'>
                        <li className='product__lower--information_details-items'> •  Intel Core i7-10700F </li>
                        <li className='product__lower--information_details-items'> •  Intel H410 </li>
                        <li className='product__lower--information_details-items'> •  WHITE </li>
                        <li className='product__lower--information_details-items'> •  NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6 </li>
                        <li className='product__lower--information_details-items'> •  SO-DIMM 16GB (16GB x 1) DDR4 2666MHz </li>
                        <li className='product__lower--information_details-items'> •  2 total slots (64GB Max) </li>
                        <li className='product__lower--information_details-items'> •  512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM </li>
                        <li className='product__lower--information_details-items'> •  Gaming Keyboard GK30 + Gaming Mouse GM11 </li>
                        <li className='product__lower--information_details-items'> •  3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0) </li>
                        <li className='product__lower--information_details-items'> •  Intel WGI219Vethernet (10/100/1000M) </li>
                        <li className='product__lower--information_details-items'> •  AX200 (WIFI 6)+BT5.1 </li>
                        <li className='product__lower--information_details-items'> •  PSU 330W </li>
                        <li className='product__lower--information_details-items'> •  Fan Cooler </li>
                    </ul>
                    <table className='product__lower--information_specs' id='specs'>
                        <tr className='product__lower--information_specs-rows'>
                            <td className='product__lower--information_specs-rows__cells'> CPU </td>
                            <td className='product__lower--information_specs-rows__cells'> N/A </td>
                        </tr>
                        <tr className='product__lower--information_specs-rows'>
                            <td className='product__lower--information_specs-rows__cells'> Features </td>
                            <td className='product__lower--information_specs-rows__cells'> N/A </td>
                        </tr>
                        <tr className='product__lower--information_specs-rows'>
                            <td className='product__lower--information_specs-rows__cells'> I/O Ports </td>
                            <td className='product__lower--information_specs-rows__cells'> N/A </td>
                        </tr>
                    </table>

                    <div className='product__lower--information_group'>
                        <p className='product__lower--information_group-text'>
                            Have a Question ?
                            <p className='product__lower--information_group-text__link'> Contact Us </p>
                        </p>

                        <span className='product__lower--information_group-model'> SKU D5515A1 </span>
                    </div>

                    <div className='product__lower--information_group-more'> + MORE INFORMATION </div>
                </div>

                <div className='product__lower--visual'>
                    <div className='product__lower--visual_screen'>
                        <img className='product__lower--visual_screen-image' src='/assets/products/image 9.png' alt='product_009' />

                        <div className='product__lower--visual_screen-buttons'>
                            <img className='product__lower--visual_screen-buttons__icon' src='/assets/icons/envelope.svg' alt='send' />
                            <img className='product__lower--visual_screen-buttons__icon' src='/assets/icons/graph.svg' alt='compare' />
                            <img className='product__lower--visual_screen-buttons__icon' src='/assets/icons/fav.svg' alt='wishlist' />
                        </div>
                    </div>

                    <div className='product__lower--visual_cargo'>
                        <CargoZip />
                    </div>

                    <div className='product__lower--visual_pagination'>
                        <div className='product__lower--visual_pagination-dots'></div>
                        <div className='product__lower--visual_pagination-dots'></div>
                        <div className='product__lower--visual_pagination-dots'></div>
                    </div>
                </div>
            </div>

            <div className='product__carousel'>
                <Carousel />
            </div>

            <div className='product__support'>
                <Support />
            </div>

            <div className='product__features'>
                <Features />
            </div>

            <div className='product__services'>
                <Services />
            </div>
        </div>
    )
}

export default Product