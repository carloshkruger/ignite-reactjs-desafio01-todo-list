import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

interface FormProps {
  onCreateNewTask: (content: string) => void
}

export function Form({ onCreateNewTask }: FormProps) {
  const [newTaskContent, setNewTaskContent] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskContent)

    setNewTaskContent('')
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value)
  }

  const isNewTaskContentEmpty = newTaskContent === ''

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input
        value={newTaskContent}
        onChange={handleInputChange}
        className={styles.addTaskInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.createTaskButton} type="submit" disabled={isNewTaskContentEmpty}>Criar <PlusCircle size={16} /></button>
    </form>
  )
}