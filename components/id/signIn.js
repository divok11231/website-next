import React, { useEffect, useState } from 'react'
import styles from '../../styles/id/login.module.css'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

function SignIn() {
  const router = useRouter()

  const [email, setEmail] = useState('aa@g.co')
  const [password, setPassword] = useState('admin')
  const [loginError, setLoginError] = useState('')

  // const { data: session, status } = useSession()

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

  const handleSubmit = (event) => {
    event.preventDefault()
    // event.stopPropagation()

    console.log('fn called')
    signIn(null, { callbackUrl: 'https://ecellbphc.in/id/profile' })

    signIn('credentials', {
      name: '',
      email,
      password,
      college: '',
      phoneNumber: '',
      callbackUrl: `${window.location.origin}/profile`,
      redirect: true
    })
      .then(function (result) {
        console.log('result', result)
        if (result.error !== null) {
          if (result.status === 401) {
            console.log('heeelooo1')
            setLoginError(
              'Your username/password combination was incorrect. Please try again'
            )
          } else {
            console.log('heeeloo2o')

            setLoginError(result.error)
          }
        } else {
          console.log('heeelooo3')
          router.push(result.url)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (status == 'authenticated') {
    return (
      <div>
        <h1>authenticated</h1>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <h1>{loginError}</h1>
          <input
            type="email"
            className={styles.inputField}
            name="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            className={styles.inputField}
            name="pass"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.butn}>
        <button
          className={styles.btn}
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          SIGN IN
        </button>
      </div>
      <div className={styles.forgot}>
        <Link href="#" className={styles.forgotPwd}>
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default SignIn
