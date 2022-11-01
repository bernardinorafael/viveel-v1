import { Link } from "react-router-dom"
import styles from "../styles/pages/symbol.module.scss"

export function Symbol() {
  return (
    <main className={styles.SymbolContainer}>
      <div>
        <h1>Token Symbol</h1>

        <input type="text" />
        <Link to="/distribution">Next &gt;</Link>
      </div>

      <footer>
        <span>
          The token Symbol is a short name to your asset, usually it is about 3 to 5 capital
          letters, as USD stands for US Dollar
        </span>
      </footer>
    </main>
  )
}
