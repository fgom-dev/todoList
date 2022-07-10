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
}

export function TaskItem({ task, onRemoveTask }: TaskItemProps) {  

    function handleRemoveTask() {
        onRemoveTask(task.id);
    }

    function handleCompleteTask() {
        
    }

    return (
        <div className={styles.taskItem}> 
                  
            <button 
                className={styles.checkBox}
                onClick={handleCompleteTask}
            >                
                {/* <Check size={15}/> */}
            </button>

            <p>{task.content}</p>            
            
            <button className={styles.btnDelete} onClick={handleRemoveTask}>
                <Trash size={20}/>
            </button>
        </div>
    )
}