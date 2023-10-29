import React from 'react';
import './Hero.css';
import arrow_icon from '../Assests/arrow.png';


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Latest</p>
                </div>
                <p>collections</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=''/>
            </div>

        </div>
        <div className="hero-right">
            <img src="https://img.freepik.com/premium-photo/young-woman-straw-hat-white-summer-dress-with-mobile-phone-shopping-bags-smiling-pink-wall-text-web-banner-girl-makes-online-shopping-photo-studio_101969-972.jpg" alt=''/>

        </div>

    </div>
  )
}

export default Hero