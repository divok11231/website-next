import React from 'react'
import styles from '../../styles/GR/QA.module.css'
import Image from 'next/image'
import Qm from '../../assets/images/Qm.png'
export default function QA({ question, answer, classy, questionid }) {
  return (
    <>
      <div className={styles.qa}>
        <div className={styles.accordian}>
          <div classname={styles.img}>
            {/* <Image className={styles.icon} src={Qm} width={30} height={25} /> */}
          </div>
          <div className={styles.h}> {question} </div>
        </div>
        <div className={styles.panel}>
          <p className={styles[`${classy}`]}>{answer}</p>
        </div>
      </div>
    </>
  )
}
