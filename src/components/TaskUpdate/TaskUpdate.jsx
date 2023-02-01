import { useState } from 'react'

import useFetch from '../../hooks/useFetch'

import { getPatchDeleteOne } from '../../constants/endPoints'

import './taskupdate.css'

const TaskUpdate = ({ id, name, completed, setUpdateMenu, modify, setModify, language }) => {
    const [state, fetchUpdate] = useFetch()
    const[input, setInput] = useState({
        name,
        completed
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            name: e.target.value
        })
    }

    const handleClick = () => {
        setInput({
            ...input,
            completed: !input.completed
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input.name === name && input.completed === completed) {
            return setUpdateMenu(false)
        }

        fetchUpdate({
            url: getPatchDeleteOne(id),
            method: 'patch',
            body: input
        })
        setModify(!modify)
        setUpdateMenu(false)
    }

    return (
        <div className='taskupdate__container'>
            <h3>{language.home.edit.title}</h3>
            <form onSubmit={handleSubmit}>
                <div className='taskupdate__form-inputs'>
                    <div>
                        <label>{language.home.edit.completed}</label>
                        <input 
                            className='taskupdate__form-checkbox'
                            type="checkbox"
                            name='completed'
                            value={input.completed}
                            defaultChecked={completed?true:false}
                            onClick={handleClick}
                        />
                    </div>

                    <input 
                        className='taskupdate__form-input'
                        type="text"
                        name='name'
                        value={input.name}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='button button--check'>{language.home.edit.editTask}</button>
            </form>
        </div>
    )
}

export default TaskUpdate