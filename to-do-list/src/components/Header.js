import React, { useState } from 'react';

export default function Header() {
    //const [search, setSearch] = useState("")
    return (
        <nav>
            <div className='header--logo--text'>
                <h1>Do Them!</h1>
            </div>
            <div className='header--head--text'>
                <h1>To Do</h1>
            </div>
            <div className='header--search'>
                <input
                    type='text'
                    placeholder='Search'
                />
            </div>
        </nav>
    )
}