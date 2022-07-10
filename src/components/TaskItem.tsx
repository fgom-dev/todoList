import styles from './TaskItem.module.css';

import { Check, Trash } from 'phosphor-react';

interface Task {
    id: number;
    content: string;
    isComplete: boolean;
  }

interface TaskItemProps {
    task: Task;
    onRemoveTask: (taskId:number) => void;
    onCompleteTask: (taskId:number) => void;
}

export function TaskItem({ task, onRemoveTask, onCompleteTask }: TaskItemProps) {  

    function handleRemoveTask() {
        onRemoveTask(task.id);
    }

    function handleCompleteTask() {
        onCompleteTask(task.id);
    }

    return (
        <div className={styles.taskItem}>              
            <button 
                className={task.isComplete ? styles.checkedBox : styles.uncheckedBox}                   
                onClick={handleCompleteTask}
            >    
                {task.isComplete ? <Check size={15}/> : ''}            
                
            </button>

            <p className={task.isComplete ? styles.taskCompleted : ''}>{task.content}</p>            
            
            <button className={styles.btnDelete} onClick={handleRemoveTask}>
                <Trash size={20}/>
            </button>            
        </div>
    )
}