import React from "react";
import "../styles/Header1.css";

class Header1 extends React.Component {
  render() {
    return (
      <div>
        <div className="overlay" id="overlay"></div>
        <div className="header1">
          <div className="item-header-1">
            <div className="header-content">
              <img src="assets/img/1.png" alt="Download Tokopedia App" />
              <span>Download Tokopedia App</span>
            </div>
            <div className="header-content header-menu">
              <span>Tentang Tokopedia</span>
              <span>Mitra Tokopedia</span>
              <span>Mulai Berjualan</span>
              <span>Promo</span>
              <span>Tokopedia Care</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header1;
