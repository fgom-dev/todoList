import styles from './NewTask.module.css';

import imgPlus from '../assets/plus.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Task {
    id: number;
    content: string;
    isComplete: boolean;
  }

interface NewTaskProps {
    onAddTask: (newTask: Task) => void;
}

export function NewTask({ onAddTask }: NewTaskProps) {
    const [newTaskContent, setNewTaskContent] = useState('');


    function handleAddTask(event: FormEvent) {
        event.preventDefault(); 

        const newTask: Task = {
            id: Math.random(),
            content: newTaskContent,
            isComplete: false,
        }

        onAddTask(newTask);
        setNewTaskContent('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskContent(event.target.value);
    }

    return (
        <form className={styles.newTask} onSubmit={handleAddTask}>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTaskContent}
                onChange={handleNewTaskChange}
                required
            />
            <button>
                Criar
                <img src={imgPlus} />
            </button>
        </form>
    )
}