import { useEffect, useState } from 'react'

import TaskInput from '../TaskInput/TaskInput'
import TaskGrid from '../TasksGrid/TasksGrid'

import useFetch from '../../hooks/useFetch'

import { getAllAndCreate } from '../../constants/endPoints'

import './taskdisplay.css'

const TaskDisplay = ({ language }) => {
    const[modify, setModify] = useState(false)
    const[create, setCreate] = useState(false)
    const[deleteTask, setDeleteTask] = useState(false)
    const [state, fetchAllTasks] = useFetch()

    const[tasks, setTasks] = useState([])
    
    useEffect(() => {
        const fetchTasks = async () => {
            const result = await fetchAllTasks({
                url: getAllAndCreate,
                method: 'get'
            })
            setTasks(result)
        }
        setTimeout(() => {
            fetchTasks()
        }, 500);
    }, [modify])

    useEffect(() => {
        scroll(0, 0)
    }, [])

    if(create) {
        setTimeout(() => {
            setCreate(false)
        }, 4000);
    }

    if(deleteTask) {
        setTimeout(() => {
            setDeleteTask(false)
        }, 4000);
    }

    return (
        <section className='taskdisplay'>
            <div className='taskdisplay__container container'>
                <TaskInput 
                    setCreate={setCreate}
                    modify={modify}
                    setModify={setModify}
                    language={language}
                />
                <div className='taskdisplay__alerts'>
                    {
                        deleteTask && <p>{language.home.states.deleteTask}</p>
                    }
                    {
                        create && <p>{language.home.states.create}</p>
                    }
                    {
                        tasks.length === 0 && <p>{language.home.states.noTasks}</p>
                    }
                </div>
                <TaskGrid 
                    tasks={tasks}
                    setDeleteTask={setDeleteTask}
                    modify={modify}
                    setModify={setModify}
                    language={language}
                />
            </div>
        </section>
    )
}

export default TaskDisplay