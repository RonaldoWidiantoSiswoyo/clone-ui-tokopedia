import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/KategoriPilihan.css";

class KategoriPilihan extends React.Component {
  render() {
    return (
      <div className="kategori-pilihan">
        <div className="row">
          <div className="col-6">
            <h1>Kategori Pilihan</h1>
            <div
              id="carouselExampleControls"
              className="carousel carousel2 slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row mt-3">
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row mx-0 p-0 mt-3">
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex p-2 flex-column align-items-center justify-content-center card-category">
                        <img src="assets/img/7.png" alt="" />
                        <h2>Makanan</h2>
                        <h3>Kering</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-6 topup">
            <h1>
              Top Up dan Tagihan
              <span>Lihat Semua</span>
            </h1>
            <div className="row">
              <div className="row-child">
                <div className="topup-item">
                  <div className="item-menu">Pulsa</div>
                  <div className="item-menu">Paket Data</div>
                  <div className="item-menu">Listrik PLN</div>
                  <div className="item-menu">Flight</div>
                </div>
                <div className="lainnya">
                  <img src="assets/img/10.png" alt="" />
                </div>
              </div>
              <div className="topup-right">
                <div className="form-row">
                  <div className="form-group">
                    <label for="#">Nomor Telepon</label>
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="0893242137"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label for="#">Nominal</label>
                    <select className="form-control" disabled>
                      <option value="">iPhone 13 Pro Max</option>
                      <option value="">iPad Air </option>
                    </select>
                  </div>
                </div>
                <button className="btn" disabled>
                  Beli
                </button>
              </div>
            </div>
          </div>
          <div className="menu-scroll">
            <div className="item-scroll">
              <img src="assets/img/kategori.png" alt="" />
              <span>Kategori</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/HandphoneTablet.png" alt="" />
              <span>Handphone dan Tablet</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/topup.png" alt="" />
              <span>Top-Up dan Tagihan</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/travel.png" alt="" />
              <span>Travel dan Entertainment</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/perawatanHewan.png" alt="" />
              <span>Perawatan Hewan</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/keuangan.png" alt="" />
              <span>Keuangan</span>
            </div>
            <div className="item-scroll">
              <img src="assets/img/komputer.png" alt="" />
              <span>Komputer dan Lainnya</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default KategoriPilihan;
