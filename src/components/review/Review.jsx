import React from 'react'
import './review.css'

function Review() {
    return(
        <div className='review'>
            <div className='review-comment'>
                <div className='review-comment__icon'> ‘’ </div>

                <div className='review-comment__text'>
                    <p className='review-comment__text--content'>
                        My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look foreview-rward to shopping on your site in the future and would highly recommend it.
                    </p>

                    <div className='review-comment__text--author'> - Tama Brown </div>
                </div>
            </div>

            <div className='review-rw'>
                <button className='review-rw__btn'>
                    Leave Us A Review
                </button>

                <span className='review-rw__pagination'>
                    <div className='review-rw__pagination--dot' id='dot_1'></div>
                    <div className='review-rw__pagination--dot' id='dot_2'></div>
                    <div className='review-rw__pagination--dot' id='dot_3'></div>
                    <div className='review-rw__pagination--dot' id='dot_4'></div>
                </span>
            </div>
        </div>
    )
}

export default Review