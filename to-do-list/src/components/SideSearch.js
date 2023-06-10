import React, { useState } from 'react';

export default function SideSearch(props) {
    
    return (
        <div className='sidebartitles'>
            <a className='sidetitle' href={`#head${props.taskid}`}>{props.title}</a>
            <p className='sidedate'>{props.date}</p>
        </div>
    )
}