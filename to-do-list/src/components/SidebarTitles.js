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
        for (let i = 0; i < props.tasks.length; i++) {
            console.log(i)
            if (search === props.tasks[i].heading) {
                setIndex(i)
                console.log(index)
            }
        }
    },[search])

    const searchRes = (
        <div className='sidebartitles'>
            <h2 className='searchresults--head'>Search Results</h2>
            <SideSearch
                key={props.tasks[index].taskid}
                title={props.tasks[index].heading}
                date={props.tasks[index].date}
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