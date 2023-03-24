import React, { useEffect, useState } from 'react'
import styles from '../styles/id/id.module.css'
import axios from 'axios'

function CAform() {
  const [valid, setvalid] = useState('')
  const [tic, setTic] = useState('6409a521a0e08dd49a39a094')
  const [code, setCode] = useState('NULL')
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    year: '',
    city: '',
    code: 'NULL'
  })

  function loadRazorpay() {
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

  async function handleBuy() {
    if (data.code === '') {
      setData({ ...data, ['code']: 'NULL' })
    }
    const userId = data.email
    const ticketId = tic
    console.log(ticketId, '999')
    const res = await loadRazorpay()
    if (!res) {
      alert('Razorpay SDK failed to load')
      return
    }
    console.log(userId)
    const order = await fetch(
      `https://backend-api-2022.onrender.com/api/tickets/getOrderId/${ticketId}`,
      {
        method: 'GET'
      }
    ).then((t) => t.json())
    const options = {
      key: 'rzp_live_FWRQdHoaQSe74v',
      amount: order.amount.toString(),
      currency: 'INR',
      name: 'E-Cell BITS Hyderabad',
      description: 'Internship Drive Transaction',
      order_id: order.id,
      callback_url: `https://backend-api-2022.onrender.com/id/buy/${
        data.email
      }/${order.id}/${data.name}/${data.contact}/${data.year}/${data.city}/${
        data.college
      }/${data.code == '' ? 'NULL' : data.code}`,
      theme: {
        color: '#150050'
      }
    }
    // alert('data submitted successfully!')
    const rzp1 = new window.Razorpay(options)
    rzp1.open()
    rzp1.on('payment.failed', function (response) {
      console.log(response.error.code)
      console.log(response.error.description)
      console.log(response.error.source)
      console.log(response.error.step)
      console.log(response.error.reason)
      console.log(response.error.metadata.order_id)
      console.log(response.error.metadata.payment_id)
    })
    // handleSubmit()
  }

  // async function makeid() {
  //   // let result = "";
  //   let num = 23
  //   let ans = false
  //   let codee = ''
  //   while (!ans) {
  //     num += 1
  //     codee = data.name + num.toString()
  //     await axios
  //       .post('https://backend-api-2022.onrender.com/ca/checkCode', {
  //         num: codee
  //       })
  //         .then((res) => {
  //           console.log(codee)
  //         if (res.data.find) {
  //           console.log(res.data)
  //           ans = true
  //           setData({ ...data, code: codee })
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  //   // const characters =
  //   //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   // const charactersLength = characters.length;
  //   // let counter = 0;
  //   // while (counter < length) {
  //   //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   //   counter += 1;
  //   // }
  // }

  // useEffect(()=>{
  //   setCode(makeid);
  //   setData({...data, code: code})
  // },[])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const handleSubmit = async () => {
    console.log(data)
    const res = await axios
      .post('https://backend-api-2022.onrender.com/id/createID', {
        name: data.name,
        email: data.email,
        contact: data.contact,
        year: data.year,
        city: data.city,
        college: data.college
      })
      .then((res) => {
        console.log(res, 'ahuahuahu')
        alert('data has been submitted successfully')
        //         window.location('https://www.ecellbphc.in/')
      })
      .catch((err) => {
        console.log('kata tera lode')
      })
  }

  // const handleCode = () => {
  //   if (
  //     data.name == '' ||
  //     data.email == '' ||
  //     data.contact == '' ||
  //     data.city == '' ||
  //     data.college == '' ||
  //     data.year == ''
  //   ) {
  //     alert('Please Fill all the details first')
  //   } else {
  //     // makeid()
  //     setget(true)
  //   }
  // }

  return (
    <div className={styles.container}>
      <div className={styles.redirect}></div>
      <h1 className={styles.heading}>Internship Drive</h1>
      <h3 className={styles.note}>
        {/* Note : The Registrations have closed. If you have already registered CLICK{' '} */}
        Note : If you have already paid for Executive Pass / Internship Drive, click{''}
        <u>
          <a href="https://www.ecellbphc.in/id/portal">HERE</a>
        </u>{' '}
        to Sign Up/ Sign In on the ID Portal
      </h3>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={data.name}
              className={styles.input}
              placeholder="Your Name here"
            />
          </div>
          <div className={styles.column}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              onChange={handleChange}
              className={styles.input}
              name="email"
              value={data.email}
              placeholder="Your Email here"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label} f>
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={data.contact}
              onChange={handleChange}
              className={styles.input}
              placeholder="Your contact number here"
            />
          </div>
          <div className={styles.column}>
            <label className={styles.label}>College Name</label>
            <input
              type="text"
              className={styles.input}
              name="college"
              value={data.college}
              onChange={handleChange}
              placeholder="Your college name here"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>City </label>
            <input
              className={styles.textarea}
              placeholder="City"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
          <div className={styles.column}>
            <label className={styles.label}>Year of Graduation</label>
            <input
              type="text"
              className={styles.input}
              onChange={handleChange}
              name="year"
              value={data.year}
              placeholder="Year of Graduation"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>Referal Code</label>
            <input
              className={styles.input}
              placeholder="Code"
              name="code"
              value={data.code}
              onChange={handleChange}
            />
          </div>
        </div>
        {/*<div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label}>Coupon Code :</label>
            <label className={styles.label2}>{valid}</label>
            <input
              className={styles.textarea}
              placeholder="Code"
              name="code"
              value={code}
              onChange={(e) => {
                setvalid('Invalid Code')
                setTic('6409a521a0e08dd49a39a094')
                setCode(e.target.value)
              }}
            />
          </div>
          <div className={styles.column}>
            <div
              className={styles.button2}
              onClick={() => {
                if (code == 'BITSCVR') {
                  setTic('640c31f90b8f24b76a327157')
                  setvalid('Valid')
                } else if (code != 'BITSCVR') {
                  setTic('6409a521a0e08dd49a39a094')
                  setvalid('Invalid code')
                }
              }}
            >
              Verify Code
            </div>
          </div>
        </div> */}
        {/* <div className={styles.row}>
          <div className={styles.column}>
            This is Your code :{' '}
            {getCode ? (
                          <>{data.code == '' ? (<>loading...</>) : (<>{data.code}</>)}</>
            ) : (
              <>
                <div className={styles.get}onClick={handleCode}>GET CODE</div>
              </>
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label} >
              How did you learn about this event
            </label>
            <input
              className={styles.textarea}
              name="how"
              value={data.how}
              onChange={handleChange}
              placeholder="how"
            />
          </div>
        </div> */}

        <div className={ styles.button } onClick={ handleBuy }>
          Pay & Register
        </div>

        {/* <div className={styles.button} onClick={() => {
          alert('Registrations for Internship Drive are closed, see you next year!!')
        }}>
          Registrations Closed
        </div> */}
      </form>
    </div>
  )
}

export default CAform
