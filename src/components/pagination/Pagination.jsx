import React from 'react'
import './pagination.css'
import {Link} from 'react-router-dom'

function Pagination() {
    return (
        <div className='pagination'>
            <Link to='/catalog' className='pagination__btn' id='btn_prev'> ◄ </Link>

            <Link to='/catalog' className='pagination__btn' id='btn_pg_1'> 1 </Link>
            <Link to='/catalog' className='pagination__btn' id='btn_pg_2'> 2 </Link>
            <Link to='/catalog' className='pagination__btn' id='btn_pg_3'> 3 </Link>

            <p className='pagination__dots'> ... </p>

            <Link to='/catalog' className='pagination__btn' id='btn_pg_15'> 15 </Link>

            <Link to='/catalog' className='pagination__btn' id='btn_next'> ► </Link>
        </div>
    )
}

export default Pagination