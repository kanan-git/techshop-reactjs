import React from 'react'
import './account.css'
import {Breadcrumb, Services} from '../../components/index.js'

function Account() {
    return(
        <div className='account'>
            <div className='account__breadcrumb'>
                <Breadcrumb />
            </div>

            <h1 className='account__h1'> My Dashboard </h1>

            <div className='account__container'>
                <div className='account__container--aside'>
                    <ul className='account__container--aside_group'>
                        <li className='account__container--aside_group-menus'> Account Dashboard </li>
                        <li className='account__container--aside_group-menus'> Account Information </li>
                        <li className='account__container--aside_group-menus'> Address Book </li>
                        <li className='account__container--aside_group-menus'> My Orders </li>

                        <div className='account-rectangle'></div>

                        <li className='account__container--aside_group-menus'> My Downloadable Products </li>
                        <li className='account__container--aside_group-menus'> Stored Payment Methods </li>
                        <li className='account__container--aside_group-menus'> Billing Agrements </li>
                        <li className='account__container--aside_group-menus'> My Wish List </li>

                        <div className='account-rectangle'></div>

                        <li className='account__container--aside_group-menus'> My Product Reviews </li>
                        <li className='account__container--aside_group-menus'> Newsletter Subscriptions </li>
                    </ul>

                    <div className='account__container--aside_group'>
                        <h3 className='account__container--aside_group-header'> Compare Products </h3>

                        <div className='account__container--aside_group-contain'>
                            <p className='empty-text'> You have no items to compare. </p>

                            {/* compare card components */}
                        </div>
                    </div>

                    <div className='account__container--aside_group'>
                        <h3 className='account__container--aside_group-header'> My Wish List </h3>

                        <div className='account__container--aside_group-contain'>
                            <p className='empty-text'> You have no items in yout wish list. </p>

                            {/* wishlist card components */}
                        </div>
                    </div>
                </div>

                <div className='account__container--main'>
                    <div className='account__container--main_group'>
                        <h3 className='account-h3_5'> Account Information </h3>

                        <div className='account__container--main_group-lower'>
                            <span className='account-cards'>
                                <h4 className='account-h4'> Contact Information </h4>
                                <p className='account-data'>
                                    Alex Driver
                                    <br />
                                    ExampleAddress@gmail.com
                                </p>
                                <span className='account-links'> Edit </span>
                                <span className='account-links'> Change Password </span>
                            </span>
                            <span className='account-cards'>
                                <h4 className='account-h4'> Newsletters </h4>
                                <p className='account-data'>
                                    You don't subscribe to our newsletter.
                                </p>
                                <span className='account-links'> Edit </span>
                            </span>
                        </div>
                    </div>

                    <div className='account__container--main_group'>
                        <div className='account__container--main_group-upper'>
                            <h3 className='account-h3_5'> Address Book </h3>
                            <span className='account-links'> Manage Addresses </span>
                        </div>

                        <div className='account__container--main_group-lower'>
                            <span className='account-cards'>
                                <h4 className='account-h4'> Default Billing Address </h4>
                                <p className='account-data'>
                                    You have not set a default billing address.
                                </p>
                                <span className='account-links'> Edit Address </span>
                            </span>
                            <span className='account-cards'>
                                <h4 className='account-h4'> Default Shipping Address </h4>
                                <p className='account-data'>
                                    You have not set a default shipping address.
                                </p>
                                <span className='account-links'> Edit Address </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='account__services'>
                <Services />
            </div>
        </div>
    )
}

export default Account