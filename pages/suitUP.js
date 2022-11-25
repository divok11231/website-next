import React, { useState } from 'react'
import styles from '../styles/suitup/suitupMain.module.css'
import Roundboxes from '../components/suitUp/round1'
import Round2 from '../components/suitUp/round2'
import Round3a from '../components/suitUp/round3'
import Round3b from '../components/suitUp/round3b'
import Round5 from '../components/suitUp/round5'

function SuitUP() {
    const [page, setPage] = useState(true)
    const [code, setCode] = useState()

    const handleChange = (e) => {
        e.preventDefault();
        setCode(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        setPage(false)
    }
    function returnComponent() {
        if (code == 'S1') {
            return (<Roundboxes />)
        }
        else if (code == 'A2') {
            return (<Round2 />)
        }
        else if (code == 'B3a') { return (<Round3a />) }
        else if (code == 'F3b') { return (<Round3b />) }
        else if (code == 'J5') {return (<Round5 />)
        } else {
            setPage(true)
    }
    }
  return (
    <>
      <div className={styles.mainPage}>
              {page ? (<>
                  <div className={styles.main}>
                      <div className={styles.mainhead}>Welcome to Suit Up</div>
                      <div className={styles.header}>Enter Code </div>
                      <input className={styles.input} name="code" value={code} onChange={handleChange} />
                      <div className={styles.submit} onClick={handleClick}>Fetch Form</div>
              </div>
              </>
              ) : (<>
                    {returnComponent()}  
                  </>)}
      </div>
    </>
  )
}

export default SuitUP