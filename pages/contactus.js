import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function contact() {
  return (
    <>
      <Head>
        <title>Contact Us| E-Cell BPHC</title>
      </Head>
      <div className={styles.outer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <div className={styles.para}>
          <p>
            Email us at:
            <a href="mailto:ecell@hyderabad.bits-pilani.ac.in">
              ecell@hyderabad.bits-pilani.ac.in
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default contact
