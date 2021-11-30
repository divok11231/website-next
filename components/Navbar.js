import Navbarcss from "../styles/Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import pic1 from "../assets/images/mainlogo.png";
import pic2 from "../assets/images/e_logo.png";

export default function Navbar() {
  const [isHamOn, setIsHamOn] = useState(false);
  const handleClick = () => {
    setIsHamOn(!isHamOn);
  };
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
          <Link href="/esummit">
            <a className={Navbarcss.button}>Esummit</a>
          </Link>
          <a
            className={Navbarcss.button}
            target="_blank"
            rel="noopener noreferrer"
            href="https://join.slack.com/t/entrepreneurial-mind1/shared_invite/zt-ulz68kty-SF6tFkMYsxWaLiZkkksUgw"
          >
            Community
          </a>
          <Link href="/blog">
            <a className={Navbarcss.button}>Blog</a>
          </Link>
          <Link href="/about">
            <a className={Navbarcss.button}>About us</a>
          </Link>
          <Link href="/commingsoon">
            <a className={Navbarcss.button}>Internship Drive</a>
          </Link>
          <Link href="/loginpage">
          <a className={Navbarcss.button}>Login</a>
          </Link>
          {/*<Link href="/welcome/signup">
            <a className={(Navbarcss.button, Navbarcss.rightmostbutton)}>
              Sign Up
            </a>
  </Link>*/}
        </div>
      </div>

      <div className={Navbarcss.topbar}>
        <div className={Navbarcss.mb_logo}>
          <Link href="/"><Image src={pic2} alt="ECell logo"  layout="fill" objectFit="cover" /></Link>
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
        <Link href="/esummit">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Esummit
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
        <Link href="/blog">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Blog
          </a>
        </Link>
        <Link href="/about">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            About Us
          </a>
        </Link>
        <Link href="/commingsoon">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Internship Drive
          </a>
        </Link>
        <Link href="/loginpage">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Login
          </a>
        </Link>
        {/* <Link href="/welcome/signup">
          <a onClick={() => handleClick()} className={Navbarcss.mobilebtn}>
            Sign Up
          </a>
</Link>*/}
      </div>
    </>
  );
}
