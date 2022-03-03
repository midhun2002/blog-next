
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import styles from '../../styles/Post.module.css'
import Nav from '../../components/Nav.jsx'
function Post({post,frontmatter,content}) {
  return (
    <div className={styles.post}>
    <Nav toggle={1}/>
    <div className={styles.card}>
     <div className={styles.title}>{post}</div>
     <img className={styles.postimage} src={frontmatter.cover_image} alt="post_image"/>
     <div dangerouslySetInnerHTML={{__html: marked(content) }}></div>
    </div>
    </div>
  )
}
export default Post
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))  
  const paths = files.map((filename) => ({
    params: {
      post: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { post } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', post + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      post,
      content,
    },
  }
}
