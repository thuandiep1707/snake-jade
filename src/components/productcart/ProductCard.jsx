import {} from 'react-router-dom'

import './productcard.scss'

const ProductCard = ({product}) => {
    

    return(
        <div className="productcard">
            <img src={product.img} alt="" className="productcard_img" />
            <h3 className="productcard_classification">{product.classification}</h3>
            <h3 className="productcard_name">{product.name}</h3>
            <p className="productcard_rate">
                <i className="fa-solid fa-star" style={{color: "#dbd400"}} />{product.rate} | {product.review} 
                <span className="productcard_rate_review"> Reviews</span> 
            </p>
            <p className="productcard_compound">{product.compound}</p>
            <p className="productcard_price">
                {product.price} 
                <span className="productcard_price_gram"> / gram</span>
            </p>
            <p className="productcard_weight">
                <span className='productcard_weight_span pointer'>28g</span>
                <span className='productcard_weight_span pointer'>1/2lb</span>
                <span className='productcard_weight_span pointer'>1/4lb</span>
            </p>
            <button className="productcard_btn pointer">See details</button>
        </div>
    )
}

export default ProductCard;