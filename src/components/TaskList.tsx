import { CheckCircle, Circle, ClipboardText, Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const createdTasksCount = tasks.length
  const completedTasksCount = tasks.filter(task => task.isCompleted).length
  const hasTasks = createdTasksCount > 0
  const completedTasksDescription = !hasTasks ? '0' : `${completedTasksCount} de ${createdTasksCount}`

  return (
    <div>
      <div className={styles.countersContainer}>
        <div>
          <span className={styles.createdTasksCounterText}>Tarefas criadas</span>
          <span className={styles.counter}>{createdTasksCount}</span>
        </div>
        <div>
          <span className={styles.completedTasksCounterText}>Concluídas</span>
          <span className={styles.counter}>{completedTasksDescription}</span>
        </div>
      </div>

      {
        hasTasks ? (
          <div className={styles.listContainer}>
            {tasks.map(task => (
              <div key={task.id} className={styles.taskContainer}>
                {
                  !task.isCompleted ?
                    <Circle className={styles.taskUncheckedIcon} size={24} />
                    : <CheckCircle weight="fill" className={styles.taskCheckedIcon} size={24} />
                }
                <div className={`${styles.taskContent} ${task.isCompleted ? styles.taskContentCompleted : ''}`}>
                  {task.content}
                </div>
                <div className={styles.taskActions}>
                  <button className={styles.deleteButton} title="Deletar tarefa">
                    <Trash size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyTaskListMessageContainer}>
            <ClipboardText size={56} />
            <p className={styles.noTasksMessage}>Você ainda não tem tarefas cadastradas<br /></p>
            <p className={styles.createTasksMessage}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
      }
    </div>
  )
}