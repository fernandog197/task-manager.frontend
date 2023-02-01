import { useState } from 'react'

import useFetch from '../../hooks/useFetch'

import TaskUpdate from '../TaskUpdate/TaskUpdate'

import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai'

import { getPatchDeleteOne } from '../../constants/endPoints'

import './task.css'

const Task = ({ id, name, completed, setModify, modify, setDeleteTask, language }) => {
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
                    <p onClick={handleState}>{language.home.card.editTask}</p>
                    <button className='button button--check' onClick={handleClick}>{language.home.card.button}</button>
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
                                    language={language}
                                />
            }
        </div>
    )
}

export default Task