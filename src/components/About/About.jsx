import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimg.PNG")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/rasp.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Embedded & Systems Engineer</h3>
              <p>
              Experienced in real-time embedded development using C, C++, and Python. 
              Worked on drone sensor integration and satellite payloads using NASA’s flight software. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack & DevOps Developer</h3>
              <p>
              Built and debugged RESTful React apps with JSX, deployed using AWS, and automated builds with Jenkins. Comfortable across backend, frontend, and CI/CD.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/rocket.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>High-Performance & Aerospace Computing</h3>
              <p>
              Optimized code using CUDA for GPU-accelerated systems and worked on high-speed satellite data pipelines. Strong focus on performance-critical applications 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
