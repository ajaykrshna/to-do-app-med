import React, { useState } from 'react';
import SideSearch from './SideSearch';
import { useEffect } from 'react';

export default function SidebarTitles(props) {
    const [search, setSearch] = useState("")
    function handleChange(event) {
        setSearch(event.target.value)
    }

    const [index, setIndex] = useState(0)
    useEffect(() => {
        for (let i; i < props.tasks.length; i) {
            if (search == props.tasks[i].heading) {
                setIndex(i + 1)
            }
        }
    }, [search])

    const searchRes = (
        <div className='searchresults'>
            <h2 className='searchresults--head'>Search Results</h2>
            <SideSearch
                key={props.tasks.taskid}
                title={props.tasks.heading}
                date={props.tasks.date}
            />
        </div>
    )

    const sidebarinfo = props.tasks.map(tasks => {
        return (
            <SideSearch
                key={tasks.taskid}
                title={tasks.heading}
                date={tasks.date}
            />
        )
    })

    return (
        <div className='sidebar'>
            <div className='header--logo--text'>
                <h1>Do Them!</h1>
            </div>
            <div className='header--search'>
                <input
                    type='text'
                    placeholder='Search'
                    name='search'
                    value={search}
                    onChange={handleChange}
                />
            </div>
            {search === "" ? sidebarinfo : searchRes}

        </div>
    )
}