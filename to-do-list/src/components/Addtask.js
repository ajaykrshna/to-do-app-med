import React, { useState } from 'react';

export default function Addtask(props) {
    let count = 4
    const [formData, setFormData] = useState({
        taskid:count,
        taskname: "",
        desc: "",
        type: "",
        date: "",
        completed: false
    })

    function handleOnChange(event) {
        const { name, value } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        //event.preventDefault()
        props.handleAddTask(formData,count)
        count = count+1
    }

    return (
        <div className='back'>
            <div className='addtask--form'>
                <form className='formtask' onSubmit={handleSubmit}>
                    <div className='form--name--div'>
                        <input
                            className='form--name'
                            type='text'
                            placeholder='Task Name'
                            name='taskname'
                            onChange={handleOnChange}
                            value={formData.taskname}
                        />
                    </div>
                    <div className='form--name--div'>
                        <input
                            type='text'
                            className='form--name'
                            placeholder='Description'
                            name="desc"
                            onChange={handleOnChange}
                            value={formData.desc}
                        />
                    </div>
                    <div className='form--name--div'>
                        <input
                            type='text'
                            className='form--name'
                            placeholder='Task type'
                            name='type'
                            onChange={handleOnChange}
                            value={formData.type}
                        />
                    </div>
                    <div className='buttondiv'>
                        <div className='form--name--date'>
                            <input
                                type='date'
                                className='form--date'
                                placeholder='Date'
                                name='date'
                                onChange={handleOnChange}
                                value={formData.date}
                            />
                        </div>
                        <button className='buttonadd'>Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
