import {Link} from 'react-router-dom';

import icon from '../../assets/img/icon.png';
import './header.scss';

const Header = () => {
    
    return (
        <>
            <div className="header">
                <div className="header_first">
                    <p className="header_first_title">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
                    <p className="header_first_clock">23 : 15 : 00</p>
                </div>
                <div className="header_second">
                    <div className="header_second_logo">
                        <img src={icon} alt="logo" className='header_second_logo_icon'/>
                        Longterm
                    </div>
                    <div className="header_second_search">
                        <input type="text" className="header_second_search_box" placeholder='Search' />
                        <i className="fa-solid fa-magnifying-glass header_second_search_icon"/>
                    </div>
                    <div className="header_second_icon">
                        <p className="header_second_icon_account pointer">Your Account</p>
                        <p>|</p>
                        <i className="fa-solid fa-bag-shopping header_second_icon_cart pointer"/>
                    </div>
                </div>
                <div className="header_nav">
                    <Link to='/category' className='header_nav_option link pointer' >Shop All</Link>
                    <div className='header_nav_option link pointer' >Flower</div>
                    <div className='header_nav_option link pointer' >Edibles</div>
                    <div className='header_nav_option link pointer' >Concentrates</div>
                    <div className='header_nav_option link pointer' >Mushrooms</div>
                    <div className='header_nav_option link pointer' >Promotions/Bundles</div>
                    <div className='header_nav_option link pointer' >Support</div>
                    <div className='header_nav_option link pointer' >Rewards</div>
                    <div className='header_nav_option link pointer' >Blog</div>
                </div>
            </div>
        </>
    )
}

export default Header;