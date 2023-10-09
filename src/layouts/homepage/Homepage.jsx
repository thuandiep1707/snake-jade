import { useNavigate } from 'react-router-dom'

import block1 from '../../assets/img/homepage/block1.png'
import block2 from '../../assets/img/homepage/block2.png'
import block3 from '../../assets/img/homepage/block3.png'
import product1 from '../../assets/img/homepage/blockProduct1.png'
import product2 from '../../assets/img/homepage/blockProduct2.png'
import product3 from '../../assets/img/homepage/blockProduct3.png'
import intro1 from '../../assets/img/homepage/intro1.png'
import intro2 from '../../assets/img/homepage/intro2.png'
import intro3 from '../../assets/img/homepage/intro3.png'

import './homepage.scss'

const HomePage = () => {
    const nav = useNavigate()

    const handleButtonNavToShop = () => {
        nav('/category')
    }

    return (
        <div className="homepage">
            <div className="homepage_about">
                <div className="homepage_about_contents">
                    <p className="homepage_about_contents_firstline">BEST SELLER</p>
                    <p className="homepage_about_contents_title">BEST DISPENSARY TO BUY WEED ONLINE </p>
                    <p className="homepage_about_contents_vitamins">Vitamins & Supplements</p>
                    <div className="homepage_about_contents_promotion">
                        <p>Get 25% off</p> | <p>Free Shipping</p>
                    </div>
                    <button className="homepage_about_contents_shop_btn pointer" onClick={()=>{handleButtonNavToShop()}} >Shop All</button>
                </div>
                <div className="homepage_about_products">
                    <div className="homepage_about_products_blocks1">
                        <img src={product1} alt="" className="homepage_about_products_blocks1_product" />
                        <img src={block1} alt="" className="homepage_about_products_blocks1_block" />
                    </div>
                    <div className="homepage_about_products_blocks2">
                        <img src={product2} alt="" className="homepage_about_products_blocks2_product" />
                        <img src={block2} alt="" className="homepage_about_products_blocks2_block" />
                    </div>
                    <div className="homepage_about_products_blocks3">
                        <img src={product3} alt="" className="homepage_about_products_blocks3_product" />
                        <img src={block3} alt="" className="homepage_about_products_blocks3_block" />
                    </div>
                </div>
            </div>
            <div className="homepage_intros">
                <div className="homepage_intros_intro">
                    <img src={intro1} alt="" className="homepage_intros_intro_icon" />
                    <div className="homepage_intros_intro_content">
                        <h3 className="homepage_intros_intro_content_h3">Reliable Shipping</h3>
                        <p className="homepage_intros_intro_content_p">Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!</p>
                    </div>
                </div>
                <div className="homepage_intros_intro">
                    <img src={intro2} alt="" className="homepage_intros_intro_icon" />
                    <div className="homepage_intros_intro_content">
                        <h3 className="homepage_intros_intro_content_h3">You’re Safe With Us</h3>
                        <p className="homepage_intros_intro_content_p">Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.</p>
                    </div>
                </div>
                <div className="homepage_intros_intro">
                    <img src={intro3} alt="" className="homepage_intros_intro_icon" />
                    <div className="homepage_intros_intro_content">
                        <h3 className="homepage_intros_intro_content_h3">Best Quality & Pricing</h3>
                        <p className="homepage_intros_intro_content_p">Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely</p>
                    </div>
                </div>
            </div>
            <div className="homepage_dispensary">
                <h1 className="homepage_dispensary_title">BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h1>
                <div className="homepage_dispensary_select">
                    <p className="homepage_dispensary_select_page pointer">Best Sellers</p>
                    <p className="homepage_dispensary_select_page pointer">Bundles & Promotions</p>
                    <p className="homepage_dispensary_select_page pointer">On Sale</p>
                </div>

            </div>
        </div>
    )
}

export default HomePage;