import { useState } from 'react'

import useFetch from '../../hooks/useFetch'

import { getAllAndCreate } from '../../constants/endPoints'

import './taskinput.css'

const TaskInput = ({  setCreate, modify, setModify  }) => {
    const [input, setInput] = useState('')
    const [state, fetchPost] = useFetch()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(input === '') {
            return
        }

        fetchPost({
            method: 'post',
            url: getAllAndCreate,
            body: { name: input }
        })
        setInput('')
        setModify(!modify)
        setCreate(true)
    }

    return (
        <div className='taskinput__content'>
            <form className='taskinput__form' onSubmit={handleSubmit}>
                <div className="taskinput__form-div">
                    <label className="taskinput__form-tag">Add a new task</label>
                    <input 
                        type="text" 
                        name='task'
                        value={input}
                        className='taskinput__form-input' 
                        placeholder='Your task...'
                        onChange={handleChange}  
                    />
                    <button className='button taskinput__button' type='submit'>Add task</button>
                </div>
            </form>
        </div>
    )
}

export default TaskInput