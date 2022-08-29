import React from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import KategoriPilihan from "./components/KategoriPilihan";
import Footer from "./components/Footer";
import SwiperJS from "./components/SwiperJS";
import EtalaseTitle from "./components/EtalaseTitle";

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Header3 />
      <KategoriPilihan />
      <EtalaseTitle />
      <SwiperJS />
      <br />
      <SwiperJS />
      <br />
      <SwiperJS />
      <Footer />
    </div>
  );
}

export default App;
