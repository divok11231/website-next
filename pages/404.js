import React from 'react'
import Link from 'next/link'
import styles from '../styles/404.module.css'
import Head from 'next/head'

const notFound = () => {
  return <>
    <Head>
      <title>E-Cell BPHC</title>
    </Head>
    <div className={styles.outer}>
      <h1 className={styles.h1}>Oops...</h1>

      <h2 className={styles.h2}>But we dont have anything here</h2>
      <h3 className={styles.h3}>
        Click here to return to{' '}
        <Link href="/" className={styles.a}>
          homepage
        </Link>
      </h3>
    </div>
  </>;
}

export default notFound
