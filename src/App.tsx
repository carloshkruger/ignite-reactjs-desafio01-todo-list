import { Header } from "./components/Header"
import { Form } from "./components/Form"

import styles from './App.module.css'
import { Task, TaskList } from "./components/TaskList"

const tasks: Task[] = [
  {
    id: 1,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
  {
    id: 2,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false
  }
]

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Form />
        <TaskList tasks={tasks} />
      </main>
    </>
  )
}

export default App
