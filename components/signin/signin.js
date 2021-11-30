import React from 'react'
import { useState } from 'react'
import styles from '../../styles/signin/signin.module.css'

function signin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <div>
            <form>
                <div className={styles.input}>
                    <div className={styles.div}>Email Address</div>
                    <input placeholder="Email Address" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className={styles.inputbox} required />
                </div>
                <div className={styles.input}>
                    <div className={styles.div}>Password</div>
                    <input placeholder="Password" type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className={styles.inputbox} required />
                </div>
                <div className={styles.button}>
                    <button type="submit" className={styles.submit}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default signin
