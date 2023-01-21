import { useState } from 'react'

import useFetch from '../../hooks/useFetch'

import TaskUpdate from '../TaskUpdate/TaskUpdate'

import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'

import { getPatchDeleteOne } from '../../constants/endPoints'

import './task.css'

const Task = ({ id, name, completed, setModify, modify, setDeleteTask }) => {
    const [updateMenu, setUpdateMenu] = useState(false)
    const [state, fetchDelete] = useFetch()

    const handleClick = (e) => {
        fetchDelete({
            url: getPatchDeleteOne(id),
            method: 'delete'
        })
        setModify(!modify)
        setDeleteTask(true)
    }

    const handleState = () => {
        setUpdateMenu(!updateMenu)
    }

    return (
        <div className='task__container-main'>
            <div className='task__container container'>
                <div className='task__description'>
                    <div className={`task__icon ${completed?'complete':''}`}>
                        {
                            completed? <AiOutlineCheckCircle />: <AiOutlineCloseCircle />
                        }
                    </div>
                    <h2>{name}</h2>
                </div>

                <div className='task__edit'>
                    <p onClick={handleState}>Edit task</p>
                    <button className='button button--check' onClick={handleClick}>Delete</button>
                </div>
            </div>
            {
                updateMenu && <TaskUpdate 
                                    id={id} 
                                    name={name} 
                                    completed={completed} 
                                    modify={modify} 
                                    setModify={setModify} 
                                    setUpdateMenu={setUpdateMenu} 
                                />
            }
        </div>
    )
}

export default Task