import React, { useState } from 'react';

export default function Tasks() {
    return (
        <div className='task'>
            <div className='task--data'>
                <h2 className='task--name'>Slack Integration</h2>
                <div className='task--info'>
                    Add a field in the portal to let the user connect their Slack account.
                </div>
                <div className='task--type--container'>
                    <p className='task--type'>Development</p>
                    <div className='task--color'></div>
                </div>
            </div>
            <div className='task--date'>
                <ion-icon name="calendar-outline"></ion-icon>
                <p className='task--date--day'>Tomorrow</p>
            </div>
        </div>
    )
}