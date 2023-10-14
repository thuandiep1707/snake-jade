

import { intros, productRadio } from '../../assets/data/categoryData'
import './category.scss'

const Category = () => {
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
                                        <input type="radio" id={`radio${key}`} className="category_container_filter_prod_option_radio" name='filter'/>
                                        <label className="category_container_filter_prod_option_label" htmlFor={`radio${key}`}>
                                            {value.type} 
                                            <span className="category_container_filter_prod_option_label">{value.quantity}</span>
                                        </label>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="category_container_shop"></div>
            </div>
        </div>
    )
}

export default Category;