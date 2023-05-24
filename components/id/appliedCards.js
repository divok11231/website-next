import React, { useEffect, useState } from 'react'
import styles from '../../styles/id/appliedCards.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import axios from 'axios'

function AppliedCards({ randomString, email , session, status}) {
  // const { data: session, status } = useSession()
  const [datas, setData] = useState([])
  useEffect(() => {
    console.log('use effect called')
    function get() {
      axios
        .get(
          'https://backend-api-2022.onrender.com/api/applications/getAppliedCompaniesUser',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + session.token
            }
          }
        )
        .then((res) => {
          console.log(res.data.data)
          setData(res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    if (status == 'authenticated') {
      get()
    }
  }, [status, randomString])

  return (
    <>
      {datas.map((data, index) => {
        return (
          <div key={index}>
            <div className={styles.cardContainer}>
              <div className={styles.image}>
                {
                  <Image
                    src={`/assets/${data.logoURL}`}
                    width={160}
                    height={90}
                  />
                }
              </div>
              <div className={styles.props}>
                <div className={styles.propitem}>
                  <a className={styles.companyName}>{data.name}</a>
                </div>
                <div className={styles.propitem}>
                  <a className={styles.companyStipend} href={data.websiteLink}>
                    {data.websiteLink}
                  </a>
                </div>
                <div className={styles.headprop}>Roles</div>
                <div className={styles.propitem1}>
                  {data.roles.map((data) => {
                    return (
                      <a className={styles.Eligibilty} key={data._id}>
                        {data}
                      </a>
                    )
                  })}
                </div>
                <div className={styles.propitem}>
                  <a
                    className={styles.Eligibilty}
                    href={data.companyDesc}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Job Description
                  </a>
                  {/* <div >
                    <button className={styles.button}
                      onClick={(e) => e.preventDefault(applyNow(data._id))}
                    >
                      Apply Now
                    </button>
                  </div> */}
                </div>
              </div>
              {/* <Auth prop={data} /> */}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default AppliedCards
