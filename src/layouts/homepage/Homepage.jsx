import { useNavigate, Link } from 'react-router-dom'

import block1 from '../../assets/img/homepage/block1.png'
import block2 from '../../assets/img/homepage/block2.png'
import block3 from '../../assets/img/homepage/block3.png'
import product1 from '../../assets/img/homepage/blockProduct1.png'
import product2 from '../../assets/img/homepage/blockProduct2.png'
import product3 from '../../assets/img/homepage/blockProduct3.png'
import intro1 from '../../assets/img/homepage/intro1.png'
import intro2 from '../../assets/img/homepage/intro2.png'
import intro3 from '../../assets/img/homepage/intro3.png'
import bestsale from '../../assets/img/homepage/bestsale.png'
import Maskgroup from '../../assets/img/homepage/Maskgroup.png'

import { education, recently, num, order, choose, testimonials, bestSale } from '../../assets/data/homapageData'
import ProductCard from '../../components/productcart/ProductCard'
import TestimonialsCard from './components/TestimonialsCard'

import './homepage.scss'

const HomePage = () => {
    const navigate = useNavigate()
    const handleButtonNavToShop = () => {
        navigate('/category')
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
            <div className="homepage_bestsale">
                <h1 className="homepage_bestsale_title">BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h1>
                <div className="homepage_bestsale_select">
                    <p className="homepage_bestsale_select_page pointer">Best Sellers</p>
                    <p className="homepage_bestsale_select_page pointer">Bundles & Promotions</p>
                    <p className="homepage_bestsale_select_page pointer">On Sale</p>
                </div>
                <div className="homepage_bestsale_products">
                    <div className="homepage_bestsale_products_view">
                        <img src={bestsale} alt="" className="homepage_bestsale_products_view_img" />
                        <div className="homepage_bestsale_products_view_title">Shop our Best Sellers</div>
                        <div className="homepage_bestsale_products_view_content">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </div>
                        <Link to='/category' className='homepage_bestsale_products_view_link'>View All</Link>
                    </div>
                    <div className="homepage_bestsale_products_list">
                        {
                            bestSale.map((product, index)=> <ProductCard product={product} key={index} />)
                        }
                    </div>
                </div>
            </div>
            <div className="homepage_testimonials">
                <h1 className="homepage_testimonials_title">CUSTOMER TESTIMONIALS</h1>
                <div className="homepage_testimonials_container">
                    <div className="homepage_testimonials_container_card">
                        <h2 className="homepage_testimonials_container_card_title">VOTED BEST ONLINE DISPENSARY IN CANADA</h2>
                        <h2 className="homepage_testimonials_container_card_google">Google</h2>
                        <div className="homepage_testimonials_container_card_exellencet">EXELLENCET</div>
                        <p className="homepage_testimonials_container_card_rate">
                            <span className="homepage_testimonials_container_card_rate_stars">
                                {[...Array(5)].map((pro, key)=><i key={key} className="fa-solid fa-star" style={{color: "#F2BC1B"}}/>)}
                            </span>
                            <span className="homepage_testimonials_container_card_rate_span">|</span>
                            on 135 
                            <span className="homepage_testimonials_container_card_rate_span">Reviews</span>
                        </p>
                    </div>
                    <div className="homepage_testimonials_container_comments">
                        {testimonials.map((value, index)=><TestimonialsCard value={value} key={index}/>)}
                    </div>
                </div>
            </div>
            <div className="homepage_choose">
                <h1 className="homepage_choose_title">CHOOSE YOUR WEED</h1>
                <div className="homepage_choose_filter">
                    <p className="homepage_choose_filter_title">Filter by Interest</p>
                    <div className="homepage_choose_filter_options">
                        <p className="homepage_choose_filter_options_p pointer">Flowers</p>
                        <p className="homepage_choose_filter_options_p pointer">Mushrooms</p>
                        <p className="homepage_choose_filter_options_p pointer">Concentrate</p>
                        <p className="homepage_choose_filter_options_p pointer">Edibles</p>
                        <p className="homepage_choose_filter_options_p pointer">Shop All Weed</p>
                    </div>
                </div>
                <div className="homepage_choose_products">
                    {choose.map((pro, key)=><ProductCard key={key} product={pro} />)}
                </div>
            </div>
            <div className="homepage_order">
                <div className="homepage_order_banner" style={{backgroundImage: `url(${Maskgroup})`}} >
                    <h1 className="homepage_order_banner_refer">REFER A FRIENDS</h1>
                    <h3 className="homepage_order_banner_get"> End get <span className='homepage_order_banner_get_span'>$30!</span></h3>
                    <button className="homepage_order_banner_btn pointer">Refer Here</button>
                </div>
                <h1 className="homepage_order_title">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA</h1>
                <p className="homepage_order_content">Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</p>
                <div className="homepage_order_procedure">
                        {
                            order.map((value, key) =>
                        <div className="homepage_order_procedure_step" key={key}>
                            <img src={value.img} alt={value.step} className="homepage_order_procedure_step_img" />
                            <h3 className="homepage_order_procedure_step_name">{value.stepName}</h3>
                            <div className="homepage_order_procedure_step_description">{value.description}</div>
                        </div>
                            )   
                        }
                </div>
                <button className="homepage_order_btn pointer" onClick={()=>handleButtonNavToShop()}>Choose your Weed</button>
            </div>
            <div className="homepage_num1">
                <div className="homepage_num1_title">
                    WHAT MAKES US THE <span className='homepage_num1_title_span'>#1</span> ONLINE MARIJUANA DISPENSARY IN CANADA?
                </div>
                <div className="homepage_num1_headline">
                    When it comes to what makes us the <u>foremost online marijuana dispensary in Canada</u>, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.
                </div>
                <div className="homepage_num1_adventages">
                    {
                        num.map((value, key)=>
                            <div className='homepage_num1_adventages_feature' key={key}>
                                <img src={value.img} alt="" className="homepage_num1_adventages_feature_img" />
                                <h3 className="homepage_num1_adventages_feature_advantage">{value.advantage}</h3>
                                <p className="homepage_num1_adventages_feature_description">{value.description}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;