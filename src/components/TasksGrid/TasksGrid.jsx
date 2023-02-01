import React from 'react'

import Task from '../Task/Task'

import './tasksgrid.css'

// let array = [
//     {
//         _id: '63c068ed2529dd30c041db7b',
//         name: "Tarea importante",
//         completed: true
//     },
//     {
//         _id: '63c068ed2529dd30c041db7b',
//         name: "Tarea importante",
//         completed: false
//     },
//     {
//         _id: '63c068ed2529dd30c041db7b',
//         name: "Tarea importante",
//         completed: false
//     },
//     {
//         _id: '63c068ed2529dd30c041db7b',
//         name: "Tarea importante",
//         completed: true
//     },
//     {
//         _id: '63c068ed2529dd30c041db7b',
//         name: "Tarea importante",
//         completed: false
//     }
// ]

const TasksGrid = ({ tasks, setDeleteTask, modify, setModify, language }) => {
    
    return (
        <div className='tasksgrid__container'>
            {
                tasks.map((task) => (
                        <Task 
                            id={task._id} 
                            key={task._id} 
                            name={task.name} 
                            completed={task.completed}
                            setDeleteTask={setDeleteTask}
                            modify={modify}
                            setModify={setModify}
                            language={language}
                        />
                ))
            }
        </div>
    )
}

export default TasksGrid