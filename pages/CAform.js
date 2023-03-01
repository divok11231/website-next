import React, { useEffect, useState } from 'react'
import styles from '../styles/CA/capage.module.css'
import axios from 'axios'

function CAform() {
  const [getCode, setget] = useState(false)
  const [code, setCode] = useState('')
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    year: '',
    city: '',
    how: '',
    code: ''
  })

  async function makeid() {
    // let result = "";
    let num = 23
    let ans = false
    let codee = ''
    while (!ans) {
      num += 1
      codee = data.name + num.toString()
      await axios
        .post('https://backend-api-2022.onrender.com/ca/checkCode', {
          num: codee
        })
          .then((res) => {
            console.log(codee)
          if (res.data.find) {
            console.log(res.data)
            ans = true
            setData({ ...data, code: codee })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // const characters =
    //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // const charactersLength = characters.length;
    // let counter = 0;
    // while (counter < length) {
    //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
    //   counter += 1;
    // }
  }

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
      .post('https://backend-api-2022.onrender.com/ca/createCA', {
        name: data.name,
        email: data.email,
        contact: data.contact,
        year: data.year,
        how: data.how,
        code: data.code,
        city: data.city,
        college: data.college
      })
      .then((res) => {
        console.log(res, 'ahuahuahu')
        // window.location('https://www.ecellbphc.in/')
      })
      .catch((err) => {
        console.log("kata tera lode")
      })
  }

  const handleCode = () => {
    if (
      data.name == '' ||
      data.email == '' ||
      data.contact == '' ||
      data.city == '' ||
      data.college == '' ||
      data.year == ''
    ) {
      alert('Please Fill all the details first')
    } else {
      makeid()
      setget(true)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Campus Ambassador</h1>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label} for="name">
              Name
            </label>
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
            <label className={styles.label} for="email">
              Email
            </label>
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
            <label className={styles.label} for="contact">
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
            <label className={styles.label} for="collegeName">
              College Name
            </label>
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
            <label className={styles.label} for="City">
              City{' '}
            </label>
            <input
              className={styles.textarea}
              placeholder="City"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>
          <div className={styles.column}>
            <label className={styles.label} for="Year of Graduation">
              Year of Graduation
            </label>
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
            This is Your code :{' '}
            {getCode ? (
              <>{data.code}</>
            ) : (
              <>
                <div className={styles.get}onClick={handleCode}>GET CODE</div>
              </>
            )}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <label className={styles.label} for="how">
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
        </div>
        <div className={styles.button} onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>
  )
}

export default CAform
