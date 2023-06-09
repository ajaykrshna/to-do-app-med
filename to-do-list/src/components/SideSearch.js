import React, { useState } from 'react';

export default function SideSearch(props) {
    
    return (
        <div className='sidebartitles'>
            <h3 className='sidetitle'>{props.title}</h3>
            <p className='sidedate'>{props.date}</p>
        </div>
    )
}