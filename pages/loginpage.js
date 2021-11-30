import React from 'react'
import Signin from '../components/signin/signin'
import Signup from '../components/signup/signup'
import styles from '../styles/signin/login.module.css'
import { useState } from 'react'


function loginpage() {
    const [value, setValue] = useState(1)
    return (
        <div>
            <div className={styles.form}>
                <div className={styles.title}>
                    <div onClick={()=>{setValue(1)}} className={styles.choice1}>
                        Login
                    </div>
                    <div onClick={()=>{setValue(2)}} className={styles.choice2}>
                        Sign-Up
                    </div>
                </div>
                <div className={styles.data}>
                    {value==1 ? (
                        <>
                           <Signin />
                        </>
                    ) : value==2 ? (
                        <>
                            <Signup />
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default loginpage
