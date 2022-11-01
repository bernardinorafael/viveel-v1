import { Link } from "react-router-dom"
import styles from "../styles/pages/token.module.scss"

export function Token() {
  return (
    <main className={styles.TokenContainer}>
      <div>
        <h1>Token Name</h1>

        <input type="text" />
        <Link to="/symbol">Next &gt;</Link>
      </div>

      <footer>
        <span>The token name represents how your is going to be known</span>
      </footer>
    </main>
  )
}
