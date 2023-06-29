import todoLogo from '../assets/todo-logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <img className={styles.logoImage} src={todoLogo} alt="Todo logo" />
        <span className={styles.titleText}>
          <span className={styles.titleTextFirstPart}>to</span>
          <span className={styles.titleTextSecondPart}>do</span>
        </span>
      </div>
    </header>
  )
}