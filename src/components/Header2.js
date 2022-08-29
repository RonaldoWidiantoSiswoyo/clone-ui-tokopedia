import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header2.css";
import { Modal } from "reactstrap";

const Header2 = () => {
  const [popup, setPop] = useState(false);
  const [category, setCategory] = useState(false);
  const [input, setInput] = useState(false);
  const clickOpen = () => {
    setPop(!popup);
  };
  const clickCategory = () => {
    setCategory(!category);
  };
  const clickInput = () => {
    setInput(!input);
  };

  // const clickClose = () => {
  //   setPop(false);
  // };
  return (
    <div className="wrapper">
      <div className="item-header-2">
        <div className="header-content">
          <img className="img-tokopedia" src="assets/img/2.png" />
          <span className="text-category" onClick={clickCategory}>
            Kategori
          </span>
          <div className="wrap-search">
            <input
              type="text"
              className="form-control"
              placeholder="  Cari barang disini"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={clickInput}
            />
            <div className="wrap-icon-search">
              <img className="img-search" src="assets/img/3.png" />
            </div>
          </div>

          <div className="wrap-img-shop" onClick={clickOpen}>
            <img className="img-shop" src="assets/img/4.png" />
          </div>
          <span className="line">|</span>
          <div className="header-btn">
            <button className="btn">Masuk</button>
            <button className="btn">Daftar</button>
          </div>
        </div>
        <div className="text-under-search">
          <span>Baju Pria</span>
          <span>Jaket Pria</span>
          <span>Drone Racing</span>
          <span>Casing HP</span>
          <span>Aksesoris Laptop</span>
          <span>Jam Tangan</span>
        </div>
      </div>
      {popup ? (
        <div className="menu-bar">
          <img src="assets/img/5.png" />
          <h4>Wah keranjang belanjamu kosong!</h4>
          <p>
            Daripada dianggurin, mending diisi dengan barang impianmu. Yuk cek
            sekarang!
          </p>
          <button className="btn">Lihat Rekomendasi</button>
        </div>
      ) : (
        ""
      )}

      {/* ================================== */}
      {input ? (
        <Modal isOpen={input} toggle={clickInput}>
          <div className="modal-content__title">
            <span className="title">Pencarian Terakhir</span>
            <span className="hapus">Hapus Semua</span>
          </div>
          <span className="riwayat">Macbook Pro 2021 M1</span>
          <span className="riwayat">iPhone 14 Pro Max</span>
          <span className="riwayat">Nothing Smartphone 128GB</span>
          <span className="riwayat">AirPods Pro</span>
          <span className="title populer">Populer</span>
          <div className="populer-list">
            <button className="btn">Earbuds</button>
            <button className="btn">Handsfree</button>
            <button className="btn">Apple Watch</button>
          </div>
        </Modal>
      ) : (
        ""
      )}
      {category ? (
        <div className="category">
          <div className="head-category">
            <span>Belanja</span>
            <span>Featured</span>
            <span>Brand&nbsp;Unggulan</span>
            <span>Halal&nbsp;Corner</span>
            <span>Investasi&nbsp;Asuransi&nbsp;dan&nbsp;Pinjaman</span>
            <span>Pajak</span>
            <span>Pendidikan</span>
            <span>Tagihan</span>
            <span>Top-&nbsp;Up</span>
            <span>Travel&nbsp;dan&nbsp;Entertainment</span>
            <span>OS&nbsp;Populer</span>
            <span>Lainnya</span>
          </div>
          <div className="category-row">
            <div className="col-2">
              <div className="head-left">
                <h6 className="category-title">Buku</h6>
                <h6 className="category-title">Dapur</h6>
                <h6 className="category-title">Elektronik</h6>
                <h6 className="category-title">Fashion Anak dan Bayi</h6>
                <h6 className="category-title">Fashion Muslim</h6>
                <h6 className="category-title">Fashion Pria</h6>
                <h6 className="category-title">Fashion Wanita</h6>
                <h6 className="category-title">Film dan Musik</h6>
                <h6 className="category-title">Gaming</h6>
                <h6 className="category-title">Handphone dan Tablet</h6>
                <h6 className="category-title">Ibu dan Bayi</h6>
                <h6 className="category-title">Kamera</h6>
                <h6 className="category-title">Kecantikan</h6>
                <h6 className="category-title">Kesehatan</h6>
                <h6 className="category-title">Komputer dan Laptop</h6>
                <h6 className="category-title">Logam Mulia</h6>
                <h6 className="category-title">Mainan dan Hobi</h6>
                <h6 className="category-title">Makanan dan Minuman</h6>
                <h6 className="category-title">Office dan Stationery</h6>
                <h6 className="category-title">Olahraga</h6>
                <h6 className="category-title">Otomotif</h6>
                <h6 className="category-title">Perawatan Hewan</h6>
                <h6 className="category-title">Peralatan Tubuh</h6>
                <h6 className="category-title">Perlengkapan Pesta dan Craft</h6>
                <h6 className="category-title">Pertukangan</h6>
                <h6 className="category-title">Produk Lainnya</h6>
                <h6 className="category-title">Properti</h6>
                <h6 className="category-title">Rumah Tangga</h6>
                <h6 className="category-title">Tour dan Travel</h6>
                <h6 className="category-title">Wedding</h6>
              </div>
            </div>
            <div className="col-10">
              <div className="head-left">
                <div className="head-left__title">
                  <img src="assets/img/6.png" />
                  <span className="barang">Buku</span>
                </div>
                <div className="list-barang">
                  <div className="col-3">
                    <h5>Aristektur dan Desain</h5>
                    <p>Buku Bangunan</p>
                    <p>Buku Codes dan Standards</p>
                    <p>Buku Dekorasi dan Ornamen</p>
                    <p>Buku Desain Dapur</p>
                    <p>Buku Desain Kamar</p>
                    <p>Buku Desain Ruang Tamu</p>
                    <p>Buku Desain Kamar Mandi</p>
                    <p>Buku Desain Kamar Tidur</p>
                    <p>Buku Desain Kamar Kakak</p>
                    <p>Buku Desain Kamar Pria</p>
                    <p>Buku Desain Kamar Wantia</p>
                    <p>Buku Desain Gedung</p>
                    <p>Buku Desain Gedung Tua</p>
                  </div>
                  <div className="col-3">
                    <h5>Buku Masakan</h5>
                    <p>Resep Kue</p>
                    <p>Resep Roti</p>
                    <p>Resep Makanan Diet</p>
                    <p>Resep Makanan Sehat</p>
                    <p>Resep Makanan Protein</p>
                    <p>Resep Dessert</p>
                    <p>Resep Masakan</p>
                  </div>
                  <div className="col-3">
                    <h5>Kamus</h5>
                    <p>Kamus Bahasa Indonesia</p>
                    <p>Kamus Bahasa Jepang</p>
                    <p>Kamus Bahasa Belanda</p>
                    <p>Kamus Bahasa Jerman</p>
                    <p>Kamus Bahasa Inggris</p>
                    <p>Kamus Bahasa Yugoslavia</p>
                    <p>Kamus Bahasa Tagalog</p>
                  </div>
                  <div className="col-3">
                    <h5>Majalah</h5>
                    <p>Katalog</p>
                    <p>Koran</p>
                    <p>Majalah Anak</p>
                    <p>Majalah Desain</p>
                    <p>Majalah Kantor</p>
                    <p>Majalah Bisnis</p>
                    <p>Majalah Musik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Header2;
