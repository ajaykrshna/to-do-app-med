import React, { useState } from 'react';

export default function EditTask(props) {
    const [formData, setFormData] = useState({
        ...props.formData
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
        props.handleEditTask(formData)
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
                            name='heading'
                            onChange={handleOnChange}
                            value={formData.heading}
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
                        <button className='buttonadd'>Edit Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
