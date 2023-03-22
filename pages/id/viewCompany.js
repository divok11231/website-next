import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import CompanyCards from '../../components/id/companyCards'
import AppliedCards from '../../components/id/appliedCards'
import styles from '../../styles/id/viewcompany.module.css'
import { useEffect } from 'react'

function ViewCompany() {
  const [toggle, setToggle] = useState(1)
  const [randomString, setRandomString] = useState(uuidv4())

    const [status, setStatus] = useState('')
    const [session, setSession] = useState({
      _id: '',
      token: ''
    })
    const [email, setEmail] = useState('')

  const [paid, setPaid] = useState(false)

  useEffect(() => {
                setStatus(localStorage.getItem('status'))
                setSession({
                  _id: localStorage.getItem('userid'),
                  token: localStorage.getItem('token')
                })
                setEmail(localStorage.getItem('email'))

                const paid = axios.post(
                  'https://www.ecellbphc.in/api/auth/getUser',
                  { email: email }
                )
    setPaid(paid)
  },[])

  const handleClass = (toggle) => {
    if (toggle == 1) {
      return styles.cards
    } else if (toggle == 2) {
      return styles.cardsShift
    } else if (toggle == 3) {
      return styles.cardsBack
    }
  }
  const handleClass2 = (toggle) => {
    if (toggle == 1) {
      return styles.cards2
    } else if (toggle == 2) {
      return styles.cardsShift2
    } else if (toggle == 3) {
      return styles.cardsBack2
    }
  }

  const handlebtnClass1 = (toggle) => {
    if (toggle == 1 || toggle == 3) {
      return styles.leftSlide
    } else {
      return styles.null
    }
  }

  const handlebtnClass2 = (toggle) => {
    if (toggle == 2) {
      return styles.rightSlide
    } else {
      return styles.null
    }
  }

  const handleHead = (toggle) => {
    if (toggle == 1) {
      return styles.heading1def
    } else if (toggle == 3) {
      return styles.heading1
    } else {
      return styles.heading1shift
    }
  }

  const handleHead2 = (toggle) => {
    if (toggle == 2) {
      return styles.heading2
    } else {
      return styles.heading2shift
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <div className={handleHead(toggle)}>View Companies</div>
        <div className={handleHead2(toggle)}>Applied Companies</div>
      </div>
      <div className={styles.AllCards}>
        <div className={handleClass(toggle)}>
          <CompanyCards email={email} session={session} status={status} paid={paid} />
        </div>
        <div className={handleClass2(toggle)}>
          <AppliedCards
            randomString={randomString}
            email={email}
            session={session}
            status={status}
          />
        </div>
      </div>
      <div
        onClick={() => {
          setToggle(2)
          setRandomString(uuidv4())
        }}
        className={handlebtnClass1(toggle)}
      >
        Applied Companies
      </div>
      <div
        onClick={() => {
          setToggle(3)
        }}
        className={handlebtnClass2(toggle)}
      >
        View Companies
      </div>
    </div>
  )
}

export default ViewCompany
