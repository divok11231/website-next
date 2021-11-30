import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "../../styles/events/event_tiles.module.css";
import Date from "./date";

function Event_Tiles() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [team, setTeam] = useState();
  const [college, setCollege] = useState();
  const [start, setStart] = useState();
  const [desc, setDesc] = useState();
  console.log(name);
  return (
    <div>
      <form className={styles.form}>

        <div className={styles.input}>
          <div className={styles.div}>Name</div>
          <input placeholder="Name" type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} className={styles.inputbox} required />
        </div>
        <div className={styles.input}>
          <div className={styles.div}>Email Address</div>
          <input placeholder="Email Address" type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className={styles.inputbox} required />
        </div>
        <div className={styles.input}>
          <div className={styles.div}>Contact Number</div>
          <input placeholder="Contact Number" type="text" name="number" value={contact} onChange={(e) => { setContact(e.target.value) }} className={styles.inputbox} required />
        </div>

        <div className={styles.input}>
          <div className={styles.div}>Team Members' name</div>
          <input placeholder="Team Members" type="text" name="members" value={team} onChange={(e) => { setTeam(e.target.value) }} className={styles.inputbox} required />
        </div>
        <div className={styles.input}>
          <div className={styles.div}>College(if any)</div>
          <input placeholder="College Name" type="text" name="college" value={college} onChange={(e) => { setCollege(e.target.value) }} className={styles.inputbox} />
        </div>
        <div className={styles.input}>
          <div className={styles.div}>Name of Start-Up</div>
          <input placeholder="Name of Start-Up" type="text" name="startUpName" value={start} onChange={(e) => { setStart(e.target.value) }} className={styles.inputbox} required />
        </div>
        <div className={styles.input}>
          <div className={styles.div}>Short Description of Start-Up</div>
          <textarea name="description" placeholder="Short description..." value={desc} onChange={(e) => { setDesc(e.target.value) }} className={styles.inputbox1} required></textarea>
        </div>
        <button type="submit" className={styles.submit}>Sign Up</button>
      </form>
    </div>
  )
}

export default Event_Tiles

