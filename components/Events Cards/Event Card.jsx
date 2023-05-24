import React, { useEffect, useState } from "react";
import styles from "../../styles/cards/cards.module.css";

export default function Card1(props) {
  return (
    // <div className="container mx-auto py-10 px-8">
      <div
        className={styles.mycard1}
        style={{
          backgroundImage:
            props.bg === 0 ? `url("/bgpi.svg")` : `url("/bgbl.svg")`,
          backgroundSize: "101%",
          backgroundPosition:"-0.04vh  7vh"
        }}
      >
        <h4 className={styles.heading}style={{color:"#150050" }}>{props.heading}</h4>
        <h6 className={styles.heading}style={{color:"#FB2576" }}>{props.sub_heading}</h6>

        {/* <div className="container pb-5 "></div>
          <div className="container pb-5 mr-3"></div> */}
        {/* <div className={styles.cardtext1}> */}
        <p className={styles.cardtext1}>{props.about}</p>
        <div className={styles.btndiv1}>
          <a href={props.btnlink}>
            <button
              className={styles.cardbutton1}
              style={{
                backgroundColor: props.bg === 0 ? "#150050" : "#fb2576",
              }}
            >
              {props.btntext}
            </button>
          </a>
        </div>
      </div>
    // </div>
    // </div>
  );
}
