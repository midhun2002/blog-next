import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './Header.jsx'

function Home({posts}) {
  return (
    <div className={styles.blogcards}>   
        {
          posts.map((post,index)=>{
            return(
            <Link href={`/blogs/${post.slug}`}>
              <Header post={post} index={index}/>
            </Link>
            )
          })         
        } 
      </div>
  )
}

export default Home

