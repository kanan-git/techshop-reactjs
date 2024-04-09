import React from 'react'
import './contact.css'
import {Breadcrumb, Services} from '../../components/index.js'

function Contact() {
    return(
        <div className='contact'>
            <div className='contact__breadcrumb'>
                <Breadcrumb />
            </div>

            <h1 className='contact__header'> Contact Us </h1>

            <div className='contact__container'>
                <div className='contact__container--main'>
                    <p className='contact__container--main_text'>
                        We love hearing from you, our Shop customers.
                        <br />
                        Please contact us and we will make sure to get back to you as soon as we possibly can.
                    </p>

                    <div className='contact__container--main_form'>
                        <span className='contact__container--main_form-group'>
                            <label className='contact__container--main_form-group__label' htmlFor='fullname'>
                                Your Name
                                <b className='contact__container--main_form-group__label--symbol'> * </b>
                            </label>
                            <input className='contact__container--main_form-group__input' type='text' id='fullname' placeholder='Your Name' />
                        </span>

                        <span className='contact__container--main_form-group'>
                            <label className='contact__container--main_form-group__label' htmlFor='formemail'>
                                Your Email
                                <b className='contact__container--main_form-group__label--symbol'> * </b>
                            </label>
                            <input className='contact__container--main_form-group__input' type='email' id='formemail' placeholder='Your Email' />
                        </span>

                        <span className='contact__container--main_form-group'>
                            <label className='contact__container--main_form-group__label' htmlFor='phonenumber'>
                                Your Phone Number
                                <b className='contact__container--main_form-group__label--symbol'> * </b>
                            </label>
                            <input className='contact__container--main_form-group__input' type='tel' id='phonenumber' placeholder='Your Phone' />
                        </span>

                        <span className='contact__container--main_form-group'>
                            <label className='contact__container--main_form-group__label' htmlFor='userfeedback'>
                                What’s on your mind?
                            </label>
                            <textarea className='contact__container--main_form-group__input' name='userfeedback' id='userfeedback' 
                            cols='30' rows='10' placeholder='Jot us a note and we’ll get back to you as quickly as possible'></textarea>
                        </span>
                    </div>

                    <button className='contact__container--main_submit'> Submit </button>
                </div>

                <div className='contact__container--aside'>
                    <table className='contact__container--aside_table'>
                        <tr className='contact__container--aside_table-rows'>
                            <td className='contact__container--aside_table-rows-cells'>
                                <img className='contact-table-icons' src='/assets/icons/bx_bx-time.svg' />
                            </td>
                            <td className='contact__container--aside_table-rows-cells'>
                                <b className='contact__container--aside_table-rows-cells_header'> Address: </b>
                                <br />
                                1234 Street Address City Address, 1234
                            </td>
                        </tr>
                        <tr className='contact__container--aside_table-rows'>
                            <td className='contact__container--aside_table-rows-cells'>
                                <img className='contact-table-icons' src='/assets/icons/bx_bx-time-1.svg' />
                            </td>
                            <td className='contact__container--aside_table-rows-cells'>
                                <b className='contact__container--aside_table-rows-cells_header'> Phone: </b>
                                <br />
                                (00) 1234 5678
                            </td>
                        </tr>
                        <tr className='contact__container--aside_table-rows'>
                            <td className='contact__container--aside_table-rows-cells'>
                                <img className='contact-table-icons' src='/assets/icons/bx_bx-time-2.svg' />
                            </td>
                            <td className='contact__container--aside_table-rows-cells'>
                                <b className='contact__container--aside_table-rows-cells_header'> We are open: </b>
                                <br />
                                Monday - Thursday: 9:00 AM - 5:30 PM
                                <br />
                                Friday 9:00 AM - 6:00 PM
                                <br />
                                Saturday: 11:00 AM - 5:00 PM
                            </td>
                        </tr>
                        <tr className='contact__container--aside_table-rows'>
                            <td className='contact__container--aside_table-rows-cells'>
                                <img className='contact-table-icons' src='/assets/icons/bx_bx-time-3.svg' />
                            </td>
                            <td className='contact__container--aside_table-rows-cells'>
                                <b className='contact__container--aside_table-rows-cells_header'> E-mail: </b>
                                <br />
                                shop@email.com
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className='contact__services'>
                <Services />
            </div>
        </div>
    )
}

export default Contact