import Link from 'next/link'
import React from 'react'
import styles from '../../styles/blog/blog_tiles.module.css'
import Date from './date'
function Blog_Tiles({ allPostsData }) {
  return <>
    {allPostsData.map((post) => (
      <Link href={`/blog/${post.id}`} key={post.id} legacyBehavior>
        <div className={styles.tiles}>
          <div className={styles.heading}>
            <h1>{post.title}</h1>
          </div>
          <div className={styles.date}>
            <Date dateString={post.date} />
          </div>
        </div>
      </Link>
    ))}
  </>;
}

export default Blog_Tiles
