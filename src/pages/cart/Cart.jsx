import React from 'react'
import './cart.css'
import {Breadcrumb, CargoZip, Services} from '../../components/index.js'
import {Link} from 'react-router-dom'

function Cart() {
    return(
        <div className='cart'>
            <div className='cart__breadcrumb'>
                <Breadcrumb />
            </div>

            <h1 className='cart__header'> Shopping Cart </h1>

            <div className='cart__container'>
                <div className='cart__container--main'>
                    <table className='cart__container--main_table'>
                        <tr className='table_rows'>
                            <td className='table_cells table_header'> Item </td>
                            <td className='table_cells table_header'></td>
                            <td className='table_cells table_header'> Price </td>
                            <td className='table_cells table_header'> Qty </td>
                            <td className='table_cells table_header'> Subtotal </td>
                            <td className='table_cells table_header'></td>
                        </tr>

                        <tr className='table_rows'>
                            <td className='table_cells'>
                                <div className='table_cells__image'>
                                    <img className='table_cells__image--content' src='/assets/cart/image 51.png' alt='cart-item-01' />
                                </div>
                                <p className='table_cells__title'>
                                    MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
                                </p>
                            </td>
                            <td className='table_cells'></td>
                            <td className='table_cells'>
                                <strong className='table_cells__price'> $ 4,349.00 </strong>
                            </td>
                            <td className='table_cells'>
                                {/* <input className='table_cells__input' type='number' min='1' max='999' />

                                <div className='table_cells__buttons'>
                                    <button className='table_cells__buttons--btn' id='increase_cart_1'> ▲ </button>
                                    <button className='table_cells__buttons--btn' id='decrease_cart_1'> ▼ </button>
                                </div> */}
                                <span className='ctable__quantity'>
                                    <input className='ctable__quantity--input' type='number' defaultValue='1' min='1' max='999' id='cart_q_1' />

                                    <div className='ctable__quantity--buttons'>
                                        <button className='ctable__quantity--buttons_btn' id='cart_q_inc_1'> ▲ </button>
                                        <button className='ctable__quantity--buttons_btn' id='cart_q_dec_1'> ▼ </button>
                                    </div>
                                </span>
                            </td>
                            <td className='table_cells'>
                                <strong className='table_cells__price'> $ 13,047.00 </strong>
                            </td>
                            <td className='table_cells'>
                                <img className='table_cells__icon' src='/assets/icons/Group 108.svg' />
                                <br />
                                <img className='table_cells__icon' src='/assets/icons/Group 112.svg' />
                            </td>
                        </tr>

                        <tr className='table_rows'>
                            <td className='table_cells'>
                                <div className='table_cells__image'>
                                    <img className='table_cells__image--content' src='/assets/cart/image 52.png' alt='cart-item-02' />
                                </div>
                                <p className='table_cells__title'>
                                    MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
                                </p>
                            </td>
                            <td className='table_cells'></td>
                            <td className='table_cells'>
                                <strong className='table_cells__price'> $ 4,349.00 </strong>
                            </td>
                            <td className='table_cells'>
                                {/* <input className='table_cells__input' type='number' min='1' max='999' />
                                
                                <div className='table_cells__buttons'>
                                    <button className='table_cells__buttons--btn' id='increase_cart_1'> ▲ </button>
                                    <button className='table_cells__buttons--btn' id='decrease_cart_1'> ▼ </button>
                                </div> */}
                                <span className='ctable__quantity'>
                                    <input className='ctable__quantity--input' type='number' defaultValue='1' min='1' max='999' id='cart_q_2' />

                                    <div className='ctable__quantity--buttons'>
                                        <button className='ctable__quantity--buttons_btn' id='cart_q_inc_2'> ▲ </button>
                                        <button className='ctable__quantity--buttons_btn' id='cart_q_dec_2'> ▼ </button>
                                    </div>
                                </span>
                            </td>
                            <td className='table_cells'>
                                <strong className='table_cells__price'> $ 13,047.00 </strong>
                            </td>
                            <td className='table_cells'>
                                <img className='table_cells__icon' src='/assets/icons/Group 108.svg' />
                                <br />
                                <img className='table_cells__icon' src='/assets/icons/Group 112.svg' />
                            </td>
                        </tr>

                        <tr className='table_rows'>
                            <td className='table_cells'>
                                <button className='table_cells__fbtn fbtn_passive'> Continue Shopping </button>
                                <button className='table_cells__fbtn fbtn_active'> Clear Shopping Cart </button>
                            </td>
                            <td className='table_cells'></td>
                            <td className='table_cells'></td>
                            <td className='table_cells'></td>
                            <td className='table_cells' colSpan={2}>
                                <button className='table_cells__fbtn fbtn_active'> Update Shopping Cart </button>
                            </td>
                            <td className='table_cells'></td>
                        </tr>
                    </table>
                </div>

                <div className='cart__container--aside'>
                    <h2 className='cart__container--aside_header'> Summary </h2>

                    <div className='cart__container--aside_shipping'>
                        <div className='cart__container--aside_shipping-btn'>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span> Estimate Shipping and Tax </span>
                                <img className='window_icon' src='/assets/icons/chevron-down.svg' />
                            </div>
                            <p className='window_desc'>
                                Enter your destination to get a shipping estimate.
                            </p>
                        </div>

                        <div className='cart__container--aside_shipping-window'>
                            <h4 className='window_header'>
                                Country
                            </h4>
                            <select className='window_input' name='country' id='country'>
                                <option value='Australia'> Australia </option>
                                <option value='Zambia'> Zambia </option>
                                <option value='Egypt'> Egypt </option>
                                <option value='Russia'> Russia </option>
                                <option value='Brazil'> Brazil </option>
                                <option value='Argentina'> Argentina </option>
                                <option value='India'> India </option>
                                <option value='Japan'> Japan </option>
                                <option value='Austria'> Austria </option>
                                <option value='Norway'> Norway </option>
                            </select>

                            <h4 className='window_header'>
                                State/Province
                            </h4>
                            <input className='window_input' type='text' />
                            
                            <h4 className='window_header'>
                                Zip/Postal Code
                            </h4>
                            <input className='window_input' type='text' />

                            <h4 className='window_header'>
                                Standard Rate
                            </h4>
                            <div style={{display: 'flex'}}>
                                <input className='window_radio' type='radio' name='shipping' id='standart' value='ship_1' checked />
                                <label className='window_text' htmlFor='standart'>
                                    Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
                                </label>
                            </div>
                            <h4 className='window_header'>
                                Pickup from store
                            </h4>
                            <div style={{display: 'flex'}}>
                                <input className='window_radio' type='radio' name='shipping' id='store' value='ship_2' />
                                <label className='window_text' htmlFor='store'>
                                    1234 Street Adress City Address, 1234 $0.00
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='cart__container--aside_discount'>
                        <div className='cart__container--aside_discount-btn'>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <span> Apply Discount Code </span>
                                <img className='window_icon' src='/assets/icons/chevron-down.svg' />
                            </div>
                        </div>

                        <div className='cart__container--aside_shipping-group'>
                            <h4 className='window_header'> Enter discount code </h4>
                            <input className='window_input' type='text' placeholder='Enter Discount code' style={{marginTop: '10px'}} />
                            <button className='apply_discount'> Apply Discount </button>
                        </div>
                    </div>

                    <div className='cart__container--aside_rectangle'></div>

                    <div className='cart__container--aside_subtotal'>
                        <h4 className='head'> Subtotal </h4>
                        <strong className='value'> $13,047.00 </strong>
                    </div>
                    <div className='cart__container--aside_shippingtotal'>
                        <div>
                            <h4 className='head'>
                                Shipping
                            </h4>
                            <span className='desc' style={{display: 'flex', fontSize: '10px', width: '300px', lineHeight: '20px', marginTop: '10px'}}>
                                (Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)
                            </span>
                        </div>

                        <strong className='value'> $21.00 </strong>
                    </div>
                    <div className='cart__container--aside_tax'>
                        <h4 className='head'> Tax </h4>
                        <strong className='value'> $1.91 </strong>
                    </div>
                    <div className='cart__container--aside_gst'>
                        <h4 className='head'> GST (10%) </h4>
                        <strong className='value'> $1.91 </strong>
                    </div>
                    <div className='cart__container--aside_total'>
                        <h4 className='head'> Order Total </h4>
                        <strong className='value'> $13,068.00 </strong>
                    </div>

                    <div className='cart__container--aside_buttons'>
                        <Link to='/checkout' className='window_btn proceed'>
                            Proceed to Checkout
                        </Link>
                        <Link className='window_btn paypal'>
                            Check out with
                            <img className='purchase_img' src='/assets/icons/paypal-logo.svg' alt='paypal' />
                        </Link>
                        <Link className='window_btn check_address'>
                            Check Out with Multiple Addresses
                        </Link>
                    </div>

                    <div className='cart__container--aside_cargozip'>
                        <CargoZip />
                    </div>
                </div>
            </div>

            <div className='cart__services'>
                <Services />
            </div>
        </div>
    )
}

export default Cart