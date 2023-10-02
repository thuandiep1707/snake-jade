import { useNavigate } from 'react-router-dom'

import block1 from '../../assets/img/blockHomepage1.png'
import block2 from '../../assets/img/blockHomepage2.png'
import block3 from '../../assets/img/blockHomepage3.png'
import product1 from '../../assets/img/blockProductHomepage1.png'
import product2 from '../../assets/img/blockProductHomepage2.png'
import product3 from '../../assets/img/blockProductHomepage3.png'

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
        </div>
    )
}

export default HomePage;