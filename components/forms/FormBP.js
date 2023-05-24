import { useState } from 'react'

import formcss from '../../styles/form.module.css'
function FormBP() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    team_members: '',
    college: '',
    startup_name: '',
    startup_description: ''
  })

  const INITIAL_VALUES = {
    name: '',
    email: '',
    phone: '',
    team_members: '',
    college: '',
    startup_name: '',
    startup_description: ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://api.apispreadsheets.com/data/hsLfNmIZZFKUhHN8/', {
      method: 'POST',
      body: JSON.stringify({ data: data })
    })
      .then((res) => {
        alert('Form Data Submitted :)')
      })
      .then(() => {
        window.location = 'https://www.ecellbphc.in/beyondprofits'
      })
      .catch((err) => {
        alert('Form Data Not Submitted :( . Please Try Again')
      })
    // alert('Registrations have closed, hope to see you next year!')
    setData({ ...data, ...INITIAL_VALUES })
  }

  return (
    <>
      <div className={formcss.formwrap}>
        <div className={formcss.box}>
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <div className={formcss.insidebox}>
              <div className={formcss.formheading}>REGISTER HERE</div>
              <input
                className={formcss.name}
                name="name"
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value })
                }}
              />
              <input
                className={formcss.name}
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value })
                }}
              />
              <input
                className={formcss.name}
                type="text"
                name="phone"
                placeholder="Contact Number"
                value={data.phone}
                onChange={(e) => {
                  setData({ ...data, phone: e.target.value })
                }}
              />
              <textarea
                className={formcss.name}
                type="text"
                name="team_members"
                style={{ height: '100px' }}
                placeholder="Team Members"
                value={data.team_members}
                onChange={(e) => {
                  setData({ ...data, team_members: e.target.value })
                }}
              />
              <input
                className={formcss.name}
                type="text"
                name="college"
                placeholder="College"
                value={data.college}
                onChange={(e) => {
                  setData({ ...data, college: e.target.value })
                }}
              />
              <input
                className={formcss.name}
                type="text"
                name="startup_name"
                placeholder="Startup Name"
                value={data.startup_name}
                onChange={(e) => {
                  setData({ ...data, startup_name: e.target.value })
                }}
              />
              <textarea
                className={formcss.name}
                type="text"
                name="startup_description"
                placeholder="Startup Description"
                value={data.startup_description}
                style={{ height: '100px' }}
                onChange={(e) => {
                  setData({ ...data, startup_description: e.target.value })
                }}
              />
              <div className={formcss.buttons}>
                <button className={formcss.registerbutton} type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormBP
