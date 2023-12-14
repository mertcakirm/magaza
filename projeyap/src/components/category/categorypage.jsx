import React, { useState } from "react";
import ProductData from "../mainpagedata/productdata";
import NavBar from "../nav/NavBar";
import "./categorypageman.css";
import { Link } from "react-router-dom";
const CategoryPageMan = () => {
  const urun = ProductData();
  const urunler = urun.productsman;

  const [filtrelenmisUrunler, setFiltrelenmisUrunler] = useState(urunler);
  const [adetBilgisi, setAdetBilgisi] = useState({});
  const [toplamFiyat, setToplamFiyat] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [odemefiyati, setodemefiyati] = useState();

  const giyim = () => {
    const giyimUrunleri = urunler.filter((urun) => urun.kategori === "giyim");
    setFiltrelenmisUrunler(giyimUrunleri);
  };

  const ayakkabi = () => {
    const ayakkabiUrunleri = urunler.filter(
      (urun) => urun.kategori === "ayakkabi"
    );
    setFiltrelenmisUrunler(ayakkabiUrunleri);
  };

  const canta = () => {
    const cantaUrunleri = urunler.filter((urun) => urun.kategori === "canta");
    setFiltrelenmisUrunler(cantaUrunleri);
  };

  const tumunuGoster = () => {
    setFiltrelenmisUrunler(urunler);
  };

  const sepeteEkle = (urun) => {
    setAdetBilgisi((prev) => ({
      ...prev,
      [urun.id]: (prev[urun.id] || 0) + 1,
    }));
    setToplamFiyat((prev) => prev + Number(urun.fiyat));
  };
  const odeme = (toplamFiyat) => {
    setodemefiyati(toplamFiyat);
    return odeme
  };

  const adetArtir = (urun) => {
    setAdetBilgisi((prev) => ({
      ...prev,
      [urun.id]: (prev[urun.id] || 0) + 1,
    }));
    setToplamFiyat((prev) => prev + Number(urun.fiyat));
  };

  const adetAzalt = (urun) => {
    if (adetBilgisi[urun.id] > 1) {
      setAdetBilgisi((prev) => ({
        ...prev,
        [urun.id]: (prev[urun.id] || 0) - 1,
      }));
      setToplamFiyat((prev) => prev - Number(urun.fiyat));
    } else if (adetBilgisi[urun.id] === 1) {
      setAdetBilgisi((prev) => ({
        ...prev,
        [urun.id]: (prev[urun.id] || 0) - 1,
      }));
      setToplamFiyat((prev) => prev - Number(urun.fiyat));
      setFiltrelenmisUrunler((prev) => {
        const updated = prev.map((item) =>
          item.id === urun.id ? { ...item, sepettedurumu: false } : item
        );
        return updated;
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="panel">
        <h1>Erkek Ürünleri</h1>
        <div className="urunler">
          <button
            className={`categorybtnman ${
              selectedCategory === "tumunuGoster" && "selected"
            }`}
            onClick={() => {
              setSelectedCategory("tumunuGoster");
              tumunuGoster();
            }}
          >
            Tümü
          </button>
          <button
            className={`categorybtnman ${
              selectedCategory === "giyim" && "selected"
            }`}
            onClick={() => {
              setSelectedCategory("giyim");
              giyim();
            }}
          >
            Giyim
          </button>
          <button
            className={`categorybtnman ${
              selectedCategory === "ayakkabi" && "selected"
            }`}
            onClick={() => {
              setSelectedCategory("ayakkabi");
              ayakkabi();
            }}
          >
            Ayakkabı
          </button>
          <button
            className={`categorybtnman ${
              selectedCategory === "canta" && "selected"
            }`}
            onClick={() => {
              setSelectedCategory("canta");
              canta();
            }}
          >
            Çanta
          </button>
          <Link
            to="/payment" state={{price: toplamFiyat}}
          >
            <button id="odemeyap">
                Ödeme Yap {toplamFiyat}$
            </button>
          </Link>
        </div>
      </div>
      <div className="product-m">
        {filtrelenmisUrunler.map((urun) => (
          <div className="product-frame" key={urun.id}>
            <img src={urun.url} alt={urun.kategori} />
            <h2>{urun.fiyat}$</h2>
            {adetBilgisi[urun.id] ? (
              <>
                <button className="artirButon" onClick={() => adetArtir(urun)}>
                  +
                </button>
                <div>Adet: {adetBilgisi[urun.id]}</div>
                <button className="azaltButon" onClick={() => adetAzalt(urun)}>
                  -
                </button>
              </>
            ) : (
              <button id="addbtn" onClick={() => sepeteEkle(urun)}>
                Sepete Ekle
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
  return { odemefiyati };
};

export default CategoryPageMan;
