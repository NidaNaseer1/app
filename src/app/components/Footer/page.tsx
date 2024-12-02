import React from 'react'
import style from "./footer.module.css"
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div>
      <div  className={style.footer} >
      Back to top
      </div>
      <div className= {style.footer1}>
    <div className={style.col}>
    <div >
      <h6>Get to Know <br></br>Us</h6>
     <Link href={"/About Us"} style={{color:"white", textDecoration:"none"}}>About Us</Link> 
     <Link href={"/Careers"} style={{color:"white", textDecoration:"none"}}><div>Careers</div></Link> 
     <Link href={"/Press Releases"} style={{color:"white", textDecoration:"none"}}><div>Press Releases</div></Link> 
     <Link href={"/Amazon Science"} style={{color:"white", textDecoration:"none"}}><div> Amazon Science </div></Link> 
      </div>
    </div>
    <div className={style.col}>
    <div >
      <h6 >Connect with <br></br>Us</h6>
      <Link href={"/Facebook"} style={{color:"white", textDecoration:"none"}}><div>Facebook</div></Link> 
      <Link href={"/Twitter"} style={{color:"white", textDecoration:"none"}}><div>Twitter</div></Link> 
      <Link href={"/Instaragam"} style={{color:"white", textDecoration:"none"}}> <div>Instagram</div></Link> 
      </div>
    </div>
    <div className={style.col}>
    <div >
      <h6>	
      Make Money with Us</h6>
      <div>Sell on Amazon</div>
      <div>Sell under Amazon<br></br> Accelerator</div>
      <div>Protect and Build Your Brand</div>
      <div>Amazon Global Selling </div>
      <div>Supply to Amazon</div>
      <div>Become an Affiliate</div>
      <div>Fulfilment by Amazon</div>
      <div>Advertise Your Products</div>
      <div>Amazon Pay on Merchants</div>
      </div>
    </div>
    <div className={style.col}>
    <div >
      <h6>Let Us Help You</h6>
      <div>Your Account</div>
      <div>Returns Centre</div>
      <div>Recalls and Product Safety <br></br>Alerts</div>
      <div>100% Purchase Protection </div>
      <div>Amazon App Download</div>
      <div>Help </div>
      </div>
    </div>
  </div>

      </div>
     
    </>
  )
}
