import React from 'react'
import styles from '../styles/OtherLinks/terms.module.css'
import Head from 'next/head'
import Link from 'next/link'
function privacypolicies() {
  return <>
    <Head>
      <title>Privacy Policy| E-Cell BPHC</title>
    </Head>
    <div className={styles.outer}>
      <h2 className={styles.heading}>Privacy Policy</h2>
      <div className={styles.para}>
        This privacy policy will help you understand how E-Cell BPHC uses and
        protects the data you provide to us when you visit and use our website{' '}
        <Link href="/">
          https://www.ecellbphc.in/
        </Link>
        .
        <br />
        <br />
        We reserve the right to change this policy at any given time, of which
        you will be promptly updated. If you want to make sure that you are up
        to date with the latest changes, we advise you to frequently visit
        this page.
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>What User Data We Collect</h3>
        <div className={styles.para}>
          When you visit the website, we may collect the following data:
          <br />
          <br />
          &emsp; • Your IP address.
          <br />
          &emsp; • Your contact information and email address.
          <br />
          &emsp; • Other information such as interests and preferences.
          <br />
          &emsp; • Data profile regarding your online behavior on our website.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Why We Collect Your Data</h3>
        <div className={styles.para}>
          We are collecting your data for several reasons:
          <br />
          <br />
          &emsp; • To better understand your needs.
          <br />
          &emsp; • To improve our services and products.
          <br />
          &emsp; • To send you promotional emails containing the information
          we think you will find interesting.
          <br />
          &emsp; • To contact you to fill out surveys and participate in other
          types of market research.
          <br />
          &emsp; • To customize our website according to your online behavior
          and personal preferences.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Safeguarding and Securing the Data</h3>
        <div className={styles.para}>
          E-Cell BPHC is committed to securing your data and keeping it
          confidential. E-Cell BPHC has done all in its power to prevent data
          theft, unauthorized access, and disclosure by implementing the
          latest technologies and software, which help us safeguard all the
          information we collect online.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Our Cookie Policy</h3>
        <div className={styles.para}>
          Once you agree to allow our website to use cookies, you also agree
          to use the data it collects regarding your online behavior (analyze
          web traffic, web pages you spend the most time on, and websites you
          visit).
          <br />
          <br />
          The data we collect by using cookies is used to customize our
          website to your needs. After we use the data for statistical
          analysis, the data is completely removed from our systems.
          <br />
          <br />
          Please note that cookies don&apos;t allow us to gain control of your
          computer in any way. They are strictly used to monitor which pages
          you find useful and which you do not so that we can provide a better
          experience for you.
          <br />
          <br />
          If you want to disable cookies, you can do it by accessing the
          settings of your internet browser. (Provide links for cookie
          settings for major internet browsers).
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>Links to Other Websites</h3>
        <div className={styles.para}>
          Our website contains links that lead to other websites. If you click
          on these links E-Cell BPHC is not held responsible for your data and
          privacy protection. Visiting those websites is not governed by this
          privacy policy agreement. Make sure to read the privacy policy
          documentation of the website you go to from our website.
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subhead}>
          Restricting the Collection of your Personal Data
        </h3>
        <div className={styles.para}>
          At some point, you might wish to restrict the use and collection of
          your personal data. You can achieve this by doing the following:
          <br />
          <br />
          When you are filling the forms on the website, make sure to check if
          there is a box which you can leave unchecked, if you don&apos;t want
          to disclose your personal information.
          <br />
          <br />
          If you have already agreed to share your information with us, feel
          free to contact us via email and we will be more than happy to
          change this for you.
          <br />
          <br />
          E-Cell BPHC will not lease, sell or distribute your personal
          information to any third parties, unless we have your permission. We
          might do so if the law forces us. Your personal information will be
          used when we need to send you promotional materials if you agree to
          this privacy policy.
          <br />
          <br />
        </div>
      </div>
    </div>
  </>;
}

export default privacypolicies
