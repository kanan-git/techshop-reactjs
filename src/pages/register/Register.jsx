import React from 'react'
import './register.css'
import {Breadcrumb, Services} from '../../components/index.js'

function Register() {
    return(
        <div className='register'>
            <div className='register__breadcrumb'>
                <Breadcrumb />
            </div>
            <h1 className='register__header'> Customer Login </h1>
            <div className='register__container'>
                <div className='register__container--sections'>
                    <h3 className='register__container--sections_header'>
                        Registered Customers
                    </h3>

                    <p className='register__container--sections_text'>
                        If you have an account, sign in with your email address.
                    </p>

                    <label className='register__container--sections_label'>
                        <h4 className='register-label__header'>
                            Email <b className='register-label__header--symbol'> * </b>
                        </h4>
                        <input className='register-label__input' type='email' placeholder='Enter your email' />
                    </label>

                    <label className='register__container--sections_label'>
                        <h4 className='register-label__header'>
                            Password <b className='register-label__header--symbol'> * </b>
                        </h4>
                        <input className='register-label__input' type='password' placeholder='Enter your password' />
                    </label>

                    <div className='register__container--sections_group'>
                        <button className='register__container--sections_group-login'> Sign In </button>
                        <p className='register__container--sections_group-recover'> Forgot your password ? </p>
                    </div>
                </div>

                <div className='register__container--sections'>
                    <h3 className='register__container--sections_header'> New Customer ? </h3>
                    <p className='register__container--sections_text'> Creating an account has many benefits: </p>
                    <ul className='register__container--sections_list'>
                        <li className='register__container--sections_list-elements'> Check out faster </li>
                        <li className='register__container--sections_list-elements'> Keep more than one address </li>
                        <li className='register__container--sections_list-elements'> Track orders and more </li>
                    </ul>
                    <button className='register__container--sections_submit'> Create An Account </button>
                </div>
            </div>
            <div className='register__services'>
                <Services />
            </div>
        </div>
    )
}

export default Register