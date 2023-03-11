import Navbarcss from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import pic1 from '../assets/images/mainlogo.png'
import pic2 from '../assets/images/e_logo.png'

export default function Navbar(props) {
  const [isHamOn, setIsHamOn] = useState(false)
  const handleClick = () => {
    setIsHamOn(!isHamOn)
  }
  const handleClickID = () => {
    setIsHamOn(!isHamOn)
    setrender('ID')
  }

  return (
    <>
      <div className={Navbarcss.navbar}>
        <div className={Navbarcss.logo}>
          <Link href="/">
            <a>
              <Image src={pic1} width={160} height={60} />
            </a>
          </Link>
        </div>
        <div className={Navbarcss.buttons}>
          <Link href="/IDform">
            <a className={Navbarcss.button}>Internship Drive</a>
          </Link>
          <Link href="/pitchersPilot">
            <a className={Navbarcss.button}>Pitcher&apos;s Pilot</a>
          </Link>
          <Link href="/CAform">
            <a className={Navbarcss.button}>CA Program</a>
          </Link>
          <a
            className={Navbarcss.button}
            target="_blank"
            rel="noopener noreferrer"
            href="https://join.slack.com/t/entrepreneurial-mind1/shared_invite/zt-ulz68kty-SF6tFkMYsxWaLiZkkksUgw"
          >
            Community
          </a>
          <Link href="/about">
            <a className={Navbarcss.button}>About us</a>
          </Link>
          {/* <Link href="/id/portal">
            <a
              onClick={() => {
                setrender('ID')
              }}
              className={Navbarcss.button}
            >
              Internship Drive
            </a>
          </Link> */}{' '}
          {/*<Link href="/welcome/signup">
            <a className={(Navbarcss.button, Navbarcss.rightmostbutton)}>
              Sign Up
            </a>
  </Link>*/}
        </div>
      </div>

      <div className={Navbarcss.topbar}>
        <div className={Navbarcss.mb_logo}>
          <Link href="/">
            <Image
              src={pic2}
              alt="ECell logo"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
        <div className={Navbarcss.ham} onClick={() => handleClick()}>
          <div className={isHamOn ? Navbarcss.ham1 : null}></div>
          <div className={isHamOn ? Navbarcss.ham2 : null}></div>
          <div className={isHamOn ? Navbarcss.ham3 : null}></div>
        </div>
      </div>

      <div className={isHamOn ? Navbarcss.mobilenav : Navbarcss.temp}>
        <div className={Navbarcss.ham} onClick={() => handleClick()}>
          <div className={isHamOn ? Navbarcss.ham1 : null}></div>
          <div className={isHamOn ? Navbarcss.ham2 : null}></div>
          <div className={isHamOn ? Navbarcss.ham3 : null}></div>
        </div>
        <div className={Navbarcss.mobilenav_logo}>
          <Link href="/">
            <a>
              <Image src={pic1} width={200} height={75} />
            </a>
          </Link>
        </div>
        <Link href="/IDform">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Internship Drive
          </a>
        </Link>
        <Link href="/pitchersPilot">
          <a onClick={() => handleClickID()} className={Navbarcss.mobilebtn}>
            Pitchers Pilot
          </a>
        </Link>
        <Link href="/CAform">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            CA form
          </a>
        </Link>
        <a
          onClick={() => handleClick()}
          className={Navbarcss.mobilebtn}
          target="_blank"
          rel="noopener noreferrer"
          href="https://join.slack.com/t/entrepreneurial-mind1/shared_invite/zt-tzumg4dy-ENN8qV~UDcVDU34CV~FEJA"
        >
          Community
        </a>

        <Link href="/about">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            About Us
          </a>
        </Link>

        {/* <Link href="/welcome/signup">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Sign Up
          </a>
</Link>*/}
      </div>
    </>
  )
}
