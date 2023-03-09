import React from 'react'
import s from "../styles/tic.module.css"
import { useState } from 'react';

function TicketCard() {

    const [email, setEmail] = useState('');

      function loadRazorpay() {
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

    async function handleBuy() {
        const userId = email
    const ticketId = '6405d576e6c0fce9e0c789a6'
  console.log(ticketId, '999')
  const res = await loadRazorpay()
  if (!res) {
    alert('Razorpay SDK failed to load')
    return
  }
  console.log(userId)
  const order = await fetch(
    `https://backend-api-2022.onrender.com/api/tickets/getOrderId/${ticketId}`,
    {
      method: 'GET'
    }
  ).then((t) => t.json())
  const options = {
    key: 'rzp_live_FWRQdHoaQSe74v',
    amount: order.amount.toString(),
    currency: 'INR',
    name: 'E-Cell BITS Hyderabad',
    description: 'Test Transaction',
    order_id: order.id,
    callback_url: `https://backend-api-2022.onrender.com/api/tickets/buy/${ticketId}/${userId}`,
    theme: {
      color: '#150050'
    }
  }

  const rzp1 = new window.Razorpay(options)
  rzp1.open()
  rzp1.on('payment.failed', function (response) {
    console.log(response.error.code)
    console.log(response.error.description)
    console.log(response.error.source)
    console.log(response.error.step)
    console.log(response.error.reason)
    console.log(response.error.metadata.order_id)
    console.log(response.error.metadata.payment_id)
  })
}
    return (
      <>
        <div className={s.container}>
          <div className={s.card}>
            <div className={s.head}>Executive Pass</div>
            <div className={s.inputs}>
              <div className={s.label}>Registered Email ID : </div>
              <input
                name="email"
                className={s.input}
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  console.log(email)
                }}
              ></input>
            </div>

            <div onClick={handleBuy} className={s.buy}>buy ticket</div>
          </div>
        </div>
      </>
    )
}

export default TicketCard