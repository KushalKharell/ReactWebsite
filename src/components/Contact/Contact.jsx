import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com"
             target="_blank"
             rel="noopener noreferrer"
          >
            kkharel286@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://linkedin.com/in/kushal-kharel"
             target="_blank"
             rel="noopener noreferrer"
          >
            linkedin.com/in/kushal-kharel</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/KushalKharell"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/KushalKharell</a>
        </li>
      </ul>
    </footer>
  );
};
