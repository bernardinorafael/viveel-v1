import { Link } from "react-router-dom"
import styles from "../styles/pages/distribution.module.scss"

export function Distribution() {
  return (
    <main className={styles.DistributionContainer}>
      <h1>Token Distribution</h1>

      <section>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="text" />
        </div>
      </section>
      <button type="button">Add more</button>

      <Link to="/chain">Next &gt;</Link>

      <footer>
        <span>
          Token distribution relates to how you share your assets between different players,
          such as your development team, marketing and community. In this slide you must add as
          much players as you like and the amount of tokens each one is entitled with.
        </span>
      </footer>
    </main>
  )
}
