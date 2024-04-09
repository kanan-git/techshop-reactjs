import React from 'react'
import './cargozip.css'

function CargoZip() {
    return(
        <div className='cargozip'>
            <span className='cargozip__image'>
                <img src='/assets/icons/zip.svg' className='image__image--content' />
            </span>

            <span className='cargozip__rectangle'></span>

            <span className='cargozip__phrase'>
                <b> own </b>
                it now, up to 6 months interest free
                <span className='cargozip__link'> learn more </span>
            </span>
        </div>
    )
}

export default CargoZip