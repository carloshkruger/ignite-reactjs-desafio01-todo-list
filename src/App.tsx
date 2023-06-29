import { Header } from "./components/Header"
import { Form } from "./components/Form"

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Form />
      </main>
    </>
  )
}

export default App
