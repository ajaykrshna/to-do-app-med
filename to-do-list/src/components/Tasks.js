import React, { useState } from 'react';
import Addtask from './Addtask';

export default function Tasks(props) {
    const doneButton = (
        <button className='donebutton' onClick={props.handleTask}>Done</button>
    )
    const completebutton = (
        <button className='completebutton' onClick={props.handleTask}>Mark as Done</button>
    )
    return (
        <div className='task'>
            <div className='task--data'>
                <div className='task--edit'>
                    <h2 className='task--name'>{props.heading}</h2>
                    <div
                        className='task--edit--button'
                        onClick={props.handleEdit}>
                        <ion-icon name="create-outline"></ion-icon>
                    </div>
                    <div className='delete' onClick={props.handleDelete}>
                        <ion-icon name="trash-outline" className='delete-icon'></ion-icon>
                    </div>
                </div>
                <div className='task--info'>{props.desc}</div>
                <div className='task--type--container'>
                    <p className='task--type'>{props.type}</p>
                    <div className='task--color'></div>
                </div>
            </div>
            <div className='task--date'>
                <ion-icon name="calendar-outline"></ion-icon>
                <p className='task--date--day'>{props.date}</p>
                {props.completed ? doneButton : completebutton}
            </div>
        </div>
    )
}