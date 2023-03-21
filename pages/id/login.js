import Link from 'next/link'
import React, { useState } from 'react'
import SignIn from '../../components/id/signIn'
import styles from '../../styles/id/login.module.css'
import SignUp from '../../components/id/signUp'

function Login() {
  const [signUpClicked, setSignUpClicked] = useState(false)

  function handleClickSignIn() {
    setSignUpClicked(false)
  }

  function handleClickSignUp() {
    setSignUpClicked(true)
  }
  return (
    <>
      {/* <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.Header}>Internship Drive </div>
          <div className={styles.links}>
            <div
              className={signUpClicked ? styles.signInBtn : styles.signinoff}
              onClick={handleClickSignIn}
            >
              Sign In
            </div>

            <div
              className={signUpClicked ? styles.signUpBtn : styles.signupbtnoff}
              onClick={handleClickSignUp}
            >
              Sign Up
            </div>
          </div>
          {!signUpClicked ? <SignIn /> : <SignUp />}
        </div>
      </div> */}
    </>
  )
}

export default Login
