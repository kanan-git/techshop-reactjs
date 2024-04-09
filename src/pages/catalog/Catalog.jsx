import React, {useState} from 'react'
import './catalog.css'
import {Services, ProductCard, Breadcrumb, Pagination} from '../../components/index.js'
import {Link} from 'react-router-dom'

function Catalog() {
    const [viewType, setViewType] = useState('grid-')

    return(
        <div className='catalog'>
            <div className='catalog__flexcc'>
                <div className='catalog__flexcc--breadcrumb'>
                    <Breadcrumb />
                </div>

                <h1 className='catalog-search_input'>
                    MSI PS Series (20)
                </h1>

                <div className='catalog__flexcc--container'>
                    <aside className='catalog-aside'>
                        <button className='catalog-back_btn'>
                            ◄ Back
                        </button>

                        <div className='catalog-filter'>
                            <h3 className='catalog-filter__header'> Filters </h3>

                            <button className='catalog-filter__clear'> Clear Filter </button>

                            <div className='catalog-filter__category'>
                                <div className='catalog-filter__category--button'>
                                    <h4 className='catalog-filter__category--button_header'> Category </h4>
                                    <img className='catalog-filter__category--button_icon' src='/assets/icons/chevron-down.svg' />
                                </div>
                                <div className='catalog-filter__category--container'>
                                    <div className='catalog-filter__category--container_tags'>
                                        <p className='catalog-filter__category--container_tags-text'> Custom PCS </p>
                                        <p className='catalog-filter__category--container_tags-count'> 15 </p>
                                    </div>

                                    <div className='catalog-filter__category--container_tags'>
                                        <p className='catalog-filter__category--container_tags-text'> MSI All-In-One PCS </p>
                                        <p className='catalog-filter__category--container_tags-count'> 45 </p>
                                    </div>

                                    <div className='catalog-filter__category--container_tags'>
                                        <p className='catalog-filter__category--container_tags-text'> HP/COMPAQ PCS </p>
                                        <p className='catalog-filter__category--container_tags-count'> 1 </p>
                                    </div>
                                </div>
                            </div>

                            <div className='catalog-filter__price'>
                                <div className='catalog-filter__price--button'>
                                    <h4 className='catalog-filter__price--button_header'> Price </h4>
                                    <img className='catalog-filter__price--button_icon' src='/assets/icons/chevron-down.svg' />
                                </div>
                                <div className='catalog-filter__price--container'>
                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $0.00-$1,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 19 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $1,000.00-$2,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 21 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $2,000.00-$3,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 9 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $3,000.00-$4,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 6 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $4,000.00-$5,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 3 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $5,000.00-$6,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 1 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $6,000.00-$7,000.00 </p>
                                        <p className='catalog-filter__price--container_tags-count'> 1 </p>
                                    </div>

                                    <div className='catalog-filter__price--container_tags'>
                                        <p className='catalog-filter__price--container_tags-text'> $7,000.00 And Above </p>
                                        <p className='catalog-filter__price--container_tags-count'> 1 </p>
                                    </div>
                                </div>
                            </div>

                            <div className='catalog-filter__color'>
                                <div className='catalog-filter__color--button'>
                                    <h4 className='catalog-filter__color--button_header'> Color </h4>
                                    <img className='catalog-filter__color--button_icon' src='/assets/icons/chevron-down.svg' />
                                </div>
                                <div className='catalog-filter__color--container'>
                                    <div className='catalog-filter__color--container_tags catalog-black' id='black'></div>
                                    <div className='catalog-filter__color--container_tags catalog-red' id='red'></div>
                                </div>
                            </div>

                            <div className='catalog-filter__name'>
                                <div className='catalog-filter__name--button'>
                                    <h4 className='catalog-filter__name--button_header'> Filter Name </h4>
                                    <img className='catalog-filter__name--button_icon' src='/assets/icons/chevron-down.svg' />
                                </div>
                                <button className='catalog-filter__name--apply'>
                                    Apply Filter (2)
                                </button>
                            </div>
                        </div>

                        <div className='catalog-brands'>
                            <div className='catalog-brands__top'>
                                <h3 className='catalog-brands__top--header'> Brands </h3>
                                <button className='catalog-brands__top--button'> All Brands </button>
                            </div>

                            <div className='catalog-brands__container'>
                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame22.svg' alt='roccat' />
                                </div>

                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame23.svg' alt='msi' />
                                </div>

                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame25.svg' alt='thermaltake' />
                                </div>

                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame26.svg' alt='adata' />
                                </div>

                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame79.svg' alt='hewlett_packard' />
                                </div>

                                <div className='catalog-brands__container--tags'>
                                    <img className='catalog-brands__container--tags_image' src='/assets/brands/Frame34.svg' alt='gigabyte' />
                                </div>
                            </div>
                        </div>

                        <div className='catalog-compare'>
                            <h3 className='catalog-compare__header'> Compare Products </h3>

                            <div className='catalog-compare__container'>
                                <p className='catalog-compare__container--note'> You have no items to compare. </p>

                                {/* compare card components */}
                            </div>
                        </div>

                        <div className='catalog-wishlist'>
                            <h3 className='catalog-wishlist__header'> My Wish List </h3>

                            <div className='catalog-wishlist__container'>
                                <p className='catalog-wishlist__container--note'> You have no items in yout wish list. </p>

                                {/* wishlist card components */}
                            </div>
                        </div>

                        <div className='catalog-cover'>
                            <img title='catalog-cover__image' src='/assets/covers/image 49.png' alt='image_49' />
                        </div>
                    </aside>

                    <main className='catalog-main'>
                        <div className='catalog-toolbar'>
                            <span className='catalog-toolbar__items'>
                                Items 1-25 of 61
                            </span>

                            <span className='catalog-toolbar__tools'>
                                <div className='catalog-toolbar__tools--type'>
                                    <span className='catalog-toolbar__tools--type_title'>
                                        Sort By:
                                    </span>

                                    <span className='catalog-toolbar__tools--type_select'>
                                        <select className='catalog-toolbar__tools--type_select-input' name='sort' id='sort'>
                                            <option value='position'> Position </option>
                                        </select>

                                        <img className='catalog-toolbar__tools--type_select-icon' src='/assets/icons/chevron-down.svg' />
                                    </span>
                                </div>

                                <div className='catalog-toolbar__tools'>
                                    <div className='catalog-toolbar__tools--type'>
                                        <span className='catalog-toolbar__tools--type_title'>
                                            Show:
                                        </span>

                                        <span className='catalog-toolbar__tools--type_select'>
                                            <select className='catalog-toolbar__tools--type_select-input' name='countperpage' id='countperpage'>
                                                <option value='35'> 35 per page </option>
                                            </select>

                                            <img className='catalog-toolbar__tools--type_select-icon' src='/assets/icons/chevron-down.svg' />
                                        </span>
                                    </div>
                                </div>

                                <div className='catalog-toolbar__view'>
                                    <button className='catalog-toolbar__view--btn' onClick={() => {
                                        setViewType('grid-')
                                    }}>
                                        <img className='catalog-toolbar__view--btn_icon' src='/assets/icons/grid.svg' />
                                    </button>

                                    <button className='catalog-toolbar__view--btn' onClick={() => {
                                        setViewType('list-')
                                    }}>
                                        <img className='catalog-toolbar__view--btn_icon' src='/assets/icons/list.svg' />
                                    </button>
                                </div>
                            </span>
                        </div>

                        <div className='catalog-tags'>
                            <div className='catalog-tags__input'>
                                CUSTOM PCS
                                <span className='catalog-tags__input--counter'> (24) </span>
                                <span className='catalog-tags__input--remove'> × </span>
                            </div>

                            <div className='catalog-tags__input'>
                                HP/COMPAQ PCS
                                <span className='catalog-tags__input--counter'> (24) </span>
                                <span className='catalog-tags__input--remove'> × </span>
                            </div>

                            <button className='catalog-tags__button'>
                                Clear All
                            </button>
                        </div>

                        <div className='catalog-container'>
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />

                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />

                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />

                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                            <ProductCard vType={viewType} />
                        </div>

                        <div className='catalog-main__pagination'>
                            <Pagination />
                        </div>

                        <div className='catalog-description'>
                            <p className='catalog-description__paragraph'>
                                MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.
                                <br />
                                There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
                                Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.
                                <br />
                                Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the "gamer mode" to increase the screen brightness.
                            </p>

                            <button className='catalog-description__btn'>
                                More
                            </button>
                        </div>
                    </main>
                </div>
            </div>
            <div className='catalog__services'>
                <Services />
            </div>
        </div>
    )
}

export default Catalog