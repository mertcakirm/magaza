import React, { Component } from "react";
import "./register.css";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="loginwall">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/19/25/man-1850181_1280.jpg"
            alt="wall"
          />
        </div>
        <div className="loginwall">
          <div className="box">
            <h2 id="box1">Kullanıcı Adı</h2>
            <input
              type="text"
              name="username"
              id="inputs"
              placeholder="Lütfen Kullanıcı Adınızı Belirleyiniz:"
              required
            />
            <h2 id="box1">E Mail Adresi</h2>
            <input
              type="email"
              name="username"
              id="inputs"
              placeholder="Lütfen Geçerli Bir Mail Adresi Giriniz:"
              required
            />
            <h2 id="box2">Parola</h2>
            <input
              type="password"
              name="username"
              id="inputs"
              placeholder="Lütfen Parolanızı Belirleyiniz:"
              required
            />
            <button id="grsbtn">Hemen Kayıt Ol</button>
            <br />
            <div id="buttons">
              <button id="girisyap1"><Link to="/login" style={{textDecoration:'none',color:'black'}}>Giriş Yap</Link></button>
              <button id="kayit1"><Link to="/" style={{textDecoration:'none',color:'black'}}>Kayıt Ol</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
