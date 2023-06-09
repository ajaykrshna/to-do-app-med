import React from 'react';

export default function SidebarTitles(props) {
    return (
        <div className='sidebar'>
            <div className='header--logo--text'>
                <h1>Do Them!</h1>
            </div>
            <div className='header--search'>
                <input
                    type='text'
                    placeholder='Search'
                />
            </div>
            <div className='sidebartitles'>
                <h3 className='sidetitle'>{props.title}</h3>
                <p className='sidedate'>{props.date}</p>
            </div>
        </div>
    )
}