import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo eaque
            ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <i class="fa-solid fa-location-dot"></i>
            <div className="text">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
              Dhaka, 10000
            </div>
          </div>
          <div className="c-item">
            <i class="fa-solid fa-square-phone"></i>
            <div className="text">Phone: 0471 272 0261</div>
          </div>
          <div className="c-item">
            <i class="fa-solid fa-envelope"></i>
            <div className="text">Email: store@mail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      {/* Bottom */}
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            AFFILIATE. 2023 CREATED BY IKRAM & AKASH
          </span>
          {/* <img src={Payment} /> */}
        </div>
      </div>
    </div>
  )
}

export default Footer