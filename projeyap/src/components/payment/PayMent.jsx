import React, { Component } from "react";
import NavBar from "../nav/NavBar";
import "./payment.css";
import CategoryPageMan from "../category/categorypage";
import { Link, useLocation } from "react-router-dom";

const PayMent = () => {
  
  let {state} = useLocation();

  console.log(state);




  return (
    <>
      <NavBar />

      <div className="page">
        <div className="wall">
        <img
          src="https://paytr.com/wp-content/uploads/kapida-odeme.jpg"
          alt=""
        />
        </div>
        <div className="odeme">

          <form className="formum">
          <h1>Ödeme Yap - {state.price}$</h1>
            <input type="tel" placeholder="Kart Numarası" maxLength={16}/>
            <br />
            <div className="yan">
            <input id="cvv" type="password" placeholder="Cvv" maxLength={3}/>
            <input type="month" placeholder="Son Kullanma Tarihi" />
            </div>
            <br />
            <button className="odemebtn" onClick={()=>{
                alert("Başarılı bir şekilde ödeme yaptınız.")
            }}><Link href="/" style={{textDecoration:'none',color:'white'}}>Ödeme Yap</Link></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayMent;
