import { useContext,useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { GlobalContext } from '../../GlobalContext';
import icon from '../../assets/img/icon.png';
import './header.scss';

const Header = () => {
    const {cart} = useContext(GlobalContext)
    const nav = useNavigate()
    let date = new Date().toLocaleTimeString()
    const [time, setTime] = useState(date)
    setInterval(()=>{
        let date = new Date().toLocaleTimeString()
        setTime(date)
    },1000)
    const goHome = () => {
        nav('/')
    }
    return (
        <>
            <div className="header">
                <div className="header_first">
                    <p className="header_first_title">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
                    <p className="header_first_clock">{time}</p>
                </div>
                <div className="header_second">
                    <div className="header_second_logo pointer" onClick={()=>{goHome()}}>
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
                        <p className='pointer'>
                            <i className="fa-solid fa-bag-shopping header_second_icon_cart"/>
                            <span className='header_second_icon_quantity'>{cart.length}</span>
                        </p>
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