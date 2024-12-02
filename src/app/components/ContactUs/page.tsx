import React from 'react'
import Link from 'next/link';
import styles from "./contact.module.css"
export default function ContactUs() {
    console.log("products page executed successfully");
    
  return (
    <div className={styles.contactpage}>
    <h1 className={styles.heading}>Contact Us</h1>
    <p>If you have any questions or concerns about your order, feel free to contact us using the form below or via our email/phone number. We're here to help!</p>
  
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  
    <div className={styles.supportinfo }>
      <h2 className={styles.subheading}>Customer Support</h2>
      <p className={styles.text}>Email: <a href="mailto:support@yourstore.com">support@yourstore.com</a></p>
      <p className={styles.text}>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      <p className={styles.text}>Support Hours: Monday to Friday, 9 AM - 5 PM</p>
    </div>
  
    <div className={styles.socialmedia}>
      <h2>Follow Us</h2>
      <Link href="https://facebook.com/yourstore" target="_blank" className={styles.link}>Facebook</Link>
      <Link href="https://instagram.com/yourstore" target="_blank" className={styles.link}>Instagram</Link>
      <Link href="https://twitter.com/yourstore" target="_blank" className={styles.link}>Twitter</Link>
    </div>
  
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <p><strong>Q: How long does shipping take?</strong></p>
      <p>A: Standard shipping typically takes 3-5 business days.</p>
      <p><strong>Q: How do I return an item?</strong></p>
      <p>A: You can return items within 30 days of receipt. Visit our Returns page for more details.</p>
    </div>
  </div>
  )
}



