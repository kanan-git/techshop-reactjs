import React from 'react'
import './catalogmenu.css'
import {Link} from 'react-router-dom'
import {ProductCard} from '../index.js'

function CatalogMenu() {
    return(
        <div className='catalogmenu' id='catalogmenu'>
            <div className='catalogmenu__main'>
                <div className='catalogmenu__main--aside'>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus' onMouseEnter={() => {
                        document.getElementById('altmenu1').style.display = `flex`
                    }} onMouseLeave={() => {
                        document.getElementById('altmenu1').style.display = `none`
                    }} onClick={() => {
                        document.getElementById('catalogmenu').style.display = `none`
                    }}>
                        <span className='catalogmenu__main--aside_menus-text'> Everyday Use Notebooks </span>
                        <img className='catalogmenu__main--aside_menus-icon' src='/assets/icons/chevron-down.svg' />

                        <div className='altmenu1' id='altmenu1'>
                            <Link to='/catalog' className='altmenu1__links' onMouseEnter={() => {
                                document.getElementById('altmenu2').style.display = `flex`
                            }} onMouseLeave={() => {
                                document.getElementById('altmenu2').style.display = `none`
                            }} onClick={() => {
                                document.getElementById('catalogmenu').style.display = `none`
                            }}>
                                <span className='altmenu1__links--text'>
                                    MSI Workstation Series
                                </span>
                                <img className='altmenu1__links--icon' src='/assets/icons/chevron-down.svg' />

                                <div className='altmenu2' id='altmenu2'>
                                    <Link to='/catalog' className='altmenu2__links'> MSI WS Series <i> (12) </i> </Link>
                                    <Link to='/catalog' className='altmenu2__links'> MSI WT Series <i> (31) </i> </Link>
                                    <Link to='/catalog' className='altmenu2__links'> MSI WE Series <i> (7) </i> </Link>
                                </div>
                            </Link>
                            <Link to='/catalog' className='altmenu1__links'> MSI Prestige Series </Link>
                        </div>
                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        <span className='catalogmenu__main--aside_menus-text'> MSI Workstation Series </span>
                        <img className='catalogmenu__main--aside_menus-icon' src='/assets/icons/chevron-down.svg' />


                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        MSI Prestige Series
                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        Gaming Notebooks
                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        Tablets And Pads
                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        Netbooks
                    </Link>
                    <Link to='/catalog' className='catalogmenu__main--aside_menus'>
                        Infinity Gaming Notebooks
                    </Link>
                </div>
                <div className='catalogmenu__main--container'>
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                    <ProductCard vType='grid-' />
                </div>
            </div>
            <div className='catalogmenu__brands'>
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame22.svg' alt='roccat' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame23.svg' alt='msi' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame24.svg' alt='razer' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame25.svg' alt='thermaltake' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame26.svg' alt='adata' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame27.svg' alt='hewlett-packard' />
                <img className='catalogmenu__brands--image' src='/assets/brands/Frame34.svg' alt='gigabyte' />
            </div>
        </div>
    )
}

export default CatalogMenu