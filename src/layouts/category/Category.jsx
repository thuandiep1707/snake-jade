import { useState } from 'react'

import { intros, productRadio } from '../../assets/data/categoryData'
import './category.scss'

const Category = () => {

    const [productFilter, setProductFilter] = useState()
    const [priceFilter, setPriceFilter] = useState(120)

    const handleSetProductFilter = (value) => {
        setProductFilter(value)
    }

    const handleSetPriceFilter = (value) => {
        setPriceFilter(value)
    }
    const handleOnClickApply = () => {
        console.log(priceFilter)
    }

    return(
        <div className="category">
            <div className="category_intros">
                {
                    intros.map((value, key)=>
                        <div className="category_intros_intro" key={key}>
                            <img src={value.img} alt={value.title} className="category_intros_intro_img" />
                            <h2 className="category_intros_intro_title">{value.title}</h2>
                        </div>
                    )
                }
            </div>
            <div className="category_container">
                <div className="category_container_filter">
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
                </div>
                <div className="category_container_shop"></div>
            </div>
        </div>
    )
}

export default Category;