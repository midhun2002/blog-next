// import React from 'react'
// import logo from '../logo.svg';
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import img from 'next/image'

function Nav({toggle}) {
  return (
    <div className={toggle===1 ? styles.Nav1 : styles.Nav}>
        <div className={styles.myDetails}>
            <img src="/FB_pic.jpg/"className={styles.myphoto}  alt="Avatar"/>
            <div className={styles.myname}>Midhun Reddy</div>
        </div>
        <div className={styles.links}>
            <Link href="/"  passHref><button className={`${styles.link} ${styles.home}`}>BLOGS</button></Link>
            <Link href="/about"  passHref><button className={`${styles.link} ${styles.about}`}>ABOUT</button></Link>
            <Link href="/contact"  passHref><button className={`${styles.link} ${styles.contact}`}>CONTACT ME</button></Link>           
        </div>
        { toggle==undefined && <div className={styles.Searchbar}>
         <input type="text" className={styles.searchbar} placeholder="Search articles from this blog..."></input>
         {/* <SearchIcon/>*/}
        </div>}
    </div>
  )
}

export default Nav