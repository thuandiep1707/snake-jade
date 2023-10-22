import { useContext,useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { GlobalContext } from '../../GlobalContext';
import Cart from '../cart/Cart'
import icon from '../../assets/img/icon.png';
import './header.scss';

const Clock = () => {
    let date = new Date().toLocaleTimeString()
    const [time, setTime] = useState(date)
    setInterval(()=>{
        let date = new Date().toLocaleTimeString()
        setTime(date)
    },1000)
    return (
        <div className="header_first">
            <p className="header_first_title">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</p>
            <p className="header_first_clock">{time}</p>
        </div>
    )
}

const Header = () => {
    const {cart} = useContext(GlobalContext)
    const nav = useNavigate()
    const [stateCart, setStateCart] = useState()
    const goHome = () => {
        nav('/')
    }
    const handleStateCart = (state) => {
        setStateCart(state)
    }
    return (
        <>
            <div className="header">
                <Clock/>
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
                        <p className='pointer' onClick={()=>handleStateCart("show")}>
                            <i className="fa-solid fa-bag-shopping header_second_icon_cart"/>
                            <span className='header_second_icon_quantity' >{cart.length}</span>
                        </p>
                        { stateCart == "show" ? <Cart stateCart={stateCart} handleStateCart={handleStateCart}/> : <></>}
                    </div>
                </div>
                <div className="header_nav">
                    <Link to='/' className='header_nav_option link pointer' >Home Page</Link>
                    <Link to='/category' className='header_nav_option link pointer' >Shop All</Link>
                    <Link to='/category' className='header_nav_option link pointer' >Flower</Link>
                    <Link to='/category' className='header_nav_option link pointer' >Edibles</Link>
                    <Link to='/category' className='header_nav_option link pointer' >Concentrates</Link>
                    <Link to='/category' className='header_nav_option link pointer' >Mushrooms</Link>
                    <Link to='/support' className='header_nav_option link pointer' >Support</Link>
                    <Link to='/rewards' className='header_nav_option link pointer' >Rewards</Link>
                    <Link to='/Blogs' className='header_nav_option link pointer' >Blogs</Link>
                </div>
            </div>
        </>
    )
}

export default Header;