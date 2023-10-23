import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from '../../GlobalContext'
import IconCheckout from '../../assets/img/footer/checkout.png'
import './cart.scss'

const Cart = ({ stateCart, handleStateCart }) => {
    const {cart} = useContext(GlobalContext)
    const [stateAnimation, setStateAnimation] = useState("show") 
    const handleAnimation = () => {
        setStateAnimation("hiden")
        setTimeout(() => {
            handleStateCart("hiden")
        },250)
    }
    if (stateCart == "show") {
        if (cart) {
            return (
                <main className="cart" >
                    <div className="cart_close" onClick={()=>handleAnimation("hiden")}/>
                    <section className={`cart_list ${stateAnimation == "show" ? "show" : "hiden"}`}>
                        <header className='cart_list_header'>
                            <h2 >Your Cart</h2>
                            <p>({cart.length})</p>
                        </header>
                        <section className='cart_list_section'>

                        </section>
                        <div className="cart_list_icon">
                            <img src={IconCheckout} alt="" />
                        </div>
                    </section>
                </main>
            )
        }
        return (
            <main className="cart">
                <div className="cart_close" onClick={()=>handleAnimation("hiden")}/>
                <section className={`cart_list ${stateAnimation == "show" ? "show" : "hiden"}`}>
                    <header className='cart_list_header'>
                        <h2 >Your Cart</h2>
                        <p>({cart.length})</p>
                    </header>
                    <section className='cart_list_section'>
                        <i className="fa-solid fa-bag-shopping cart_list_section_icon"/>
                        <Link to="/category" className="cart_list_section_show_product" onClick={()=>handleAnimation("hiden")}>Show Product</Link>
                    </section>
                </section>
            </main>
        )
    }
}

export default Cart