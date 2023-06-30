import { useState } from "react"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Task, TaskList } from "./components/TaskList"

import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function createNewTask(content: string): void {
    const randomId = Math.floor(Math.random() * 1000);
    const newTask: Task = {
      id: randomId,
      content,
      isCompleted: false,
      createdAt: new Date()
    }
    setTasks(currentTasks => [...currentTasks, newTask])
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function toggleTaskComplete(taskId: number) {
    setTasks(tasks.map(task => {
      if (task.id !== taskId) {
        return task
      }
      task.isCompleted = !task.isCompleted
      return task
    }))
  }

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <Form onCreateNewTask={createNewTask} />
        <TaskList onToggleTaskComplete={toggleTaskComplete} onDeleteTask={deleteTask} tasks={tasks} />
      </main>
    </>
  )
}

export default App
