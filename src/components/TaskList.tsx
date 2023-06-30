import { CheckCircle, Circle, ClipboardText, Trash } from 'phosphor-react'
import styles from './TaskList.module.css'

export interface Task {
  id: number;
  content: string;
  isCompleted: boolean
  createdAt: Date
}

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (taskId: number) => void
  onToggleTaskComplete: (taskId: number) => void
}

export function TaskList({ tasks, onDeleteTask, onToggleTaskComplete }: TaskListProps) {
  function handleDeleteTask(taskId: number) {
    const mustDelete = confirm('Você realmente deseja excluir esta tarefa?')
    if (mustDelete) {
      onDeleteTask(taskId)
    }
  }

  function handleToggleTaskComplete(taskId: number) {
    onToggleTaskComplete(taskId)
  }

  const orderedTasks = tasks.sort((taskA, taskB) => taskB.createdAt.getTime() - taskA.createdAt.getTime())
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
          <div>
            {orderedTasks.map(task => (
              <div key={task.id} className={styles.taskContainer}>
                {
                  task.isCompleted ?
                    (
                      <button
                        onClick={() => handleToggleTaskComplete(task.id)}
                        className={styles.iconButton}
                        title="Desmarcar"
                      >
                        <CheckCircle className={styles.taskCheckedIcon} weight="fill" size={24} />
                      </button>
                    )
                    : (
                      <button
                        onClick={() => handleToggleTaskComplete(task.id)}
                        className={styles.iconButton} 
                        title="Marcar como concluído"
                      >
                        <Circle className={styles.taskUncheckedIcon} size={24} />
                      </button>
                    )
                }
                <div className={`${styles.taskContent} ${task.isCompleted ? styles.taskContentCompleted : ''}`}>
                  {task.content}
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className={styles.deleteButton}
                  title="Deletar tarefa"
                >
                  <Trash size={24} />
                </button>
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