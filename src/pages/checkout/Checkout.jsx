import React from 'react'
import './checkout.css'
import {Breadcrumb, Services} from '../../components/index.js'
import {Link} from 'react-router-dom'

function Checkout() {
    return(
        <div className='checkout'>
            <div className='checkout__breadcrumb'>
                <Breadcrumb />
            </div>

            <div className='checkout__topside'>
                <span className='checkout__topside--information'>
                    <h1 className='checkout__topside--information_h1'> Checkout </h1>
                    <Link to='/register' className='checkout__topside--information_btn'> Sign In </Link>
                </span>

                <span className='checkout__topside--progress'>
                    <span className='checkout__topside--progress_group'>
                        <div className='checkout__topside--progress_group-icon'>
                            <span className='checkout__topside--progress_group-icon__rectangle'></span>
                            <span className='checkout__topside--progress_group-icon__symbol'> ✓ </span>
                            <span className='checkout__topside--progress_group-icon__rectangle'></span>
                        </div>
                        <p className='checkout__topside--progress_group-text'> Shipping </p>
                    </span>

                    <span className='checkout__topside--progress_group'>
                        <div className='checkout__topside--progress_group-icon'>
                            <span className='checkout__topside--progress_group-icon__rectangle'></span>
                            <span className='checkout__topside--progress_group-icon__symbol'> 2 </span>
                            <span className='checkout__topside--progress_group-icon__rectangle'></span>
                        </div>
                        <p className='checkout__topside--progress_group-text'> Review & Payments </p>
                    </span>
                </span>
            </div>

            <h3 className='checkout__h3'>
                Shipping Address
            </h3>

            <div className='checkout__container'>
                <span className='checkout__container--main'>
                    <div className='checkout__container--main_group'>
                        <h4 className='checkout__container--main_group-h4'>
                            Email Address
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />
                        <p className='checkout__container--main_group-text'> You can create an account after checkout. </p>

                        {/* <div></div> */}

                        <h4 className='checkout__container--main_group-h4'>
                            First Name
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            Last Name
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            Company
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            Street Address
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />
                        <br />
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            City
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            State/Province
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <select className='checkout__container--main_group-inputs' name='state' id='state'>
                            <option value='0' style={{display: 'none'}}> Please, select a region, state or province </option>
                            <option value='test'> test </option>
                        </select>

                        <h4 className='checkout__container--main_group-h4'>
                            Zip/Postal Code
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />

                        <h4 className='checkout__container--main_group-h4'>
                            Country
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <select className='checkout__container--main_group-inputs' name='countries' id='countries'>
                            <option value='us'> United States </option>
                        </select>

                        <h4 className='checkout__container--main_group-h4'>
                            Phone Number
                            <b className='checkout__container--main_group-h4__symbol'> * </b>
                        </h4>
                        <input className='checkout__container--main_group-inputs' type='text' />
                    </div>
                    <div className='checkout__container--main_selection'>
                        <h4 className='checkout__container--main_selection-h4'>
                            Standard Rate
                        </h4>
                        <label className='checkout__container--main_selection-labels' htmlFor='standart'>
                            <input className='checkout__container--main_selection-labels__radiobtn' type='radio' name='shipping' id='standart' defaultChecked={true} />
                            <p className='checkout__container--main_selection-labels__text'> Price may vary depending on the item/destination. Shop Staff will contact you. </p>
                            <strong className='checkout__container--main_selection-labels__price'> $21.00 </strong>
                        </label>
                    </div>
                    <div className='checkout__container--main_selection'>
                        <h4 className='checkout__container--main_selection-h4'>
                            Pickup from store
                        </h4>
                        <label className='checkout__container--main_selection-labels' htmlFor='store'>
                            <input className='checkout__container--main_selection-labels__radiobtn' type='radio' name='shipping' id='store' />
                            <p className='checkout__container--main_selection-labels__text'> 1234 Street Adress City Address, 1234 </p>
                            <strong className='checkout__container--main_selection-labels__price'> $0.00 </strong>
                        </label>
                    </div>

                    <button className='checkout__container--main_submit'> Next </button>
                </span>

                <span className='checkout__container--aside'>
                    <span className='checkout__container--aside_header'> Order Summary </span>

                    <div className='checkout__container--aside_rectangle'></div>

                    <div className='checkout__container--aside_cartcontainer'>
                        <div className='checkout__container--aside_cartcontainer-showbtn'>
                            <span className='checkout__container--aside_cartcontainer-showbtn__info'> 2 items in Cart </span>

                            <img className='checkout__container--aside_cartcontainer-showbtn__icon' src='/assets/icons/chevron-down.svg' />
                        </div>

                        <div className='checkout__container--aside_cartcontainer-cartitems'>
                            <div className='checkout__container--aside_cartcontainer-cartitems__card'>
                                <div className='checkout__container--aside_cartcontainer-cartitems__card--image'>
                                    <img className='checkout__container--aside_cartcontainer-cartitems__card--image_content' src='/assets/checkout/image 51.png' alt='item_01' />
                                </div>

                                <div className='checkout__container--aside_cartcontainer-cartitems__card--group'>
                                    <p className='checkout__container--aside_cartcontainer-cartitems__card--group_title'>
                                        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
                                    </p>
                                    <span className='checkout__container--aside_cartcontainer-cartitems__card--group_sum'>
                                        Qty 1
                                        <strong className='checkout__container--aside_cartcontainer-cartitems__card--group_sum-price'> $3,799.00 </strong>
                                    </span>
                                </div>
                            </div>

                            <div className='checkout__container--aside_cartcontainer-cartitems__card'>
                                <div className='checkout__container--aside_cartcontainer-cartitems__card--image'>
                                    <img className='checkout__container--aside_cartcontainer-cartitems__card--image_content' src='/assets/checkout/image 52.png' alt='item_02' />
                                </div>

                                <div className='checkout__container--aside_cartcontainer-cartitems__card--group'>
                                    <p className='checkout__container--aside_cartcontainer-cartitems__card--group_title'>
                                        MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
                                    </p>
                                    <span className='checkout__container--aside_cartcontainer-cartitems__card--group_sum'>
                                        Qty 1
                                        <strong className='checkout__container--aside_cartcontainer-cartitems__card--group_sum-price'> $3,799.00 </strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>

            <div className='checkout__services'>
                <Services />
            </div>
        </div>
    )
}

export default Checkout