import React from 'react'
import { useState } from 'react'
import styles from '../../styles/signin/signup.module.css'

function signup() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()

    return (
        <div>
            <form>
                <div className={styles.input}>
                    <div className={styles.div}>Email Address</div>
                    <input placeholder="Email Address" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className={styles.inputbox} required />
                </div>
                <div className={styles.input}>
                    <div className={styles.div}>Create Password</div>
                    <input placeholder="Password" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className={styles.inputbox} required />
                </div>
                <div className={styles.input}>
                    <div className={styles.div}>Confirm Password</div>
                    <input placeholder="Password" type="password" name="password" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} className={styles.inputbox} required />
                </div>
                <div className={styles.input1}>
                    <button type="submit" className={styles.submit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default signup