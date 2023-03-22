import React, { useState } from 'react'
import styles from '../../styles/id/login.module.css'
import { useRouter } from 'next/router'
useRouter
const SignUp = () => {
    const [data, setData] = useState({
        email: '',
        name: '',
        password: '',
        college: '',
        year: '',
        contact: '',
        city: ''
    })

    const router = useRouter()

    async function handleSubmit() {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        await fetch('https://backend-api-2022.onrender.com/api/auth/register', options).then(res => res.json()).then((data) => {
            if(data) router.push('https://www.ecellbphc.in/id/signIn')
        })
    }

      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
      }
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.header}>Internship Drive</div>
        <div className={styles.subheader}>Sign Up</div>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <input
              type="email"
              className={styles.inputField}
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input}>
            <input
              type="password"
              className={styles.inputField}
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className={styles.butn} onClick={handleSubmit}>
            {' '}

            <button className={styles.Sbtn}>SIGN UP</button>
          </div>
          <div className={styles.note}>Already been here? Click <u><a href="https://www.ecellbphc.in/id/signIn">here</a></u> to Sign In.</div>
        </div>
      </div>
    </>
  )
}

export default SignUp