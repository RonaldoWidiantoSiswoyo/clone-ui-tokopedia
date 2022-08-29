import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../styles/Swiper.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import iconArrow from "../assets/arrow.svg";
import imgCentang from "../img/14.png";
import imgSlide1 from "../img/etalase/cream.jpg";
import imgSlide2 from "../img/etalase/kaos-polos.jpg";
import imgSlide3 from "../img/etalase/magicom.png";
import imgSlide4 from "../img/etalase/pepsodent.png";
import imgSlide5 from "../img/etalase/tas-selempang.jpg";
import imgSlide6 from "../img/etalase/tisu-nice.jpg";

const data = [
  {
    id: 1,
    image: imgSlide1,
    title: "Cream Wajah untuk Wanita",
    price: "Rp 20.000",
    discount: "20%",
    totalDiscount: "Rp 24.000",
    image2: imgCentang,
    kota: "Tangerang",
    keterangan: "Segera Habis",
  },
  {
    id: 2,
    image: imgSlide2,
    title: "Kaos Polos Pria",
    price: "Rp 100.000",
    discount: "30%",
    totalDiscount: "Rp 130.000",
    image2: imgCentang,
    kota: "Kota Semarang",
    keterangan: "Lagi Diminati",
  },
  {
    id: 3,
    image: imgSlide3,
    title: "Magicom Cosmos Terbaru",
    price: "Rp 400.000",
    discount: "10%",
    totalDiscount: "Rp 420.000",
    image2: imgCentang,
    kota: "Cepu",
    keterangan: "Segera Habis",
  },
  {
    id: 4,
    image: imgSlide4,
    title: "Pasta Gigi Pepsodent",
    price: "Rp 8.000",
    discount: "10%",
    totalDiscount: "Rp 8.800",
    image2: imgCentang,
    kota: "Jakarta Selatan",
    keterangan: "Segera Habis",
  },
  {
    id: 5,
    image: imgSlide5,
    title: "Tas Selempang Pria",
    price: "Rp 20.000",
    discount: "40%",
    totalDiscount: "Rp 28.000",
    image2: imgCentang,
    kota: "Tangerang",
    keterangan: "Lagi Diminati",
  },
  {
    id: 6,
    image: imgSlide6,
    title: "Tissue Nice kualitas bagus",
    price: "Rp 10.000",
    discount: "20%",
    totalDiscount: "Rp 12.000",
    image2: imgCentang,
    kota: "Kota Surabaya",
    keterangan: "Segera Habis",
  },
  {
    id: 7,
    image: imgSlide1,
    title: "Cream Wajah untuk Wanita",
    price: "Rp 20.000",
    discount: "20%",
    totalDiscount: "Rp 24.000",
    image2: imgCentang,
    kota: "Tangerang",
    keterangan: "Segera Habis",
  },
  {
    id: 8,
    image: imgSlide2,
    title: "Kaos Polos Pria",
    price: "Rp 100.000",
    discount: "30%",
    totalDiscount: "Rp 130.000",
    image2: imgCentang,
    kota: "Kota Semarang",
    keterangan: "Lagi Diminati",
  },
  {
    id: 9,
    image: imgSlide3,
    title: "Magicom Cosmos Terbaru",
    price: "Rp 400.000",
    discount: "10%",
    totalDiscount: "Rp 420.000",
    image2: imgCentang,
    kota: "Cepu",
    keterangan: "Segera Habis",
  },
  {
    id: 10,
    image: imgSlide4,
    title: "Pasta Gigi Pepsodent",
    price: "Rp 8.000",
    discount: "10%",
    totalDiscount: "Rp 8.800",
    image2: imgCentang,
    kota: "Jakarta Selatan",
    keterangan: "Segera Habis",
  },
  {
    id: 11,
    image: imgSlide5,
    title: "Tas Selempang Pria",
    price: "Rp 20.000",
    discount: "40%",
    totalDiscount: "Rp 28.000",
    image2: imgCentang,
    kota: "Tangerang",
    keterangan: "Lagi Diminati",
  },
  {
    id: 12,
    image: imgSlide6,
    title: "Tissue Nice kualitas bagus",
    price: "Rp 10.000",
    discount: "20%",
    totalDiscount: "Rp 12.000",
    image2: imgCentang,
    kota: "Kota Surabaya",
    keterangan: "Segera Habis",
  },
];

const SwiperJS = () => {
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  return (
    <div>
      <div className="container wrapper-etalase">
        <div className="kotak ">
          <img src="assets/img/cantik.png" />
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={15}
          slidesPerGroup={6}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevBtn.current;
            swiper.params.navigation.nextEl = nextBtn.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="kosongan"></div>
          </SwiperSlide>
          {data.map((user) => (
            <SwiperSlide key={user.id}>
              <div className="slidejs">
                <div className="image-title">
                  <img src={user.image} />
                </div>
                <p className="user-title">{user.title}</p>
                <h6 className="user-price">{user.price}</h6>
                <div className="discount-side">
                  <p className="discount">{user.discount}</p>
                  <p className="totalDiscount">
                    <s>{user.totalDiscount}</s>
                  </p>
                </div>
                <div className="from">
                  <img src={user.image2} className="image-city" />
                  <p className="user-kota">{user.kota}</p>
                </div>
                <p className="user-keterangan">{user.keterangan}</p>
              </div>
            </SwiperSlide>
          ))}
          <button ref={prevBtn} className="btn-prev">
            <img src={iconArrow} />
          </button>
          <button ref={nextBtn} className="btn-next">
            <img src={iconArrow} />
          </button>
        </Swiper>
      </div>
    </div>
  );
};
export default SwiperJS;
