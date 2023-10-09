
import checkout from '../../assets/img/footer/checkout.png';
import icon from '../../assets/img/icon.png';

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_banner">
                <div className="footer_banner_title">
                    <div className="footer_banner_title_h1">UNLOCK 20% OFF YOUR FIRST ORDER</div>
                    <div className="footer_banner_title_p">Reveal coupon code by entering your email</div>
                </div>
                <div className="footer_banner_email">
                    <input type="text" className="footer_banner_email_box" placeholder='Email Address'/>
                    <button className="footer_banner_email_btn pointer">Reveal coupon</button>
                </div>
            </div>
            <div className="footer_content">
                <div className="footer_content_description">
                    <div className="footer_content_description_logo pointer">
                        <img src={icon} alt="" className="footer_content_description_logo_img" />
                        Longterm
                    </div>
                    <p className="footer_content_description_p">#1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.</p>
                </div>
                <div className="footer_content_infor">
                    <div className="footer_content_infor_quick">
                        <div className="footer_content_infor_quick_h2">QUICK LINK</div>
                        <div className="footer_content_infor_quick_links">
                            <p className="footer_content_infor_quick_links_p pointer">Track Your Order</p>
                            <p className="footer_content_infor_quick_links_p pointer">Mushrooms</p>
                            <p className="footer_content_infor_quick_links_p pointer">Shop All</p>
                            <p className="footer_content_infor_quick_links_p pointer">Promotions / Bundles</p>
                            <p className="footer_content_infor_quick_links_p pointer">Flower</p>
                            <p className="footer_content_infor_quick_links_p pointer">Support</p>
                            <p className="footer_content_infor_quick_links_p pointer">Edibles</p>
                            <p className="footer_content_infor_quick_links_p pointer">Reward</p>
                            <p className="footer_content_infor_quick_links_p pointer">Concentrates</p>
                            <p className="footer_content_infor_quick_links_p pointer">Blog</p>
                            <p className="footer_content_infor_quick_links_p pointer">Refunds</p>
                            <p className="footer_content_infor_quick_links_p pointer">Shipping Faq</p>
                        </div>
                    </div>
                    <div className="footer_content_infor_contact">
                        <h2 className="footer_content_infor_contact_h2">CONTACT US</h2>
                        <p className="footer_content_infor_contact_p pointer">info@topshelfbc.cc</p>
                    </div>
                    <div className="footer_content_infor_more">
                        <h2 className="footer_content_infor_more_h2">MORE</h2>
                        <div className="footer_content_infor_more_buy">
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Canada</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Manitoba</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in New Brunswick</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Quitebec</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Prince Edward Island</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in British Columbia</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Northwest Territories</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Ontario</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Saskatchewan</p>
                            <p className="footer_content_infor_more_buy_p pointer">Buy weed online in Alberta</p>
                        </div>
                    </div>
                    <img src={checkout} alt="" className="footer_content_infor_checkout pointer" />
                </div>
            </div>
            <div className="footer_end">
                <p className="footer_end_left">© 2022 Top Shelf BC. All Rights Reserved. </p>
                <div className="footer_end_right">
                    <p className="footer_end_right_p pointer">Out Of Stock</p>
                    <p className="footer_end_right_p pointer">Privacy Policy</p>
                    <p className="footer_end_right_p pointer">Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;