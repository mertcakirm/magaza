import React, { Component } from "react";
import "./login.css";
import NavBar from "../nav/NavBar";
import { Link } from "react-router-dom";
const Login = () => {
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
              placeholder="Lütfen Kullanıcı Adınızı Giriniz:"
              required

            />
            <h2 id="box2">Parola</h2>
            <input
              type="password"
              name="username"
              id="inputs"
              placeholder="Lütfen Parolanızı Giriniz:"
              required
            />
            <button id="grsbtn">Giriş Yap</button>
            <br />
            <div id="buttons">
              <button id="girisyap"><Link to="#" style={{textDecoration:'none',color:'black'}}>Giriş Yap</Link></button>
              <button id="kayit"><Link to="/register" style={{textDecoration:'none',color:'black'}}>Kayıt Ol</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
