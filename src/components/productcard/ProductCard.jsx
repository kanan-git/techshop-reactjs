import React from 'react'
import './productcard.css'
import {Link} from 'react-router-dom'

function ProductCard(props) {
    const {vType} = props

    return(
        <Link to='/product' className={`${vType}product_cards`} onMouseEnter={() => {
            document.getElementById('onhoverbuttons').style.display = `flex`
        }} onMouseLeave={() => {
            document.getElementById('onhoverbuttons').style.display = `none`
        }}>
            <div className={`${vType}productcards-stock`}> {/* change order with css */}
                <img className={`${vType}productcards-stock__icon`} src='/assets/icons/stock_1.svg' />
            </div>

            <div className={`${vType}productcards-group_1`}>
                <div className={`${vType}productcards-product_image`}>
                    <img className={`${vType}productcards-content`} src='/assets/products/product_001.png' alt='product_001' />
                </div>

                <div className={`${vType}productcards-rating`}>
                    <span className={`${vType}productcards-rating__result`}>
                        <img src='/assets/icons/star-filled.svg' className={`${vType}productcards-rating__result--stars productcards-filled`} />
                        <img src='/assets/icons/star-filled.svg' className={`${vType}productcards-rating__result--stars productcards-filled`} />
                        <img src='/assets/icons/star-filled.svg' className={`${vType}productcards-rating__result--stars productcards-filled`} />
                        <img src='/assets/icons/star-filled.svg' className={`${vType}productcards-rating__result--stars productcards-filled`} />
                        <img src='/assets/icons/star-empty.svg' className={`${vType}productcards-rating__result--stars productcards-empty`} />
                    </span>

                    <span className={`${vType}productcards-rating__count`}> Reviews (4) </span>
                </div>
            </div>

            <div className={`${vType}productcards-group_2`}>
                <div className={`${vType}productcards-product-name`}>
                    SKU D5515A1
                </div>

                <div className={`${vType}productcards-center`}>
                    <div className={`${vType}productcards-product-title-short`}>
                        EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                    </div>

                    <div className={`${vType}productcards-product-title-full`}>
                        MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop
                    </div>

                    <table className={`${vType}productcards-navbar-producttable`}>
                        <tr className={`${vType}productcards-navbar-producttable__rows`}>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> CPU </td>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> N/A </td>
                        </tr>
                        <tr className={`${vType}productcards-navbar-producttable__rows`}>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> Featured </td>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> N/A </td>
                        </tr>
                        <tr className={`${vType}productcards-navbar-producttable__rows`}>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> I/O Ports </td>
                            <td className={`${vType}productcards-navbar-producttable__rows--cells`}> N/A </td>
                        </tr>
                    </table>
                </div>

                <div className={`${vType}productcards-price`}>
                    <del className={`${vType}productcards-price__old`}> $ 499.00 </del>
                    <strong className={`${vType}productcards-price__current`}> $ 499.00 </strong>
                </div>

                <button className={`${vType}productcards-navbar-add2cart`}>
                    <img className={`${vType}productcards-icon' src='/assets/icons/cart.svg`} />
                    Add To Cart
                </button>
            </div>

            <div className={`${vType}productcards-group_3`} style={{position: 'absolute'}}>
                <img className={`${vType}productcards-buttons`} src='/assets/icons/envelope.svg' />
                <img className={`${vType}productcards-buttons`} src='/assets/icons/graph.svg' />
                <img className={`${vType}productcards-buttons`} src='/assets/icons/fav.svg' />
            </div>

            <div className='onhoverbuttons' id='onhoverbuttons'>
                <img className='onhoverbuttons__btn' src='/assets/icons/add2fav.svg' />
                <img className='onhoverbuttons__btn' src='/assets/icons/thisIsNotMet.svg' />
            </div>
        </Link>
    )
}

export default ProductCard