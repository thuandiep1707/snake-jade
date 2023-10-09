

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
                    <button className="footer_banner_email_btn">Reveal coupon</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;