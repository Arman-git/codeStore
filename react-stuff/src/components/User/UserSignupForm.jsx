import React from "react";
import styles from "../../styles/User.module.css";
import { useState } from "react";

const UserSignupForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>Sign Up</div>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            value=""
            autoComplete="off"
            placeholder="Your email"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="name"
            name="name"
            value=""
            autoComplete="off"
            placeholder="Your name"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="password"
            name="password"
            value=""
            autoComplete="off"
            placeholder="Your password"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="avatar"
            name="avatar"
            value=""
            autoComplete="off"
            placeholder="Your avatar"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.link}>I already have an account</div>
        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
