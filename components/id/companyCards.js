import React, { useEffect, useState } from 'react'
import styles from '../../styles/id/companyCards.module.css'
import Image from 'next/image'
import launchpad from '../../assets/Launchpad.png'
import { useSession } from 'next-auth/react'
import axios from 'axios'

function CompanyCards({email, session, status, paid}) {
  // const { data: session, status } = useSession()
  const [datas, setData] = useState([])
  useEffect(() => {
    async function get() {
      axios
        .get('https://backend-api-2022.onrender.com/api/company/getCompanies')
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
        .catch((err) => {
          alert(err)
        })
    }
    get()
  }, [])

  function applyNow(companyID) {
    if (status == 'authenticated') {
      axios
        .post(
          'https://backend-api-2022.onrender.com/api/applications/apply',
          {
            applicantID: session._id,
            companyID,
            footnotes: 'footnotes'
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + session.token
            }
          }
        )
        .then((res) => {
          if (res.data.status === 'ok') {
            alert('Applied Successfully')
          }

          // if (res.status(400).json(applicationLimitReached)) {
          //   return <p>Sorry , Application Limit Reached</p>
          // }
          // if (res.status(500).json(applyFailed)) {
          //   return <p>Sorry , Failed to Apply</p>
          // }
          // if (res.status(400).json(invalidApplication)) {
          //   return <p>Sorry , Invalid Application</p>
          // }
        })
        .catch((err) => {
          console.log(err)
          console.log(err.response.data)

          if (err.response.data.code === '403') {
            alert('Application Limit Reached')
          } else if (err.response.data.code === '406') {
            alert('Please complete the payment before you apply')
          } else if (err.response.data.code === '404') {
            alert('Please upload your resume before you apply')
          } else {
            alert("Couldn't apply, try again")
          }
        })
    }
  }

  console.log(datas)
  function Auth({ prop }) {
    if (status == 'authenticated') {
      return (
        <>
          <div className={styles.button}>{prop.statuss}</div>
        </>
      )
    } else return null
  }

  return (
    <>
      {datas.map((data) => {
        return (
          <div key={data._id}>
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
                  {paid ? (
                    <>
                      <div>
                        <button
                          className={styles.button}
                          onClick={(e) => e.preventDefault(applyNow(data._id))}
                          // onClick={(e)=>{alert('Application are temporary closed, the next window will begin shortly')}}
                        >
                          Apply Now
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
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

export default CompanyCards
