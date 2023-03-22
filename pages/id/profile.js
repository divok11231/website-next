import React from 'react'
import styles from '../../styles/id/profile.module.css'
import { useState, useEffect } from 'react'
import launchpad from '../../assets/Launchpad.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import ClipLoader from 'react-spinners/ClipLoader'
import axios from 'axios'

function Profile() {
  // const { data: session, status } = useSession()

  const [session, setSessions] = useState({
    _id: '',
    token: ''
  })

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [loader, setLoader] = useState(false)
  const [paids, setPaid] = useState(false)
  const [value, setValue] = useState(26500)

  useEffect(() => {
    setStatus(localStorage.getItem('status'))
    setEmail(localStorage.getItem('email'))
    setSessions({ token: localStorage.getItem('token'), _id: localStorage.getItem('userid') })
    
    async function get() {
      axios
        .post(
          'https://backend-api-2022.onrender.com/api/payments/getPaymentStatus',
          {
            email: email
          }
        )
        .then((res) => {
          if (res.data.paid) {
            setPaid(res.data.paid, () => {})
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (status === 'authenticated' && email) {
      get()
    }
  }, [])

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    yos: '',
    resumeURL: '',
    couponCode: ''
  })

  const router = useRouter()
  const couponCheck = () => {
    if (userData.couponCode === 'COIGN') setValue(20000)
  }
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  async function openRazorpay(e) {
    e.preventDefault()
    const res = await initializeRazorpay()

    if (session?.user.email && session?.user._id && res) {
      axios
        .post(
          'https://backend-api-2022.onrender.com/api/payments/createOrder',
          {
            email: session.user.email,
            _id: session.user._id
          }
        )
        .then((res) => {
          console.log('res', res.data)
          if (res.data.id) {
            if (userData.couponCode === 'COIGN') setValue(20000)
            var options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
              amount: value, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: 'INR',
              name: 'ECell, BITS Pilani',
              description: 'Payment for Launchpad 2022',
              image:
                'https://www.ecellbphc.in/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fimages%2Fmainlogo.9c338b5ed23edcdf418f531e5ac4ab38.png&w=256&q=75',
              order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              // callback_url: 'https://ecellbphc.in/esummit',
              // prefill: {
              //   name: 'Gaurav Kumar',
              //   email: 'gaurav.kumar@example.com',
              //   contact: '9999999999'
              // },
              notes: {
                address: 'Razorpay Corporate Office'
              },
              theme: {
                color: '#3399cc'
              }
            }
            var rzp1 = new Razorpay(options)
            rzp1.open()

            // window.location.replace('https://ecellbphc.in/esummit')
          } else if (paids) {
            alert('already paid')
          } else if (res.data.status == 'paid') {
            alert("You've already paid")
          } else {
            alert('Something blew up')
          }
        })
        .catch((error) => {
          console.log
        })
    } else {
      alert('Login/Signup first')
    }
  }

  useEffect(() => {
    console.log(session)
    console.log(status)
    if (session) {
      console.log('something', session)
      // return (
      //   <>
      //     Signed in as {session} <br />
      //     <button onClick={() => signOut()}>Sign out</button>
      //   </>
      // )
    } else {
      console.log('empty')
    }

    if (status === 'authenticated') {
      axios
        .get(
          `https://backend-api-2022.onrender.com/api/users/${session._id}`,
          {
            headers: {
              Authorization: `Bearer ${session.token}`
            }
          }
        )
        .then((res) => {
          setUserData({
            ...userData,
            name: res.data.data.name,
            email: res.data.data.email,
            contact: res.data.data.contact,
            college: res.data.data.college,
            yos: res.data.data.yos,
            resumeURL: res.data.data.resumeURL
          })
        })
    }

    if (status === 'unauthenticated') {
      router.push('/id/portal')
    }
  }, [session, status])

  // useEffect(() => {}, [status])

  //   if (status === 'authenticated') {
  //     setSomething('sdjfbk')
  //   }

  const handleUpdate = async (e) => {
    e.preventDefault()
    axios
      .post(
        'https://backend-api-2022.onrender.com/api/users/updateProfile',
        userData,
        {
          headers: {
            Authorization: `Bearer ${session.token}`
          }
        }
      )
      .then((res) => {
        alert('Profile Updated')
      })
      .catch((err) => {
        alert('There was some error ! Please Try Again')
        console.log(err)
      })
  }
  // const handlePaid = () => {
  //   alert('You&apos;ve already paid');
  const [resume, setResume] = useState('No files uploaded')

  // Handling file selection from input
  const onFileSelected = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0])
      setFileName(e.target.files[0].name)
      // setIsDisabled(false) // Enabling upload button
      // setButtonText("Let's upload this!")
    }
  }

  // Uploading image to Cloud Storage
  const handleFileUpload = async (e) => {
    e.preventDefault()

    try {
      if (selectedFile !== '') {
        // Creating a FormData object
        let fileData = new FormData()

        // Adding the 'image' field and the selected file as value to our FormData object
        // Changing file name to make it unique and avoid potential later overrides
        fileData.set(
          'image',
          selectedFile,
          `${Date.now()}-${selectedFile.name}`
        )
        setLoader(true)
        axios({
          method: 'post',
          url: 'https://backend-api-2022.onrender.com/api/users/uploadResume',
          data: fileData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${session.token}`
          }
        })
          .then((res) => {
            setLoader(false)
            console.log(res)
            alert('Resume Uploaded')
          })
          .catch((err) => {
            console.log(err)
            alert('Resume upload failed')
          })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function ResumeHandler() {
    if (userData.resumeURL) return 'Resume Uploaded'
    else return 'Upload Resume'
  }

  return (
    <div>
      <div className={styles.launchpad_logo}>
        <Image src={launchpad} alt="logout" />
      </div>
      <div className={styles.outer}>
        {/* <div className={styles.inner_left}>
                </div> */}
        <div className={styles.inner_right}>
          <div className={styles.inner_right_top}>Profile</div>
          <div className={styles.inner_right_bottom}>
            <div className={styles.user_form}>
              <div>
                <label className={styles.labels}>Name</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value })
                  }}
                  value={userData.name}
                  // onChange={(e) => {
                  //   setUserData({ ...userData, name: e.target.value })
                  // }}
                />
              </div>
              <div>
                <label className={styles.labels}>Email</label>
                <input
                  className={styles.inputbox}
                  type="text"
                  placeholder="Enter your email"
                  value={userData.email}
                />
              </div>
              <div>
                <label className={styles.labels}>Phone</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your Phone"
                  value={userData.contact}
                  onChange={(e) => {
                    setUserData({ ...userData, contact: e.target.value })
                  }}
                />
              </div>
              <div>
                <label className={styles.labels}>College</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Enter your college"
                  onChange={(e) => {
                    setUserData({ ...userData, college: e.target.value })
                  }}
                  value={userData.college}
                  // onChange={(e) => {
                  //   setUserData({ ...userData, college: e.target.value })
                  // }}
                />
              </div>
              <div>
                <label className={styles.labels}>Year Of Study</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Year Of Study"
                  value={userData.yos}
                  onChange={(e) => {
                    setUserData({ ...userData, yos: e.target.value })
                  }}
                />
              </div>
              <div>
                {/* <label className={styles.labels}>Coupon Code</label>
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Coupon Code"
                  value={userData.couponCode}
                  onChange={(e) => {
                    setUserData({ ...userData, couponCode: e.target.value })
                  }}
                /> */}
                {/* <div>
                <label className={styles.labels}>Your Resume</label>
                <input
                  type="file"
                  className={styles.resume}
                  onChange={(e)=>{
                    setUserData({...userData,resume:e.target.value})
                  }}
                  value={userData.resume}
                />
              </div> */}
                <div></div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.resume}>
                  <input
                    type="file"
                    max-size="5000"
                    id="resume"
                    onChange={(e) => {
                      onFileSelected(e)
                    }}
                    name="resume"
                    accept="application/pdf"
                    className={styles.imginpt}
                  />
                  <div className={styles.submit2} onClick={handleFileUpload}>
                    <ResumeHandler />
                    <div
                      className={loader ? styles.displayloader : styles.none}
                    >
                      <ClipLoader />
                    </div>
                  </div>
                </div>
                <button
                  className={styles.submit}
                  onClick={(e) => handleUpdate(e)}
                >
                  Update
                </button>
                {/* {!paids ? (
                  <button className={styles.submit} onClick={openRazorpay}>
                    Pay
                  </button>
                ) : (
                  <div className={styles.submit}>You&apos;ve paid</div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
