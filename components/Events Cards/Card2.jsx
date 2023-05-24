import React, { useEffect, useState } from "react";
import styles from "../../styles/cards/ticketcards.module.css";

export default function Card(props) {
  const userId = localStorage.getItem("email");
  console.log(userId, "09808");
  function loadRazorpay() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function handleBuy(ticketId) {
    console.log(ticketId, "999");
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
    console.log(userId);
    const order = await fetch(
      `https://backend-api-2022.onrender.com/api/tickets/getOrderId/${ticketId}`,
      {
        method: "GET",
      }
    ).then((t) => t.json());
    const options = {
      key: "rzp_live_FWRQdHoaQSe74v",
      amount: order.amount.toString(),
      currency: "INR",
      name: "E-Cell BITS Hyderabad",
      description: "Test Transaction",
      order_id: order.id,
      callback_url: `https://backend-api-2022.onrender.com/api/tickets/buy/${ticketId}/${userId}`,
      theme: {
        color: "#150050",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
  }
  return (
    <div className="container mx-auto py-10 px-8">
      <div
        className={styles.mycard1}
        style={{
          backgroundImage:
            props.bg === 0 ? `url("/bgpi.svg")` : `url("/bgbl.svg")`,
          backgroundSize: "101%",
          backgroundPosition:"-0.04vh 6.8vh"
        }}
      >
        {/* <h4>{props.heading}</h4>
        <h6>{props.sub_heading}</h6> */}

        {/* <div className="container pb-5 "></div>
          <div className="container pb-5 mr-3"></div> */}
        {/* <div className={styles.cardtext1}> */}
        {/* <p className={styles.cardtext1}>{props.about}</p> */}
        <h4 className={styles.heading} style={{ fontWeight: "800",color:"#150050"}} >{props.heading}</h4>
        <h6 className={styles.heading} style={{ fontWeight: "600", marginTop: "2vh",color:"#FB0057" }} >
          {props.amount} INR
        </h6>

        {/* <div className="container pb-5 "></div>
          <div className="container pb-5 mr-3"></div> */}
        {/* <div className={styles.cardtext1}> */}
        <div className={styles.container}>
          <p className={styles.cardtext1}>Date & Time : {props.time}</p>
          <p className={styles.cardtext1}>Location : {props.time}</p>
          <p className={styles.cardtext1}>About: {props.about}</p>
        </div>
        {/* <p className={styles.location}>Location :  {props.time}</p> */}
        <div className={styles.btndiv1}>
          <div className={styles.btndiv1}>
            <button
              className={styles.cardbutton1}
              style={{
                backgroundColor: props.bg === 0 ? "#150050" : "#fb2576",
              }}
              onClick={() => handleBuy(props.id)}
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
