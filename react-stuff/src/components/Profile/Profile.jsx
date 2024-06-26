import React, { useEffect, useState } from "react";

import styles from "../../styles/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user/userSlice";

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => !val);

    if (isNotEmpty) return;

    dispatch(updateUser(values));
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to log in</span>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.group}>
            <input
              type="email"
              name="email"
              value={values.email}
              autoComplete="off"
              placeholder="Your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type="name"
              name="name"
              value={values.name}
              autoComplete="off"
              placeholder="Your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type="password"
              name="password"
              value={values.password}
              autoComplete="off"
              placeholder="Your password"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.group}>
            <input
              type="avatar"
              name="avatar"
              value={values.avatar}
              autoComplete="off"
              placeholder="Your avatar"
              onChange={handleChange}
              required
            />
          </div>

          <button type='submit' className={styles.submit}>
            Update
          </button>
        </form>
      )}
    </section>
  );
}

export default Profile;
