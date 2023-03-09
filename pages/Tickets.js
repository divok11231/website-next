import React, { useEffect, useState } from 'react'
import heading from '../styles/Heading/heading.module.css'
// import card_entry from '../components/ticketinfo.js'
import Events_Card from '../components/Events Cards/Event Card.jsx'
import axios from 'axios'
import Card from '../components/Events Cards/Card2.jsx'
import s from '../styles/Card/cc.module.css'
import TicketCard from '../components/TicketCard'

function Tickets() {
  const [ticket, setTic] = useState([])
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    let tic = axios
      .get('https://backend-api-2022.onrender.com/api/tickets/getAllTs')
      .then((res) => {
        let a = res.data
        setTic(a)
        console.log(ticket, 'ahhhh')
        const b = JSON.parse(localStorage.getItem('auth'))
        setAuth(b)
        console.log(auth, '343434')
      })
  }, [])
  return (
    <section className={heading.section}>
      {/* {!auth ? (
        <>
          {Array.isArray(ticket) ? (
            <>
              <h1 className={heading.ticketsheading}>Buy Tickets</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {ticket.map((card, index) => {
                  return (
                    <Card
                      bg={index % 2}
                      heading={card.name}
                      amount={card.amount}
                      time={card.time}
                      location={card.location}
                      about={card.about}
                      id={card._id}
                      // btntext={card.btntext}
                      // btnlink={card.btnlink}
                    />
                  )
                })}
              </div>
            </>
          ) : (
            <>nihg</>
          )}
        </>
      ) : (
        <div className={s.alert}>Please Login/Signup First !!</div>
      )} */}
          <TicketCard/>
    </section>
  )
}

export default Tickets
