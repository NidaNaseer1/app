import React from 'react'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Navigation() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg bg-black " style={{height:30}}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="portfolio"> Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="latest post">Latest Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="archive">Archive</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="about the blog">About the Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="my account">My Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="my order">My Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="wishlist">Wishlist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="logout">Logout</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      </div>
  )
}