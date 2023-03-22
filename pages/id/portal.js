import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/id/home.module.css'
import Social from '../../components/id/social'
import Scroll from '../../components/id/scroll'
import StatsCounter from '../../components/id/statsCounter'
import CompCards from '../../components/id/comCards'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
// import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    function videoplay() {
      setPlaying(true, () => {
        console.log('Welcome to ID portal')
      })
    }
    setTimeout(videoplay, 7)
  }, [])

  const [session, setSession] = useState({
    _id: '',
    token: '',
  })
  const [status, setStatus] = useState(false)
  // const { data: session, status } = useSession()
  useEffect(() => {
    session._id = localStorage.getItem('userid')
    session.token = localStorage.getItem('token')
    setStatus(localStorage.getItem('status'))
    // console.log(session)
    // console.log(status)
    
    if (session) {
      console.log('something', session)
      // return (
      //   <>
      //     Signed in as {session} <br />
      //     <button onClick={() => signOut()}>Sign out</button>
      //   </>
      // )
    } else {
      console.log('empty')
    }
  }, [session, status])

  return (
    <>
      <div className={styles.portal}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.line1}></div>
            <div className={styles.heading}>
              <div className={styles.welcome}>Welcome</div>
              <div className={styles.internship}>Internship Drive</div>
              {/* <div className={styles.quote}>
                “The pebbles of knowledge must be bonded together by the cement
                of experience.”
              </div> */}
              {status === 'authenticated' ? (
                <Link href="/id/profile">
                  <button className={styles.portalbtn}>My Profile</button>
                </Link>
              ) : (
                <Link href="https://www.ecellbphc.in/id/signUp">
                  <button
                    className={styles.dashbtn}
                  >
                    Login
                  </button>
                </Link>
              )}
              {/* <button className={styles.portalbtn}>Redirect to Portal</button> */}
            </div>
            <div className={styles.line2}></div>
          </div>
          <div className={styles.video}>
            <ReactPlayer
              // playing={playing}
              url="https://youtu.be/d7V9pdM7e58"
              width="100%"
              height="100%"
              controls={false}
            />
          </div>
        </div>
        <div>
          <Social />
          <Scroll />
          <div className={styles.AboutUs}>
            <div className={styles.AboutHeader}>About</div>
            <div className={styles.About}>
              “The pebbles of knowledge must be bonded together by the cement of
              experience.” With our Internship Drive, seize the opportunity to
              get hands-on industry experience in a plethora of sectors. Having
              successfully connected over 350 selects out of 1000+ applicants
              with various companies, the Internship Drive conducted as a part
              of Launchpad 2021 was a triumph. As always, we aim to connect
              skilled and enthusiastic interns with numerous companies and
              start-ups, on a larger scale than ever before! Participate in the
              fourth edition of Launchpad’s Internship Drive to get an exclusive
              chance to find your ideal internship.
            </div>
          </div>
          <div className={styles.stats}>
            <StatsCounter start={0} end={50} info="Startups" />
            <StatsCounter start={14000} end={30000} info="Stipend" />
            <StatsCounter start={50} end={100} info="Interns Converted" />
            <StatsCounter start={1500} end={3000} info="Applications" />
          </div>
          <div className={styles.Companies}>
            <div className={styles.CompanyHeader}>Past Companies</div>
            <div className={styles.CompanyCards}>
              <CompCards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
