import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/id/navbarid.module.css'
import logout from '../../assets/power-off.png'
import Image from 'next/image'
import launchpad from '../../assets/Launchpad.png'
import { signOut } from 'next-auth/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { stat } from 'fs'

function Navbar({email, session, status}) {
  const [hamOn, setHamOn] = useState(true)
  const [paids, setPaid] = useState(false)

  const handleClick = () => {
    setHamOn(() => !hamOn)
  }

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  // const { data: session, status } = useSession()
  // const [status, setStatus] = useState('')
  // const [session, setSession] = useState({
  //   _id: '',
  //   token: ''
  // })
  // const [email, setEmail] = useState('')
  useEffect(() => {
    // setStatus(localStorage.getItem('status'))
    // setSession({ _id: localStorage.getItem('userid'), token: localStorage.getItem('token') })
    // setEmail(localStorage.getItem('email'))
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

  useEffect(() => {
    async function get() {
      axios
        .post(
          'https://backend-api-2022.onrender.com/api/payments/getPaymentStatus',
          {
            email: email
          }
        )
        .then((res) => {
          if (res.data.paid) {
            setPaid(true)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (status === 'authenticated' && email) {
      get()
    }
  }, [])

  const cards = [
    {
      id: 1,
      name: 'Dashboard',
      link: '/id/portal'
    },
    // {
    //   id: 2,
    //   name: 'Profile',
    //   link: '/id/profile'
    // },
    // {
    //   id: 3,
    //   name: 'Companies',
    //   link: '/id/viewCompany'
    // }
    // {
    //   id: 4,
    //   name: "Pay Now",
    //   link: "/id/"
    // }
  ]

  async function openRazorpay(e) {
    e.preventDefault()
    const res = await initializeRazorpay()

    if (email && session?._id && res) {
      axios
        .post(
          'https://backend-api-2022.onrender.com/api/payments/createOrder',
          {
            email: email,
            _id: session._id
          }
        )
        .then((res) => {
          console.log('res', res.data)
          if (res.data.id) {
            var options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
              amount: '26500', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: 'INR',
              name: 'ECell, BITS Pilani',
              description: 'Payment for Launchpad 2022',
              image:
                'https://www.ecellbphc.in/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fmainlogo.9c338b5ed23edcdf418f531e5ac4ab38.png&w=256&q=75',
              order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              // callback_url: 'https://ecellbphc.in/id/portal',
              // prefill: {
              //   name: 'Gaurav Kumar',
              //   email: 'gaurav.kumar@example.com',
              //   contact: '9999999999'
              // },
              notes: {
                address: 'Razorpay Corporate Office'
              },
              theme: {
                color: '#3399cc'
              }
            }
            var rzp1 = new Razorpay(options)
            rzp1.open()
          } else if (paids) {
            alert('already paid')
          } else if (res.data.status == 'paid') {
            alert("You've already paid")
          } else {
            alert('Something blew up')
          }
        })
        .catch((error) => {
          console.log
        })
    } else {
      alert('Login/Signup first')
    }
  }

  function PayNow() {
    if (status == 'authenticated') {
      return (
        <Link href="/id/paynow" legacyBehavior>
          <div
            className={hamOn ? styles.fadeout : styles.fadein}
            onClick={handleClick}
          >
            PayNow
          </div>
        </Link>
      );
    } else if (status == 'authenticated' && paids) {
      return (
        <>
          <div
            onClick={(e) => {
              e.preventDefault
              alert('You have already paid')
            }}
            className={hamOn ? styles.fadeout : styles.fadein}
          >
            Pay Now
          </div>
        </>
      )
    } else {
      return (
        <>
          <div
            onClick={(e) => {
              e.preventDefault
              alert('Login/Register first')
            }}
            className={hamOn ? styles.fadeout : styles.fadein}
          >
            Pay Now
          </div>
        </>
      )
    }
  }
  function Profile() {
    if (status == 'authenticated') {
      return (
        <Link href="/id/profile" legacyBehavior>
          <div
            onClick={handleClick}
            className={hamOn ? styles.fadeout : styles.fadein}
          >
            Profile
          </div>
        </Link>
      );
    } else return null
  }
  function Company() {
    if (status == 'authenticated') {
      return <>
        <Link href="/id/viewCompany" legacyBehavior>
          <div
            onClick={handleClick}
            className={hamOn ? styles.fadeout : styles.fadein}
          >
            Companies
          </div>
        </Link>
      </>;
    }
    return (
      <Link href="/id/portal" legacyBehavior>
        <div
          onClick={() => {
            alert('Register/LogIn First!')
            handleClick()
          }}
          className={hamOn ? styles.fadeout : styles.fadein}
        >
          Companies
        </div>
      </Link>
    );
  }

  return <>
    <div className={styles.ham} onClick={handleClick}>
      <div className={hamOn ? styles.line1 : styles.run1}>
        <div className={hamOn ? styles.innerline1 : styles.run1}></div>
      </div>
      <div className={hamOn ? styles.line2 : styles.run2}>
        <div className={hamOn ? styles.innerline2 : styles.run2}></div>
      </div>
      <div className={hamOn ? styles.line3 : styles.run3}>
        <div className={hamOn ? styles.innerline3 : styles.run3}></div>
      </div>
      <div className={hamOn ? styles.backcross1 : styles.runIn1}></div>
      <div className={hamOn ? styles.backcross2 : styles.runIn2}></div>
    </div>

    <div className={hamOn ? styles.up : styles.down}>
      <div className={hamOn ? styles.none : styles.innerdown}>
        {cards.map((data) => {
          return (
            <div key={data.id}>
              <Link href={data.link} legacyBehavior>
                <div
                  onClick={handleClick}
                  className={hamOn ? styles.fadeout : styles.fadein}
                >
                  {data.name}
                </div>
              </Link>
            </div>
          );
        })}
        <Company />
        <Profile hook={openRazorpay} />
        {/* {!paids ? (
          <div
            onClick={openRazorpay}
            className={hamOn ? styles.fadeout : styles.fadei~n}
          >
            Pay Now
          </div>
        ) : (
          <Link href="/id/success">
            <div
              onClick={handleClick}
              className={hamOn ? styles.fadeout : styles.fadein}
            >
              Pay Now
            </div>
          </Link>
        )} */}
        {/* <PayNow /> */}
      </div>
      <div
        className={hamOn ? styles.logout_off : styles.logout_on}
        onClick={(e) => {
          e.preventDefault()
          // signOut({ callbackUrl: 'https://ecellbphc.in/id/portal' })
          localStorage.clear()
          window.location.href = 'http://localhost:3000/id/portal'
        }}
      >
        Log Out
      </div>
      <div className={hamOn ? styles.launchpad_off : styles.launchpad_on}>
        <Image src={launchpad} alt="logo" />
      </div>
    </div>
  </>;
}

export default Navbar
