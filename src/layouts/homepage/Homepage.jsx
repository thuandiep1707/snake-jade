import { useNavigate } from 'react-router-dom'

import './homepage.scss'

const HomePage = () => {
    const nav = useNavigate()

    const handleButtonNavToShop = () => {
        nav('/category')
    }

    return (
        <div className="homepage">
            <div className="homepage_bestsale">
                <div className="homepage_bestsell_contents">
                    <p className="homepage_bestsell_contents_firstline">BEST SELLER</p>
                    <p className="homepage_bestsale_contents_title">BEST DISPENSARY TO BUY WEED ONLINE </p>
                    <p className="homepage_bestsale_contents_vitamins">Vitamins & Supplements</p>
                    <div className="homepage_bestsell_contents_promotion">
                        <p>Get 25% off</p> | <p>Free Shipping</p>
                    </div>
                    <button className="homepage_bestsale_shop_all pointer" onClick={()=>{handleButtonNavToShop()}} >Shop All</button>
                </div>
                <div className="homepage_bestsale_products"></div>
            </div>
        </div>
    )
}

export default HomePage;