import React from 'react'
import styles from '../../styles/id/paynow.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useSession } from 'next-auth/react'

function Paynow() {
  const cs = []
  for (let csnum = 1; csnum <= 30; csnum++) {
    if (csnum < 10) {
      cs[csnum] = 'CA00' + csnum
    } else {
      cs[csnum] = 'CA0' + csnum
    }
  }

  const [paids, setPaid] = useState(false)
  const [bool, setbool] = useState('hi')

  const [btn, setBtn] = useState(true)
  const [valid, setValid] = useState(false)

  const [coupon, setCoupon] = useState('')
  const [text, setText] = useState('Enter Coupon Code')
  const [cost, setCost] = useState(265)

    const [status, setStatus] = useState('')
    const [session, setSession] = useState({
      _id: '',
      token: ''
    })
    const [email, setEmail] = useState('')

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
  useEffect(() => {
            // setStatus(localStorage.getItem('status'))
            // setSession({
            //   _id: localStorage.getItem('userid'),
            //   token: localStorage.getItem('token')
            // })
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
    }
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
            _id: session._id,
            cost,
            coupon
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

  // useEffect(() => {
  //   for (let csnum = 1; csnum <= 30; csnum++) {
  //     if (csnum < 10) {
  //       cs[csnum] = 'CA00' + csnum
  //     } else {
  //       cs[csnum] = 'CA0' + csnum
  //     }
  //   }
  // }, [])

  function handleCouponCode(e) {
    let check = false
    for (let i = 1; i <= 30; i++) {
      if (cs[i] === coupon) {
        check = true
        break
      }
    }
    // setCoupon(e.target.value)
    if (coupon == '') {
      setCost(265)
      setBtn(true)
      if (valid != false) {
        setValid(false)
      }
    } else if (coupon === 'COIGN') {
      setCost(100)
      setBtn(false)
      if (valid != false) {
        setValid(false)
      }
    } else if (coupon === 'BITSIAN') {
      setCost(179)
      setBtn(false)
      if (valid != false) {
        setValid(false)
      }
    } else if (check) {
      setCost(229)
      setBtn(false)
      if (valid == true) {
        setValid(false)
      }
    } else {
      setCost(265)
      setBtn(false)
      setValid(true)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>Pay Here</div>
          <div className={styles.coupon}>
            <div className={styles.Amount}>Amount Payable : {cost}</div>
            <div className={styles.couponHeader}>Coupon code:</div>
            <input
              className={styles.inputcoupon}
              name="coupon"
              type="text"
              value={coupon}
              onChange={(e) => {
                setCoupon(e.target.value)
                setText('Apply Coupon')
                setCost(265)
                setBtn(true)
              }}
            ></input>
            <div
              className={btn ? styles.CheckCoupon : styles.none}
              onClick={(e) => {
                handleCouponCode(e)
              }}
            >
              {text}
            </div>
            <div className={valid == true ? styles.howerror : styles.none}>
              *Please enter a valid coupon code*
            </div>
            <div
              className={styles.payment}
              onClick={(e) => {
                openRazorpay(e)
              }}
            >
              Pay Now
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
        <div style={{ fontSize: '1.5em'}}> Registrations have closed !!</div>
      </div> */}
    </>
  )
}
export default Paynow
