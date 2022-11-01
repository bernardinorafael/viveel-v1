import styles from "../styles/pages/resume.module.scss"

import dashboard from "../assets/dashboard.svg"
import imageChain2 from "../assets/image2.svg"
import imageChain4 from "../assets/image4.svg"
import { Link } from "react-router-dom"

export function Resume() {
  return (
    <main className={styles.ResumeContainer}>
      <h1>Token Resume</h1>

      <section>
        <div className={styles.ItemsContainer}>
          <span>Template:</span>
          <div></div>
        </div>

        <div className={styles.ItemsContainer}>
          <span>Name:</span>
          <div></div>
        </div>

        <div className={styles.ItemsContainer}>
          <span>Symbol:</span>
          <div></div>
        </div>

        <div className={styles.ItemContainerVariant}>
          <span>Distribution:</span>
          <div>
            <img height={150} src={dashboard} alt="" />
          </div>
        </div>

        <div className={styles.ItemContainerVariant}>
          <span>Blockchains:</span>
          <div>
            <img height={50} src={imageChain2} alt="" />
            <img height={50} src={imageChain4} alt="" />
          </div>
        </div>

        <Link to="#">Build &gt;</Link>
      </section>
    </main>
  )
}
