import styles from './TaskList.module.css'

import clipboard from '../assets/clipboard.svg'
import { TaskItem } from './TaskItem'

interface Task {
    id: number;
    content: string;
    isComplete: boolean;
  }

interface TaskListProps {
    taskList: Task[];
    onRemoveTask: (taskId:number) => void;
    onCompleteTask: (taskId:number) => void;
}

export function TaskList({ taskList, onRemoveTask, onCompleteTask }: TaskListProps) {
    return (

        <div className={styles.taskList}>
            <header>
                <div className={styles.tasksCreated}>
                    <strong>Tarefas criadas</strong>
                    <span>{taskList.length}</span>
                </div>

                <div className={styles.tasksCompleted}>
                    <strong>Concluídas</strong>
                    <span>{taskList.filter(task => task.isComplete === true).length} {taskList.length > 0 ? 'de'  + taskList.length : ''}</span>
                </div>
            </header>

            {taskList.map(task => (
                <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask}/>
            ))}            

            <div className={taskList.length === 0 ? styles.contentEmpty : styles.contentWithTasks}>
                <img src={clipboard} alt="" />
                <div>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize deus itens a fazer</p>
                </div>
            </div>
        </div>
    )
}