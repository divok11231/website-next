import React, { useState } from 'react'
import styles from '../../styles/suitup/round2.module.css'
import Link from 'next/link'
import { data } from 'remark'
import axios from 'axios'

function Round2() {
    const [data, setData] = useState({
        team:'',
        first: '',
        sec: '',
        third: '',
    })
    const [recieved, setRecieved] = useState([])


    // console.log(output)
    const [display, setDisplay] = useState(true)
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const [sent, setSent] = useState(true)
    const handleSubmit = async(e) => {
        e.preventDefault();
        setDisplay(false)
        console.log(data)
            fetch(
              'https://sheet.best/api/sheets/b8490157-ff31-4f47-bf54-238587a589ec'
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                let newlist = data.map(function (obj) {
                  return {
                    first: obj.first,
                    sec: obj.sec,
                    team: obj.team,
                    third: obj.third
                  }
                })
                console.log(newlist)
                for (var i = 0; i < newlist.length; i++) {
                  if (newlist[i].team == 'hero') {
                    console.log('recieved')
                  }
                }
              })
              .catch((error) => {
                console.error(error)
              })
        axios
          .post(
            'https://sheet.best/api/sheets/4ce40a84-0dd6-4a49-b315-2bcb5d137d9d',
            data
          )
          .then((res) => {
            // if (res) {
            //   setSent(false)
            // } else {
            //   setSent(true)
            // }
            console.log(res)
          })

    }
  return (
      <>
          {display ? (
              
              <div className={styles.main}>
              <div className={styles.header}>Round 2 - Target Customers </div>
        {/* <div className={styles.all}>
          <Link href="https://www.npmjs.com/package/tabletop">all Scores for round 1</Link>
              </div> */}
              <div className={styles.Teamcode}>
                <div className={styles.team}>Team Code</div>
                  <input className={styles.input} name="team" value={data.team} onChange={handlechange} />
              </div>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.city}>1 :</div>
            <input
              className={styles.city1}
              name="first"
              value={data.first}
              placeholder="Preference City"
              onChange={(e) => { handlechange(e) }}
              />
          </div>
          <div className={styles.row}>
            <div className={styles.city}>2 :</div>
            <input
                          className={styles.city1}
                          name="sec"
                          value={data.sec}
                          placeholder="Preference City"
                          onChange={(e) => { handlechange(e) }}
                          />
          </div>
          <div className={styles.row}>
            <div className={styles.city}>3 :</div>
            <input
                          className={styles.city1}
                          name="third"
                          value={data.third}
                          placeholder="Preference City"
                          onChange={(e) => { handlechange(e) }}
                          />
          </div>
              </div>
              <div className={styles.submitBtn} onClick={handleSubmit}> Submit</div>
      </div>
          ) : (
                  <div className={styles.min}>
                      {sent ? (
                          <>
                              <div className={styles.approve}>Your Response has been recorded</div>
                              {/* <div className={styles.link}><Link href="/suitUP"> Next Round</Link></div> */}
                      </>) : (<>nahh bitch</>)}
                  </div>
                          )}
    </>
  )
}

export default Round2