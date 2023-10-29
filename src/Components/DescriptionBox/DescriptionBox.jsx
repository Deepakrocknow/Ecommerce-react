import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (123)</div>

        </div>
        <div className="descriptionbox-description">
            <p>Step into a realm of sartorial excellence with our exclusive clothing collection. Every garment is a work of art, meticulously crafted to blend style with individuality. Embrace the allure of timeless elegance and self-expression as you explore our diverse range. Our clothing isn't just fabric and threads; it's a canvas for your aspirations and a reflection of your unique identity. Elevate your wardrobe with us and redefine your fashion journey..</p>
            <p>Indulge in the epitome of elegance with our clothing collection. Every piece we offer is meticulously crafted, a blend of timeless style and personal expression. It's more than just clothing; it's an artistic manifestation of your unique identity. Elevate your fashion statement with us, where sophistication harmonizes seamlessly with individuality..</p>
        </div>
    </div>
  )
}

export default DescriptionBox