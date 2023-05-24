import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import termsandconditions from '../pages/termsandconditions'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.info}>
            <h2>E-Cell BPHC</h2>
            <p>Networking Startups All Over the World</p>
          </div>
          <div className={styles.social}>
            <h2>Follow Us</h2>
            <div className={styles.icons}>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/ecell_bphc/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/eCELL.BPHC"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/ecell_bphc"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/e-cell-bphc"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.contact}>
            <h2>Contact Us</h2>
            <a
              className={styles.mail}
              href="mailto:ecell@hyderabad.bits-pilani.ac.in"
            >
              ecell@hyderabad.bits-pilani.ac.in
            </a>
          </div>

          {/* <div className={styles.links}>
            <h2>Site Links</h2>
            <ul>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className={styles.otherlinks}>
          <h2>Other Links</h2>
          <Link href="/termsandconditions" className={styles.terms}>
            Terms and Conditions
          </Link>
          <Link href="/privacypolicy" className={styles.terms}>
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright 2021 All rights reserved. Designed by E-Cell BITS Hyderabad
      </div>
    </footer>
  );
}
