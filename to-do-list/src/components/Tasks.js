import React from 'react';

export default function Tasks(props) {
    const doneButton = (
        <button className='donebutton' onClick={props.handleTask}>Done</button>
    )
    const completebutton = (
        <button className='completebutton' onClick={props.handleTask}>Mark as Done</button>
    )
    console.log(`head${props.taskid}`)
    return (
        <div className='task'>
            <div className='task--data'>
                <div className='task--edit'>
                    <h2 className='task--name' id={`head${props.taskid}`}>{props.heading}</h2>
                    <div className='task--edit--div'>
                        <div
                            className='task--edit--button'
                            onClick={props.handleEdit}>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                        <div className='delete' onClick={props.handleDelete}>
                            <ion-icon name="trash-outline" className='delete-icon'></ion-icon>
                        </div>
                    </div>
                </div>
                <div className='task--info'>{props.desc}</div>
                <div className='task--type--container'>
                    <p className='task--type'>{props.type}</p>
                    <div className='task--color'></div>
                </div>
            </div>
            <div className='task--date'>
                <div className='task--date--date'>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <p className='task--date--day'>{props.date}</p>
                </div>
                <div className='compbutton'>
                    {props.completed ? doneButton : completebutton}
                </div>
            </div>
        </div>
    )
}