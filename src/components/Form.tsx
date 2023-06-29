import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form}>
      <input className={styles.addTaskInput} type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.createTaskButton} type="submit">Criar <PlusCircle size={16} /></button>
    </form>
  )
}