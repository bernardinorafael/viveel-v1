import { NavLink, Outlet } from "react-router-dom"
import styles from "./styles.module.scss"

export function DefaultLayout() {
  return (
    <div className={styles.LayoutContainer}>
      <header className={styles.HeaderContainer}>
        <NavLink end to="/">
          <div className={styles.NumbersContainer}>
            <span>1</span>
          </div>
        </NavLink>

        <hr />

        <NavLink to="/symbol">
          <div className={styles.NumbersContainer}>
            <span>2</span>
          </div>
        </NavLink>

        <hr />

        <NavLink to="/distribution">
          <div className={styles.NumbersContainer}>
            <span>3</span>
          </div>
        </NavLink>

        <hr />

        <NavLink to="/chain">
          <div className={styles.NumbersContainer}>
            <span>4</span>
          </div>
        </NavLink>
      </header>

      <Outlet />
    </div>
  )
}
