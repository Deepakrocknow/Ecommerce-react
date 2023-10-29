import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);


  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdispaly-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdispaly-img">
                <img className='productdispaly-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdispaly-right">
            <h1>{product.name}</h1>
            <div className="productdispaly-right-star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull} alt=''/>
                <p>(123)</p>

            </div>
            <div className="productdispaly-right-prices">
                <div className="productdispaly-right-prices-old">${product.old_price}</div>
                <div className="productdispaly-right-prices-new">${product.new_price}</div>

            </div>
            <div className="productdispaly-right-description">
                  In the world of fashion, we don't just design clothes; we craft experiences. Each stitch, every fabric, and the style we create tells a unique story. Our clothing is a canvas for self-expression, confidence, and elegance. It's not just fashion; it's a reflection of your individuality and aspirations.
            </div>
            <div className="productdispaly-right-size">
                <h1>Select Size</h1>
                <div className="productdispaly-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdispaly-right-category'><span>Category : </span> Women, T-Shirt, Crop Top</p>
            <p className='productdispaly-right-category'><span>Tags : </span> Modern , Latest</p>


        </div>
    </div>
  )
}

export default ProductDisplay