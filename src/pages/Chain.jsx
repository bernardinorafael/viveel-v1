import styles from "../styles/pages/chain.module.scss"

import imageChain1 from "../assets/image1.svg"
import imageChain2 from "../assets/image2.svg"
import imageChain3 from "../assets/image3.svg"
import imageChain4 from "../assets/image4.svg"
import imageChain5 from "../assets/image5.svg"
import imageChain6 from "../assets/image6.svg"
import imageChain7 from "../assets/image7.svg"
import imageChain8 from "../assets/image8.svg"
import imageChain9 from "../assets/image9.svg"
import { Link } from "react-router-dom"

export function Chain() {
  return (
    <main className={styles.ChainContainer}>
      <h1>Select Chain</h1>

      <section>
        <div>
          <img height={90} src={imageChain1} alt="" />
          <img height={90} src={imageChain2} alt="" />
          <img height={90} src={imageChain3} alt="" />
          <img height={90} src={imageChain4} alt="" />
        </div>
        <div>
          <img height={90} src={imageChain5} alt="" />
          <img height={90} src={imageChain6} alt="" />
          <img height={90} src={imageChain7} alt="" />
          <img height={90} src={imageChain8} alt="" />
          <img height={90} src={imageChain9} alt="" />
        </div>

        <Link to="/resume">Next &gt;</Link>
      </section>

      <footer>
        <span>
          Now it is time to select which Blockchain you want to use. Select as many as you
          want.
        </span>
      </footer>
    </main>
  )
}
