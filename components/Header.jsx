import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import img from 'next/image'
function Header({post,index}) {
  const {slug,metadata : {title,date,excerpt,readtime,tags,cover_image}} = post; 
  return (
    <div className={styles.card}>

        <img src={cover_image} alt="Avatar" className={styles.blogimage}/>

        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.tags}>
            {
                tags.map((tag,index)=><button key={index} className={styles.tagbutton}>{tag}</button>)
            }           
            </div>
            <div className={styles.excerpt}>{excerpt}</div>
            <Link  href={`/posts/${slug}`}  passHref><button className={styles.readmore}>Read More</button></Link>
        </div>
    </div>
  )
}

export default Header;