// import { useState } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Home from '../components/Home'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import styles from '../styles/App.module.css'
import Link from 'next/link'

function App({posts}) {
  console.log(posts);
  return (
    <div className={styles.App}>
      <Nav/>
      <Link href="/"><Home posts={posts}/></Link>
      <Footer/>
    </div>
  )
}

export default App

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'));
  const postData = files.map(filename=>{
  const slug = filename.replace('.md',"");
  const contentInMeta = fs.readFileSync(path.join("posts",filename),'utf-8');
  const {data:metadata} = matter(contentInMeta);
    console.log(metadata);
    return {slug,metadata};
  })
  return{
    props : {
      posts:postData
    }
  }
}
