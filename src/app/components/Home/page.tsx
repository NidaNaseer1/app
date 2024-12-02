import React from 'react';
import Link from "next/link";
import logo from '../images/cartimage.jpg'
import Image from 'next/image';
export default function Header() {
  return (
    <div style={{ backgroundColor: 'black', top: 0, zIndex: 0 }}>
      <nav className="navbar navbar-expand-lg bg-black-tertiary" style={{ top: 0,zIndex: 5 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            <img src="https://yt3.googleusercontent.com/ytc/AIdro_l5Fk53ctKbwj6fgSHCe02y_T70rYqm7kn9qD5d6TQKIA=s900-c-k-c0x00ffffff-no-rj" height={50} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginLeft: 20 }}>
                <Link href={"/"} className="nav-link active" style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: 20 }}>
                <Link href={"/components/productlist"} className="nav-link" style={{ marginLeft: 20, color: "white" }}>Products</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{ width: 800, marginRight: 0 }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" style={{ color: 'white', backgroundColor: 'black', border: "black" }}>Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href={"/components/ContactUs"} className="nav-link active" style={{ marginLeft: 30, color: "white" }}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link href={"/components/AboutUs"} className="nav-link" style={{ marginLeft: 30, color: "white" }}>About Us</Link>
              </li>
              <Image src={logo} alt="" height={40} width={50} style={{marginLeft:10}} />
                <li className="nav-item">
                
                  <Link href={"/components/Cart"} className="nav-link" style={{  color: "white" }}>Cart</Link>
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

