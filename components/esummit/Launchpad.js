import styles from '../../styles/esummit/launchpad.module.css'
import Link from 'next/link'
import Carousel from './carousel'
import Social from '../homepage/socialmedianew'
import { carouselData } from './carouselData'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function Launchpad({ setrender }) {
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(status)
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

  const handleclick = (e) => {
    //setrender('IDP')
    e.preventDefault()
    signIn(null, {
      callbackUrl: '/id/profile'
    })
  }
  return (
    <div className={styles.outer_container}>
      <div className={styles.container1}>
        <div className={styles.headings}>
          <div className={styles.heading1}>LAUNCHPAD</div>
          <div className={styles.heading2}>Ready for lift off?</div>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <Carousel slides={carouselData} />
          </div>
        </div>
      </div>
      {status === 'authenticated' ? (
        <Link href="/id/profile" legacyBehavior>
          <button className={styles.buy_button}>BUY TICKETS</button>
        </Link>
      ) : (
        <button
          className={styles.buy_button}
          onClick={(e) => {
            e.preventDefault()
            signIn(null, {
              callbackUrl: '/id/profile'
            })
          }}
        >
          REGISTER HERE
        </button>
      )}
    </div>
  );
}
