import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function termsandconditions() {
  return <>
    <Head>
      <title>Terms and Conditions| E-Cell BPHC</title>
    </Head>
    <div className={styles.outer}>
      <h2 className={styles.heading}>Terms and Conditions</h2>
      <div className={styles.para}>
        Please read these terms and conditions carefully before using{' '}
        <Link href="/">
          https://www.ecellbphc.in/
        </Link>{' '}
        operated by E-Cell BPHC.
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Conditions of use</h3>
        <div className={styles.para}>
          By using this website, you certify that you have read and reviewed
          this Agreement and that you agree to comply with its terms. If you
          do not want to be bound by the terms of this Agreement, you are
          advised to leave the website accordingly. E-Cell BPHC only grants
          use and access of this website, its products, and its services to
          those who have accepted its terms.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Privacy policy</h3>
        <div className={styles.para}>
          Before you continue using our website, we advise you to read our
          privacy policy{' '}
          <Link href="/privacypolicy">
            https://www.ecellbphc.in/privacypolicies
          </Link>{' '}
          regarding our user data collection. It will help you better
          understand our practices.{' '}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Age restriction</h3>
        <div className={styles.para}>
          You must be at least 18 (eighteen) years of age before you can use
          this website. By using this website, you warrant that you are at
          least 18 years of age and you may legally adhere to this Agreement.
          E-Cell BPHC assumes no responsibility for liabilities related to age
          misrepresentation.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Intellectual property</h3>
        <div className={styles.para}>
          You agree that all materials, products, and services provided on
          this website are the property of E-Cell BPHC, its affiliates,
          directors, officers, employees, agents, suppliers, or licensors
          including all copyrights, trade secrets, trademarks, patents, and
          other intellectual property. You also agree that you will not
          reproduce or redistribute the E-Cell BPHC’s intellectual property in
          any way, including electronic, digital, or new trademark
          registrations. You grant E-Cell BPHC a royalty-free and
          non-exclusive license to display, use, copy, transmit, and broadcast
          the content you upload and publish. For issues regarding
          intellectual property claims, you should contact the company in
          order to come to an agreement.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>User accounts</h3>
        <div className={styles.para}>
          As a user of this website, you may be asked to register with us and
          provide private information. You are responsible for ensuring the
          accuracy of this information, and you are responsible for
          maintaining the safety and security of your identifying information.
          You are also responsible for all activities that occur under your
          account or password. If you think there are any possible issues
          regarding the security of your account on the website, inform us
          immediately so we may address them accordingly. We reserve all
          rights to terminate accounts, edit or remove content and cancel
          orders at our sole discretion.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Applicable law</h3>
        <div className={styles.para}>
          By visiting this website, you agree that the laws of India, without
          regard to principles of conflict laws, will govern these terms and
          conditions, or any dispute of any sort that might come between
          E-Cell BPHC and you, or its business partners and associates.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Disputes</h3>
        <div className={styles.para}>
          Any dispute related in any way to your visit to this website or to
          products you purchase from us shall be arbitrated by state or
          federal court and you consent to exclusive jurisdiction and venue of
          such courts.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Indemnification</h3>
        <div className={styles.para}>
          You agree to indemnify E-Cell BPHC and its affiliates and hold
          E-Cell BPHC harmless against legal claims and demands that may arise
          from your use or misuse of our services. We reserve the right to
          select our own legal counsel.{' '}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Limitation on liability</h3>
        <div className={styles.para}>
          E-Cell BPHC is not liable for any damages that may occur to you as a
          result of your misuse of our website. E-Cell BPHC reserves the right
          to edit, modify, and change this Agreement at any time. We shall let
          our users know of these changes through electronic mail. This
          Agreement is an understanding between E-Cell BPHC and the user, and
          this supersedes and replaces all prior agreements regarding the use
          of this website.
        </div>
      </div>
    </div>
  </>;
}

export default termsandconditions
