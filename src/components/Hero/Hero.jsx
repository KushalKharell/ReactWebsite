import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kushal</h1>
        <p className={styles.description}>
          I'm a Software Engineer with 2+ years of experience using low level languages and
          Backend APIs. 
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1d7VbMsHnKekwI4ppXD8NTwydw-vGRcCq/view?usp=sharing" target="_blank" className={styles.resumeBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/Profile.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
