import { useState } from 'react'

import ProductCart from '../../components/productcart/ProductCard'
import { intros, productRadio, order, selling, category, panel } from '../../assets/data/categoryData'
import './category.scss'

const Category = () => {

    const [productFilter, setProductFilter] = useState()
    const [priceFilter, setPriceFilter] = useState(120)
    const [orderFilter, setOrderFilter] = useState()
    const [rateFilter, setRateFilter] = useState()

    const handleSetProductFilter = (value) => {
        setProductFilter(value)
    }

    const handleSetPriceFilter = (value) => {
        setPriceFilter(value)
    }
    
    const handleOnClickApply = () => {
        console.log(priceFilter)
    }

    const handleSetOrderFilter = (value) => {
        setOrderFilter(value)
    }

    const handleSetRateFilter = (value) => {
        setRateFilter(value)
    }

    const handleClearFilter = () => {
        location.reload()
    }

    return(
        <main className="category">
            <header className="category_intros">
                {
                    intros.map((value, key)=>
                        <div className="category_intros_intro" key={key}>
                            <img src={value.img} alt={value.title} className="category_intros_intro_img" />
                            <h2 className="category_intros_intro_title">{value.title}</h2>
                        </div>
                    )
                }
            </header>
            <section className="category_container">
                <section className="category_container_filter">
                    <h2 className="category_container_filter_title">Filter</h2>
                    <div className="category_container_filter_prod">
                        <h3 className="category_container_filter_prod_title">PRODUCT CATEGORY</h3>
                        <div className="category_container_filter_prod_option">
                            {
                                productRadio.map((value, key)=>
                                    <>
                                        <input 
                                            type="radio" 
                                            id={`radio${key}`} 
                                            key={`radio${key}`}
                                            className="category_container_filter_prod_option_radio" 
                                            name='filter'
                                            value={value.type}
                                            onChange={(e)=>handleSetProductFilter(e.target.value)}/>
                                        <label className="category_container_filter_prod_option_label" key={`label${key}`} htmlFor={`radio${key}`}>
                                            {value.type} 
                                            <span className="category_container_filter_prod_option_label_span">{value.quantity}</span>
                                        </label>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="category_container_filter_price">
                        <h3 className="category_container_filter_price_title">FILTER BY PRICE</h3>
                        <input type="range" 
                            value={priceFilter}
                            min="0"
                            max="1000"
                            onChange={(e)=>handleSetPriceFilter(e.target.value)}
                            className="category_container_filter_price_input" />
                        <p className="category_container_filter_price_number">$ {priceFilter}</p>
                        <button className="category_container_filter_price_btn pointer" onClick={()=>handleOnClickApply()}>Apply</button>
                    </div>
                    <div className="category_container_filter_order">
                        <h3 className="category_container_filter_order_title">ORDER BY</h3>
                        <div className="category_container_filter_order_option">
                            {
                                order.map((value, key)=>
                                    <>
                                    <input 
                                        type="radio"
                                        className="category_container_filter_order_option_radio" 
                                        key={key}
                                        name='order'
                                        id={`order${key}`}
                                        value={value}
                                        onChange={(e)=>handleSetOrderFilter(e.target.value)}/>
                                    <label htmlFor={`order${key}`} className="category_container_filter_order_option_label">{value}</label>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="category_container_filter_review">
                        <h3 className="category_container_filter_review_title">FILTER BY REVIEWS</h3>
                        <div className="category_container_filter_review_rate">
                            {
                                [...Array(5)].map((value, index)=>
                                <div className="category_container_filter_review_rate_stars" key={index}>
                                    <input 
                                        type="radio" 
                                        className="category_container_filter_review_rate_stars_radio" 
                                        name="star"
                                        id={`rate ${index}`}
                                        onChange={(e)=>handleSetRateFilter(e.target.value)}
                                        />
                                    <div className="category_container_filter_review_rate_stars_list">
                                        {[...Array(5 - index)].map((pro, key)=><i key={key} className="fa-solid fa-star" style={{color: "#F2BC1B", fontSize: '16px', marginLeft : "4px"}}/>)}
                                        {[...Array(index)].map((pro, key)=><i key={key} className="fa-solid fa-star" style={{color: "#c7cedb", fontSize: '16px', marginLeft : "4px", opacity: '0.7'}}/>)}
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    <button className="category_container_filter_clear pointer" onClick={()=>handleClearFilter()}>Clear Filters</button>
                </section>
                <section className="category_container_shop">
                    <header className="category_container_shop_header">
                        <h2 className="category_container_shop_header_shop">Shop</h2>
                        <select name="sort" id="" className="category_container_shop_header_sort">
                            <option selected value={null} className="category_container_shop_header_sort_lates">---</option>
                            <option value="lates" className="category_container_shop_header_sort_lates">Sort By Lates</option>
                            <option value="price" className="category_container_shop_header_sort_price">Sort By Price</option>
                        </select>
                    </header>
                    <summary className="category_container_shop_summary">
                        <h2 className="category_container_shop_summary_title">Cannabis</h2>
                        <p className="category_container_shop_headline_content">Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!</p>
                    </summary>
                    <section className="category_container_shop_detail">
                        <div className="category_container_shop_detail_selling">
                            <h3 className="category_container_shop_detail_selling_title">Top Selling</h3>
                            <div className="category_container_shop_detail_selling_products">
                                {
                                    selling.map((prođuct, key)=> <ProductCart product={prođuct} key={key} />)
                                }
                            </div>
                        </div>
                        <div className="category_container_shop_detail_category1"></div>
                        <div className="category_container_shop_detail_panel"></div>
                        <div className="category_container_shop_detail_category2"></div>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default Category;