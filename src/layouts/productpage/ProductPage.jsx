import { useState } from 'react'

import ProductCard from '../../components/productcard/ProductCard'
import { product, section2, testimonials, featured } from '../../assets/data/productPageData'
import './productpage.scss'

const ProductPage = () => {
    const [weight, setWeight] = useState("28g")
    const [pack, setPack] = useState(2)
    const [quantity, setQuantity] = useState(1)
    const [btnHeader, setBtnHeader] = useState("Description")
    
    const handleSeQWeight = (value) => {
        setWeight(value)
    }

    const handleSetPack = (value) => {
        setPack(value)
    }

    const handleSetQuantity = (value) => {
        setQuantity(value)
    }

    const handleSetBtnHeader = (value) => {
        setBtnHeader(value)
    }

    const styleBtnHeader = {
        border : "1px #05422C solid",
        backgroundColor: "#F2F6F4"
    }

    return (
        <main className="productpage">
            <section className="productpage_detail">
                <img src={product.img} alt="âsá" className="productpage_detail_img" />
                <section className="productpage_detail_all">
                    <section className="productpage_detail_all_section1">
                        <h3 className='h3'>CONCENTRATES</h3>
                        <h2 className="productpage_detail_all_section1_name">{product.name}</h2>
                        <div className="productpage_detail_all_section1_compound">
                            <p>{product.compound1}</p>
                            <p>{product.compound2}</p>
                        </div>
                        <div className="productpage_detail_all_section1_price_rate">
                            <p>$ {product.price}.00</p>
                            <p className="productcard_rate">
                                <i className="fa-solid fa-star" style={{color: "#F2BC1B"}} />{product.rate} | {product.review} 
                                <span className="productcard_rate_review"> Reviews</span> 
                            </p>
                        </div>
                    </section>
                    <section className="productpage_detail_all_section2">
                        {
                            section2.map((value, key)=> 
                                <div className='productpage_detail_all_section2_element' key={key}>
                                    <img src={value.icon} alt="" className="productpage_detail_all_section2_element_icon" />
                                    <div className="productpage_detail_all_section2_element_content">
                                        <h3>{value.name}</h3>
                                        <p>{value.content}</p>
                                    </div>
                                </div>
                            )
                        }
                    </section>
                    <section className="productpage_detail_all_description">
                        <h3 className='h3'>DESCRIPTION</h3>
                        <p className='paragrap'>Jungle Diamonds is a slightly indica dominant hybrid strain (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4 strains.</p>
                    </section>
                    <section className="productpage_detail_all_wp">
                        <div className="productpage_detail_all_wp_weight">
                            <p className='productpage_detail_all_wp_weight_title'>WEIGHT</p>
                            <p className="productpage_detail_all_wp_weight_selects">
                                <span className='pointer'>28g</span>
                                <span className='pointer'>1/2lb</span>
                                <span className='pointer'>1/4lb</span>
                            </p>
                        </div>
                        <div className="productpage_detail_all_wp_pack">
                            <p className='title'>ADD INTEGRA PACK</p>
                            <div className="input1" onClick={()=>handleSetPack(2)}>
                                <input id='4g' type="radio" name='pack' defaultChecked={pack == 2 ? true : false} />
                                <label htmlFor="4g" className='fa-solid fa-check radio_check'></label>
                                <label htmlFor="4g"> 4g (+$2.00)</label>
                            </div>
                            <div className="input2" onClick={()=>handleSetPack(3)}>
                                <input id='8g' type="radio" name='pack' defaultChecked={pack == 3 ? true : false} />
                                <label htmlFor="8g" className='fa-solid fa-check radio_check'></label>
                                <label htmlFor="8g"> 8g (+$3.00)</label>
                            </div>
                        </div>
                        <p className="productpage_detail_all_wp_point">Purchase this product now and earn 80 Points!</p>
                    </section>
                    <section className="productpage_detail_all_wp_add">
                        <div className="productpage_detail_all_wp_add_infor">
                            <p className="productpage_detail_all_wp_add_infor_kush">
                                <span>Khalifa Kush (AAAA)</span>
                                <span>{quantity}x</span>
                                <span>$ {product.price}.00</span>
                            </p>
                            <p className="productpage_detail_all_wp_add_infor_pack">
                                <span>Add Integra Pack - {pack == 2 ? "4g" : "8g"}</span>
                                <span>${pack}.00</span>
                            </p>
                        </div>
                        <div className="productpage_detail_all_wp_add_stock">
                            <div className="productpage_detail_all_wp_add_stock_quantity">
                                <div className="productpage_detail_all_wp_add_stock_quantity_box">
                                    <button className="minus_btn pointer"> - </button>
                                    <p>{quantity}</p>
                                    <button className="add_btn pointer"> + </button>
                                </div>
                                <p>In Stock</p>
                            </div>
                            <button className="productpage_detail_all_wp_add_stock_btn">Add to Cart | $ {quantity * product.price + pack}.00</button>
                        </div>
                        <div className="list">
                            <div className="endow">
                                <i className="fa-solid fa-check" />
                                <p>Free Xpress Shipping on orders over <span style={{color: '#F2BC1B'}}>$149</span></p>
                            </div>
                            <div className="endow">
                                <i className="fa-solid fa-check" />
                                <p>Order before 12:00pm for same day dispatch</p>
                            </div>
                            <div className="productpage_detail_all_wp_add_endow">
                                <i className="fa-solid fa-check" />
                                <p>Support & ordering open 7 day a week</p>
                            </div>
                        </div>
                    </section>
                    <footer className="productpage_detail_all_wp_footer">
                        <p>
                            <span className='span1'>SKU</span> : <span className='span2'>N/A</span>
                        </p>
                        <p>
                            <span className='span1'>Categories</span> : <span className='span2'>AAAA Weed, Indica</span>
                        </p>
                    </footer>
                    <section className="productpage_detail_all_section2">
                        <header className="productpage_detail_all_section2_header">
                            <button style={btnHeader == "Description" ? styleBtnHeader : {}} onClick={()=> handleSetBtnHeader('Description')}>Description</button>
                            <button style={btnHeader == "Reviews" ? styleBtnHeader : {}} onClick={()=> handleSetBtnHeader('Reviews')}>Reviews <span>(350)</span></button>
                            <button style={btnHeader == "Refer a Friend" ? styleBtnHeader : {}} onClick={()=> handleSetBtnHeader('Refer a Friend')}>Refer a Friend</button>
                        </header>
                        <section className="productpage_detail_all_section2_content">
                            {/* {btnHeader == "Description" ?} */}
                        </section>
                    </section>
                </section>
            </section>
            <section className="productpage_feature">
                <p className="productpage_feature_title">Featured Product</p>
                <div className="productpage_feature_list">
                    {featured.map((product, key)=>
                        <ProductCard product={product} key={key} />
                    )}
                </div>
            </section>
        </main>
    )
}

export default ProductPage;