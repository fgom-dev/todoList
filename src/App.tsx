import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

interface Task {
    id: number;
    content: string;
    isComplete: boolean;
  }

export function App(){    
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(newTask: Task) {
        setTasks([...tasks, newTask])
    }

    function removeTask(taskId: number) {
        const tasksWithoutOne = tasks.filter(task => task.id !== taskId);

        setTasks(tasksWithoutOne);
    }

    function completeTask(taskId: number) {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, isComplete: !task.isComplete } : task));
    }

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <NewTask onAddTask={addTask}/>
                <TaskList taskList={tasks} onRemoveTask={removeTask} onCompleteTask={completeTask}/>
            </div>
        </>
    )
}